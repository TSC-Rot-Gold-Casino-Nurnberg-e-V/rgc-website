import { z } from "zod";
import { trainerSchema } from "./Trainer";
import { weekdaySchema } from "./Weekday";

export const trainingSchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    room: z.enum(["Saal 1", "Saal 2", "Saal 3"]),
    trainers: z.object({
      data: z.array(trainerSchema),
    }),
    start: z.string(),
    end: z.string(),
    weekday: z.object({
      data: weekdaySchema,
    }),
  }),
});

export type Training = z.infer<typeof trainingSchema>;
