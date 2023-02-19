import { Post, postSchema, postsSchema } from "../model/Post";
import { Event, eventSchema, eventsSchema } from "../model/Event";
import { History, historySchema } from "../model/History";

const baseUrl = `${process.env.CMS_URL}/api`;
const headers = new Headers();
headers.append("Authorization", `Bearer ${process.env.CMS_TOKEN}`);

export async function getPosts(): Promise<Array<Post>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", "chronologicalPosition:desc");
  urlSearchParams.append("populate", "*");
  const data = fetchData(`/posts?${urlSearchParams}`);
  return postsSchema.parse(data);
}

export async function getPost(postID: string): Promise<Post> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = fetchData(`/posts/${postID}?${urlSearchParams}`);
  return postSchema.parse(data);
}

export async function getEvents(): Promise<Array<Event>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", "eventStartDate:asc");
  urlSearchParams.append("populate", "*");
  const isoDate = new Date().toISOString().substring(0, 10);
  const property: keyof Event["attributes"] = "eventStartDate";
  urlSearchParams.append(`filters[${property}][$gte]`, isoDate);
  const data = fetchData(`/events?${urlSearchParams}`);
  return eventsSchema.parse(data);
}

export async function getEvent(eventID: string): Promise<Event> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = fetchData(`/events/${eventID}?${urlSearchParams}`);
  return eventSchema.parse(data);
}

export async function getHistory(): Promise<History> {
  const data = fetchData("/history");
  return historySchema.parse(data);
}

async function handleError(res: Response) {
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
}

async function fetchData(path: string) {
  const res = await fetch(baseUrl + path, {
    headers: headers,
  });
  await handleError(res);
  return (await res.json()).data;
}
