import { Client, Account, ID, Avatars, Databases, Query } from 'react-native-appwrite';

export const config = {
  endpoint: 'https://cloud.appwrite.io/v1',
  platform: 'com.personal.stockify.android',
  projectId: '6769173f00229e945ff0',
  databaseId: '676918f60031040cf0e9',
  userCollectionId: '676919a8002ec6522894',
  videoCollectionId: '676919d10036e3fe7539',
  storageId: '67691b7f00346c50b114'
}

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(config.endpoint) // Your Appwrite Endpoint
  .setProject(config.projectId) // Your project ID
  .setPlatform(config.platform) // Your application ID or bundle ID.
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
      config.databaseId,
      config.userCollectionId,
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
      config.databaseId,
      config.userCollectionId,
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