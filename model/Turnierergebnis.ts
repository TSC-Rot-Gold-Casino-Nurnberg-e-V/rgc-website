import { z } from "zod";

export const turnierergebnisSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      titel: z.string(),
      start: z.string(),
      ende: z.string().nullable(),
      link: z.string(),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export const turnierergebnisseSchema = z.array(turnierergebnisSchema);

export type Turnierergebnis = z.infer<typeof turnierergebnisSchema>;
