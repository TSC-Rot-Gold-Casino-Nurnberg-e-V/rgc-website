import {
  Neuigkeit,
  neuigkeitenSchema,
  neuigkeitSchema,
} from "../model/Neuigkeit";
import {
  Veranstaltung,
  veranstaltungenSchema,
  veranstaltungSchema,
} from "../model/Veranstaltung";
import {
  Vereinsgeschichte,
  vereinsgeschichteSchema,
} from "../model/Vereinsgeschichte";
import { Angebot, angebotSchema } from "../model/Angebot";
import {
  Vorstandsmitglied,
  vorstandsmitgliederSchema,
} from "../model/Vorstandsmitglied";
import { Dokument, dokumenteSchema } from "../model/Dokument";
import {
  Datenschutzerklaerung,
  datenschutzerklaerungSchema,
} from "../model/Datenschutzerklaerung";
import { Impressum, impressumSchema } from "../model/Impressum";
import {
  Turnierergebnis,
  turnierergebnisseSchema,
} from "../model/Turnierergebnis";
import { Pagination, paginationSchema } from "../model/Pagination";
import { Slug, slugsSchema } from "../model/Slug";
import { Cheftrainer, cheftrainersSchema } from "../model/Cheftrainer";

export async function getNeuigkeiten(
  pageSize: number,
  page: number = 1
): Promise<{ neuigkeiten: Array<Neuigkeit>; pagination: Pagination }> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", "datum:desc");
  urlSearchParams.append("populate", "*");
  urlSearchParams.append("pagination[pageSize]", pageSize.toString());
  urlSearchParams.append("pagination[page]", page.toString());
  const { data, meta } = await fetchData(`/neuigkeiten?${urlSearchParams}`);
  return {
    neuigkeiten: neuigkeitenSchema.parse(data),
    pagination: paginationSchema.parse(meta.pagination),
  };
}

export async function getNeuigkeit(slug: string): Promise<Neuigkeit> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(
    `/slugify/slugs/neuigkeit/${slug}?${urlSearchParams}`
  );
  return neuigkeitSchema.parse(data);
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

export async function getVeranstaltungen(): Promise<Array<Veranstaltung>> {
  const urlSearchParams = new URLSearchParams();
  const sortProperty: keyof Veranstaltung["attributes"] = "start";
  urlSearchParams.append("sort", `${sortProperty}:asc`);
  urlSearchParams.append("populate", "*");
  const isoDate = new Date().toISOString().substring(0, 10);
  const filterProperty: keyof Veranstaltung["attributes"] = "start";
  urlSearchParams.append(`filters[${filterProperty}][$gte]`, isoDate);
  const { data } = await fetchData(`/veranstaltungen?${urlSearchParams}`);
  return veranstaltungenSchema.parse(data);
}

export async function getVeranstaltung(slug: string): Promise<Veranstaltung> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(
    `/slugify/slugs/veranstaltung/${slug}?${urlSearchParams}`
  );
  return veranstaltungSchema.parse(data);
}

export async function getVereinsgeschichte(): Promise<Vereinsgeschichte> {
  const { data } = await fetchData("/vereinsgeschichte");
  return vereinsgeschichteSchema.parse(data);
}

export async function getAngebot(slug: string): Promise<Angebot> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate[0]", "trainers");
  urlSearchParams.append("populate[1]", "trainers.bild");
  urlSearchParams.append("populate[2]", "trainings");
  urlSearchParams.append("populate[3]", "trainings.wochentag");
  urlSearchParams.append("populate[4]", "trainings.trainers");
  urlSearchParams.append("populate[5]", "trainings.trainers.bild");
  urlSearchParams.append("populate[6]", "trainings.trainers.lizenzen");
  urlSearchParams.append("populate[7]", "trainers.lizenzen");
  urlSearchParams.append("populate[8]", "faqs");
  const { data } = await fetchData(
    `/slugify/slugs/angebot/${slug}?${urlSearchParams}`
  );
  return angebotSchema.parse(data);
}

export async function getVorstandsmitglieder(): Promise<
  Array<Vorstandsmitglied>
> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("sort", `reihenfolge:asc`);
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/vorstandsmitglieder?${urlSearchParams}`);
  return vorstandsmitgliederSchema.parse(data);
}

export async function getCheftrainers(): Promise<Array<Cheftrainer>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate[0]", "trainer");
  urlSearchParams.append("populate[1]", "trainer.name");
  urlSearchParams.append("populate[2]", "trainer.beschreibung");
  urlSearchParams.append("populate[3]", "trainer.lizenzen");
  urlSearchParams.append("populate[4]", "trainer.bild");
  const { data } = await fetchData(`/cheftrainers?${urlSearchParams}`);
  return cheftrainersSchema.parse(data);
}

export async function getDokumente(): Promise<Array<Dokument>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/dokumente?${urlSearchParams}`);
  return dokumenteSchema.parse(data);
}

export async function getDatenschutzerklaerung(): Promise<Datenschutzerklaerung> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/datenschutzerklaerung?${urlSearchParams}`);
  return datenschutzerklaerungSchema.parse(data);
}

export async function getImpressum(): Promise<Impressum> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/impressum?${urlSearchParams}`);
  return impressumSchema.parse(data);
}

export async function getTurnierergebnisse(): Promise<Array<Turnierergebnis>> {
  const urlSearchParams = new URLSearchParams();
  urlSearchParams.append("populate", "*");
  const { data } = await fetchData(`/turnierergebnisse?${urlSearchParams}`);
  return turnierergebnisseSchema.parse(data);
}

const BASE_URL = `${process.env.NEXT_PUBLIC_CMS_URL}/api`;

async function fetchData(path: string): Promise<{
  data: unknown | Array<unknown>;
  meta: {
    pagination?: Pagination;
  };
}> {
  const isClientSide = typeof window !== "undefined";
  const res = await fetch(BASE_URL + path, {
    headers: {
      Authorization: `Bearer ${
        isClientSide
          ? process.env.NEXT_PUBLIC_CMS_CLIENT_TOKEN
          : process.env.CMS_SERVER_TOKEN
      }`,
    },
  });
  if (!res.ok) {
    const error = await res.json();
    throw new Error(JSON.stringify(error));
  }
  return await res.json();
}
