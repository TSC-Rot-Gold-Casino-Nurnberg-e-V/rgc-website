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

import { stringify } from "qs";
import { formationSchema } from "../model/Formation";

export async function getNeuigkeiten(
  pageSize: number,
  page: number = 1
): Promise<{ neuigkeiten: Array<Neuigkeit>; pagination: Pagination }> {
  const sortProperty: keyof Neuigkeit = "datum";
  const query = stringify({
    sort: `${sortProperty}:desc`,
    populate: "*",
    pagination: {
      pageSize: pageSize,
      page: page,
    },
  });
  const { data, meta } = await fetchData(`/neuigkeiten?${query}`);
  return {
    neuigkeiten: neuigkeitenSchema.parse(data),
    pagination: paginationSchema.parse(meta.pagination),
  };
}

export async function getNeuigkeit(slug: string): Promise<Neuigkeit> {
  const query = stringify({
    populate: "*",
  });
  const { data } = await fetchData(`/slugify/slugs/neuigkeit/${slug}?${query}`);
  return neuigkeitSchema.parse(data);
}
export async function getSlugs(collection: string): Promise<Array<string>> {
  const pageSize = 25;
  const query = stringify({
    fields: "slug",
  });
  const { data, meta } = await fetchData(`/${collection}?${query}`);
  const pagination: Pagination = paginationSchema.parse(meta.pagination);
  let allSlugs: Array<Slug> = slugsSchema.parse(data);
  for (let page = 2; page <= pagination.pageCount; page++) {
    const query = stringify({
      pagination: {
        pageSize: pageSize,
        page: page,
      },
    });
    const { data } = await fetchData(`/${collection}?${query}`);
    const slugs: Array<Slug> = slugsSchema.parse(data);
    allSlugs = allSlugs.concat(slugs);
  }
  return allSlugs;
}

export async function getVeranstaltungen(): Promise<Array<Veranstaltung>> {
  const currentDateISO = new Date().toISOString().substring(0, 10);
  const start: keyof Veranstaltung = "start";
  const ende: keyof Veranstaltung = "ende";
  const query = stringify({
    sort: `${start}:asc`,
    populate: "*",
    filters: {
      $or: [
        { [start]: { $gte: currentDateISO } },
        { [ende]: { $gte: currentDateISO } },
      ],
    },
  });
  const { data } = await fetchData(`/veranstaltungen?${query}`);
  return veranstaltungenSchema.parse(data);
}

export async function getVeranstaltung(slug: string): Promise<Veranstaltung> {
  const query = stringify({
    populate: "*",
  });
  const { data } = await fetchData(
    `/slugify/slugs/veranstaltung/${slug}?${query}`
  );
  return veranstaltungSchema.parse(data);
}

export async function getVereinsgeschichte(): Promise<Vereinsgeschichte> {
  const { data } = await fetchData("/vereinsgeschichte");
  return vereinsgeschichteSchema.parse(data);
}

export async function getAngebot(slug: string): Promise<Angebot> {
  const query = stringify({
    populate: {
      faqs: true,
      trainers: {
        populate: {
          lizenzen: true,
          person: {
            populate: "*",
          },
        },
      },
      trainings: {
        populate: {
          wochentag: true,
          trainers: {
            populate: {
              lizenzen: true,
              person: {
                populate: "*",
              },
            },
          },
        },
      },
    },
  });
  const { data } = await fetchData(`/slugify/slugs/angebot/${slug}?${query}`);
  return angebotSchema.parse(data);
}

export async function getFormation(slug: string) {
  const query = stringify({
    populate: {
      teams: {
        populate: {
          bild: true,
          trainers: {
            populate: {
              lizenzen: true,
              person: {
                populate: "*",
              },
            },
          },
          kapitaene: {
            populate: "*",
          },
          choreo: true,
          liga: true,
        },
      },
    },
  });
  const { data } = await fetchData(`/slugify/slugs/formation/${slug}?${query}`);
  return formationSchema.parse(data);
}

export async function getVorstandsmitglieder(): Promise<
  Array<Vorstandsmitglied>
> {
  const query = stringify({
    sort: `reihenfolge:asc`,
    populate: {
      person: {
        populate: "*",
      },
    },
  });
  const { data } = await fetchData(`/vorstandsmitglieder?${query}`);
  return vorstandsmitgliederSchema.parse(data);
}

export async function getCheftrainers(): Promise<Array<Cheftrainer>> {
  const query = stringify({
    populate: {
      trainer: {
        populate: {
          lizenzen: true,
          person: {
            populate: "*",
          },
        },
      },
    },
  });
  const { data } = await fetchData(`/cheftrainers?${query}`);
  return cheftrainersSchema.parse(data);
}

export async function getDokumente(): Promise<Array<Dokument>> {
  const query = stringify({
    populate: "*",
  });
  const { data } = await fetchData(`/dokumente?${query}`);
  return dokumenteSchema.parse(data);
}

export async function getDatenschutzerklaerung(): Promise<Datenschutzerklaerung> {
  const query = stringify({
    populate: "*",
  });
  const { data } = await fetchData(`/datenschutzerklaerung?${query}`);
  return datenschutzerklaerungSchema.parse(data);
}

export async function getImpressum(): Promise<Impressum> {
  const query = stringify({
    populate: "*",
  });
  const { data } = await fetchData(`/impressum?${query}`);
  return impressumSchema.parse(data);
}

export async function getTurnierergebnisse(): Promise<Array<Turnierergebnis>> {
  const query = stringify({
    populate: "*",
  });
  const { data } = await fetchData(`/turnierergebnisse?${query}`);
  return turnierergebnisseSchema.parse(data);
}

const BASE_URL = `${process.env.NEXT_PUBLIC_CMS_URL}/api`;

async function fetchData(path: string): Promise<{
  data: unknown | Array<unknown>;
  meta: {
    pagination?: Pagination;
  };
}> {
  const res = await fetch(BASE_URL + path);
  await handleError(res);
  return await res.json();
}

async function handleError(res: Response) {
  if (!res.ok) {
    console.error("An error occurred while fetching data from the CMS: ");
    console.error("status: ", res.status);
    console.error("statusText: ", res.statusText);
    const error = await res.json();
    console.error("payload: ", error);
    throw new Error(JSON.stringify(error));
  }
}
