import { z } from "zod";
import { ortSchema } from "./Ort";

export const veranstaltungSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      slug: z.string(),
      titel: z.string(),
      beschreibung: z.string(),
      start: z.string(),
      ende: z.string().nullable(),
      ort: z
        .object({
          data: ortSchema,
        })
        .transform(({ data }) => data),
      helfertool: z.string().nullish(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export const veranstaltungenSchema = z.array(veranstaltungSchema);

export type Veranstaltung = z.infer<typeof veranstaltungSchema>;
