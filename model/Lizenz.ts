import { z } from "zod";

export const lizenzSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      name: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Lizenz = z.infer<typeof lizenzSchema>;
