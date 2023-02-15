import { Post, postSchema, postsSchema } from "../model/Post";
import { Event, eventSchema, eventsSchema } from "../model/Event";

const basePostsUrl = `${process.env.CMS_URL}/api/posts`;
const baseEventsUrl = `${process.env.CMS_URL}/api/events`;
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
  const res = await fetch(`${basePostsUrl}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return postsSchema.parse(json.data);
}

export async function getPost(postID: string): Promise<Post> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${basePostsUrl}/${postID}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return postSchema.parse(json.data);
}

export async function getEvents(): Promise<Array<Event>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", "eventStartDate:asc");
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${baseEventsUrl}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return eventsSchema.parse(json.data);
}

export async function getEvent(eventID: string): Promise<Event> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${baseEventsUrl}/${eventID}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return eventSchema.parse(json.data);
}
