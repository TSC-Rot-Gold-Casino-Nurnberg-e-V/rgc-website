import { z } from "zod";

export const ortSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      name: z.string(),
      strasse: z.string(),
      hausnummer: z.string(),
      postleitzahl: z.string(),
      stadt: z.string(),
      maps: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export const orteSchema = z.array(ortSchema);

export type Ort = z.infer<typeof ortSchema>;
