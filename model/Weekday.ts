import { z } from "zod";

export const weekdaySchema = z.object({
  id: z.number(),
  attributes: z.object({
    title: z.string(),
    value: z.number(),
  }),
});

export type Weekday = z.infer<typeof weekdaySchema>;
