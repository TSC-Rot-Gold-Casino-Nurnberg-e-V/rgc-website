import { z } from "zod";

export const choreoSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      name: z.string(),
      beschreibung: z.string().nullish(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Choreo = z.infer<typeof choreoSchema>;
