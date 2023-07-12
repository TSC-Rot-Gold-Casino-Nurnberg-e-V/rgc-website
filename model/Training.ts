import { z } from "zod";
import { trainerSchema } from "./Trainer";
import { wochentagSchema } from "./Wochentag";

export const trainingSchema = z.object({
  id: z.number(),
  attributes: z.object({
    titel: z.string(),
    saal: z.enum(["Saal 1", "Saal 2", "Saal 3"]),
    trainers: z.object({
      data: z.array(trainerSchema),
    }),
    start: z.string(),
    ende: z.string(),
    wochentag: z.object({
      data: wochentagSchema,
    }),
  }),
});

export type Training = z.infer<typeof trainingSchema>;
