import { z } from "zod";

export const veranstaltungSchema = z.object({
  id: z.number(),
  attributes: z.object({
    slug: z.string(),
    titel: z.string(),
    vorschautext: z.string(),
    beschreibung: z.string(),
    start: z.string(),
    ende: z.string().nullable(),
  }),
});

export const veranstaltungenSchema = z.array(veranstaltungSchema);

export type Veranstaltung = z.infer<typeof veranstaltungSchema>;
