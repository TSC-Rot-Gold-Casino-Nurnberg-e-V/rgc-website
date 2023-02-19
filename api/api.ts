import { Post, postSchema, postsSchema } from "../model/Post";
import { Event, eventSchema, eventsSchema } from "../model/Event";
import { History, historySchema } from "../model/History";

const baseUrl = `${process.env.CMS_URL}/api`;
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
  const res = await fetch(`${baseUrl}/posts?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return postsSchema.parse(json.data);
}

export async function getPost(postID: string): Promise<Post> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${baseUrl}/posts/${postID}?${urlSearchParams}`, {
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
  const isoDate = new Date().toISOString().substring(0, 10);
  const property: keyof Event["attributes"] = "eventStartDate";
  urlSearchParams.append(`filters[${property}][$gte]`, isoDate);
  const res = await fetch(`${baseUrl}/events?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return eventsSchema.parse(json.data);
}

export async function getEvent(eventID: string): Promise<Event> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const res = await fetch(`${baseUrl}/events/${eventID}?${urlSearchParams}`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return eventSchema.parse(json.data);
}

export async function getHistory(): Promise<History> {
  const res = await fetch(`${baseUrl}/history`, {
    headers: headers,
  });
  await handleError(res);
  const json = await res.json();
  return historySchema.parse(json.data);
}
