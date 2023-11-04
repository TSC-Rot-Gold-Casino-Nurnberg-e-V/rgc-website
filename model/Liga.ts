import { z } from "zod";

export const ligaSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      name: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Liga = z.infer<typeof ligaSchema>;
