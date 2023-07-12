import { z } from "zod";

export const wochentagSchema = z.object({
  id: z.number(),
  attributes: z.object({
    titel: z.string(),
  }),
});

export type Wochentag = z.infer<typeof wochentagSchema>;
