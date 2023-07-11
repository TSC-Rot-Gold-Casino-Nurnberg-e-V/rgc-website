import { z } from "zod";

export const dokumentSchema = z.object({
  id: z.number(),
  attributes: z.object({
    titel: z.string(),
    datei: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

export const dokumenteSchema = z.array(dokumentSchema);

export type Dokument = z.infer<typeof dokumentSchema>;
