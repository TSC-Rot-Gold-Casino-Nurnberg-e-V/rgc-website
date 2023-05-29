import { Post, postSchema, postsSchema } from "../model/Post";
import { Event, eventSchema, eventsSchema } from "../model/Event";
import { History, historySchema } from "../model/History";
import { Course, courseSchema, coursesSchema } from "../model/Course";
import { Executive, executivesSchema } from "../model/Executive";
import { Membership, membershipsShema } from "../model/Membership";
import { Policy, privacyPolicySchema } from "../model/Policy";
import { Legal, legalNoticeSchema } from "../model/Legal";
import { Competition, competitionsSchema } from "../model/Competition";
import { Pagination } from "../model/Pagination";

const baseUrl = `${process.env.CMS_URL}/api`;
const headers = new Headers();
headers.append("Authorization", `Bearer ${process.env.CMS_TOKEN}`);

export async function getPosts(
  pageSize: number,
  page: number = 1
): Promise<{ posts: Array<Post>; pagination: Pagination }> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", "chronologicalPosition:desc");
  urlSearchParams.append("populate", "*");
  urlSearchParams.append("pagination[pageSize]", pageSize.toString());
  urlSearchParams.append("pagination[page]", page.toString());
  const headers = new Headers();
  headers.append(
    "Authorization",
    `Bearer ${process.env.NEXT_PUBLIC_GET_POSTS_TOKEN}`
  );
  const res = await fetch(baseUrl + `/posts?${urlSearchParams}`, {
    headers: headers,
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
  const body = await res.json();
  return {
    posts: postsSchema.parse(body.data),
    pagination: body.meta.pagination,
  };
}

export async function getPost(postID: string): Promise<Post> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/posts/${postID}?${urlSearchParams}`);
  return postSchema.parse(data);
}

export async function getAllPosts(): Promise<Array<Post>> {
  const pageSize = 25;
  const { posts, pagination } = await getPosts(pageSize, 1);
  let allPosts: Array<Post> = posts;
  for (let page = 2; page <= pagination.pageCount; page++) {
    const { posts } = await getPosts(pageSize, page);
    allPosts = allPosts.concat(posts);
  }
  return allPosts;
}

export async function getEvents(): Promise<Array<Event>> {
  const urlSearchParams = new URLSearchParams();
  const sortProperty: keyof Event["attributes"] = "startDate";
  urlSearchParams.append("sort", `${sortProperty}:asc`);
  urlSearchParams.append("populate", "*");
  const isoDate = new Date().toISOString().substring(0, 10);
  const filterProperty: keyof Event["attributes"] = "startDate";
  urlSearchParams.append(`filters[${filterProperty}][$gte]`, isoDate);
  const data = await fetchData(`/events?${urlSearchParams}`);
  return eventsSchema.parse(data);
}

export async function getEvent(eventID: string): Promise<Event> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/events/${eventID}?${urlSearchParams}`);
  return eventSchema.parse(data);
}

export async function getHistory(): Promise<History> {
  const data = await fetchData("/history");
  return historySchema.parse(data);
}

export async function getCourses(): Promise<Array<Course>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate[0]", "previewImage");
  urlSearchParams.append("populate[1]", "trainers.image");
  const data = await fetchData(`/courses?${urlSearchParams}`);
  return coursesSchema.parse(data);
}

export async function getCourse(courseID: string): Promise<Course> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate[0]", "previewImage");
  urlSearchParams.append("populate[1]", "trainers.image");
  const data = await fetchData(`/courses/${courseID}?${urlSearchParams}`);
  return courseSchema.parse(data);
}

export async function getExecutives(): Promise<Array<Executive>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", `id:asc`);
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/executives?${urlSearchParams}`);
  return executivesSchema.parse(data);
}

export async function getMembership(): Promise<Array<Membership>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/memberships?${urlSearchParams}`);
  return membershipsShema.parse(data);
}

export async function getPrivacyPolicy(): Promise<Policy> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/privacy-policy?${urlSearchParams}`);
  return privacyPolicySchema.parse(data);
}

export async function getLegalNotice(): Promise<Legal> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/legal-notice?${urlSearchParams}`);
  return legalNoticeSchema.parse(data);
}

export async function getCompetitionResults(): Promise<Array<Competition>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const data = await fetchData(`/competition-results?${urlSearchParams}`);
  return competitionsSchema.parse(data);
}

async function fetchData(path: string) {
  const res = await fetch(baseUrl + path, {
    headers: headers,
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
  return (await res.json()).data;
}
