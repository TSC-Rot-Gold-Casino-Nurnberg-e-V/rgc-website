import { Post, postSchema, postsSchema } from "../model/Post";
import { Event, eventSchema, eventsSchema } from "../model/Event";
import { History, historySchema } from "../model/History";
import { Offer, offerSchema } from "../model/Offer";
import { Executive, executivesSchema } from "../model/Executive";
import { Membership, membershipsShema } from "../model/Membership";
import { Policy, privacyPolicySchema } from "../model/Policy";
import { Legal, legalNoticeSchema } from "../model/Legal";
import { Competition, competitionsSchema } from "../model/Competition";
import { Pagination, paginationSchema } from "../model/Pagination";
import { Slug, slugsSchema } from "../model/Slug";

const baseUrl = `${process.env.NEXT_PUBLIC_CMS_URL}/api`;
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
  const { data, meta } = await fetchData(`/posts?${urlSearchParams}`);
  return {
    posts: postsSchema.parse(data),
    pagination: paginationSchema.parse(meta.pagination),
  };
}

export async function getPost(slug: string): Promise<Post> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(
    `/slugify/slugs/post/${slug}?${urlSearchParams}`
  );
  return postSchema.parse(data);
}
export async function getSlugs(collection: string): Promise<Array<string>> {
  const pageSize = 25;
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("fields", "slug");
  const { data, meta } = await fetchData(`/${collection}?${urlSearchParams}`);
  const pagination: Pagination = paginationSchema.parse(meta.pagination);
  let allSlugs: Array<Slug> = slugsSchema.parse(data);
  for (let page = 2; page <= pagination.pageCount; page++) {
    const urlSearchParams = new URLSearchParams();
    urlSearchParams.append("pagination[pageSize]", pageSize.toString());
    urlSearchParams.append("pagination[page]", page.toString());
    const { data } = await fetchData(`/${collection}?${urlSearchParams}`);
    const slugs: Array<Slug> = slugsSchema.parse(data);
    allSlugs = allSlugs.concat(slugs);
  }
  return allSlugs.map((slug) => slug.attributes.slug);
}

export async function getEvents(): Promise<Array<Event>> {
  const urlSearchParams = new URLSearchParams();
  const sortProperty: keyof Event["attributes"] = "startDate";
  urlSearchParams.append("sort", `${sortProperty}:asc`);
  urlSearchParams.append("populate", "*");
  const isoDate = new Date().toISOString().substring(0, 10);
  const filterProperty: keyof Event["attributes"] = "startDate";
  urlSearchParams.append(`filters[${filterProperty}][$gte]`, isoDate);
  const { data } = await fetchData(`/events?${urlSearchParams}`);
  return eventsSchema.parse(data);
}

export async function getEvent(slug: string): Promise<Event> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(
    `/slugify/slugs/event/${slug}?${urlSearchParams}`
  );
  return eventSchema.parse(data);
}

export async function getHistory(): Promise<History> {
  const { data } = await fetchData("/history");
  return historySchema.parse(data);
}

export async function getOffer(slug: string): Promise<Offer> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate[0]", "trainers");
  urlSearchParams.append("populate[1]", "trainers.image");
  urlSearchParams.append("populate[2]", "trainings");
  urlSearchParams.append("populate[3]", "trainings.weekday");
  urlSearchParams.append("populate[4]", "trainings.trainers");
  urlSearchParams.append("populate[5]", "trainings.trainers.image");
  urlSearchParams.append("populate[6]", "faqs");
  const { data } = await fetchData(
    `/slugify/slugs/offer/${slug}?${urlSearchParams}`
  );
  return offerSchema.parse(data);
}

export async function getExecutives(): Promise<Array<Executive>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", `id:asc`);
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/executives?${urlSearchParams}`);
  return executivesSchema.parse(data);
}

export async function getMembership(): Promise<Array<Membership>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/memberships?${urlSearchParams}`);
  return membershipsShema.parse(data);
}

export async function getPrivacyPolicy(): Promise<Policy> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/privacy-policy?${urlSearchParams}`);
  return privacyPolicySchema.parse(data);
}

export async function getLegalNotice(): Promise<Legal> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/legal-notice?${urlSearchParams}`);
  return legalNoticeSchema.parse(data);
}

export async function getCompetitionResults(): Promise<Array<Competition>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/competition-results?${urlSearchParams}`);
  return competitionsSchema.parse(data);
}

async function fetchData(path: string): Promise<{
  data: unknown | Array<unknown>;
  meta: {
    pagination?: Pagination;
  };
}> {
  const res = await fetch(baseUrl + path, {
    headers: headers,
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
  return await res.json();
}
