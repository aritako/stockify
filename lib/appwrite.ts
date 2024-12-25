import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';
import { endpoint, platform, projectId, databaseId, userCollectionId, videoCollectionId, storageId } from '../constants/appwrite_config';
import { Video } from '@/models/Videos';

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(endpoint) // Your Appwrite Endpoint
  .setProject(projectId) // Your project ID
  .setPlatform(platform) // Your application ID or bundle ID.
  ;

const account = new Account(client);
const avatars = new Avatars(client);
const databases = new Databases(client);

export async function createUser(email: string, password: string, username: string) {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username)
    if (!newAccount) {
      throw new Error("Account not created")
    }

    const avatarUrl = avatars.getInitials(username)

    await signIn(email, password)

    const newUser = await databases.createDocument(
      databaseId,
      userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email: email,
        username,
        avatar: avatarUrl
      }
    )
    return newUser
  } catch (error) {
    console.log(error)
    throw new Error(String(error))
  }
}

export async function signIn(email: string, password: string) {
  try {
    const session = account.createEmailPasswordSession(email, password)
    return session;
  } catch (error) {
    throw new Error(String(error))
  }

}

export async function getCurrentUser() {
  try {
    const currentAccount = await account.get()

    if (!currentAccount) {
      throw new Error("Account not found.")
    }

    const currentUser = await databases.listDocuments(
      databaseId,
      userCollectionId,
      [Query.equal('accountId', currentAccount.$id)]
    )
    if (!currentUser) {
      throw new Error("User not found.")
    }

    return currentUser.documents[0]
  } catch (error) {
    throw new Error(String(error))
  }
}

export async function getAllPosts(): Promise<Video[]> {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId
    )
    if (!posts) {
      throw new Error("Posts not found.")
    }
    return posts.documents as Video[]
  } catch (error) {
    throw new Error(String(error))
  }
}

export async function getLatestPosts(): Promise<Video[]> {
  try {
    const posts = await databases.listDocuments(
      databaseId,
      videoCollectionId,
      [Query.orderDesc('$createdAt'), Query.limit(7)]
    )
    if (!posts) {
      throw new Error("Posts not found.")
    }
    return posts.documents as Video[]
  } catch (error) {
    throw new Error(String(error))
  }
}