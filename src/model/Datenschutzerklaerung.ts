import { z } from "zod";

export const datenschutzerklaerungSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      inhalt: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Datenschutzerklaerung = z.infer<typeof datenschutzerklaerungSchema>;
