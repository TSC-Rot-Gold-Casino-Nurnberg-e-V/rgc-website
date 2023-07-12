import { z } from "zod";

export const datenschutzerklaerungSchema = z.object({
  id: z.number(),
  attributes: z.object({
    inhalt: z.string(),
  }),
});

export type Datenschutzerklaerung = z.infer<typeof datenschutzerklaerungSchema>;
