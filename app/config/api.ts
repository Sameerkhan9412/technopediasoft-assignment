export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

export async function fetchPosts(): Promise<Post[]> {
  const response = await fetch(API_URL);
  console.log('Response:', response);
  
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  
  const data: Post[] = await response.json();
  return data;
}