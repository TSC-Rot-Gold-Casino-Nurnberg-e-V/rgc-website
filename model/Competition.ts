import { z } from "zod";

export const competitionSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
    resultLink: z.string(),
  }),
});

export const competitionsSchema = z.array(competitionSchema);

export type Competition = z.infer<typeof competitionSchema>;
