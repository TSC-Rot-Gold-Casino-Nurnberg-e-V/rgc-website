import { z } from "zod";

export const eventSchema = z.object({
  id: z.number(),
  attributes: z.object({
    name: z.string(),
    previewText: z.string(),
    description: z.string(),
    startDate: z.string(),
    endDate: z.string().nullable(),
  }),
});

export const eventsSchema = z.array(eventSchema);

export type Event = z.infer<typeof eventSchema>;
