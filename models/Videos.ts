export interface Video {
  title: string;
  thumbnail: string;
  prompt: string;
  video: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  creator: Creator;
  $databaseId: string;
  $collectionId: string;
}

interface Creator {
  username: string;
  email: string;
  avatar: string;
  accountId: string;
  $id: string;
  $createdAt: string;
  $updatedAt: string;
  $permissions: string[];
  $databaseId: string;
  $collectionId: string;
}
