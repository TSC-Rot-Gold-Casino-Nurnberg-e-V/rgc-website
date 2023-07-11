import { z } from "zod";

export const impressumSchema = z.object({
  id: z.number(),
  attributes: z.object({
    inhalt: z.string(),
  }),
});

export type Impressum = z.infer<typeof impressumSchema>;
