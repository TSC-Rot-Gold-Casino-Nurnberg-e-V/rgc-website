import { z } from "zod";

export const partnersSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      inhalt: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Partner = z.infer<typeof partnersSchema>;
