import { Post, postSchema, postsSchema } from "../model/Post";

const baseURL = `${process.env.CMS_URL}/api/posts`;
const headers = new Headers();
headers.append("Authorization", `Bearer ${process.env.CMS_TOKEN}`);

async function handleError(res: Response) {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
}

export async function getPosts(): Promise<Array<Post>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", "chronologicalPosition:desc");
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${baseURL}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return postsSchema.parse(json.data);
}

export async function getPost(postID: string): Promise<Post> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${baseURL}/${postID}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return postSchema.parse(json.data);
}
