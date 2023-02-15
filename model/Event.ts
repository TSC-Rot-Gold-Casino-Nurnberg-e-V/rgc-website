import { z } from "zod";

export type Event = z.infer<typeof eventSchema>;

export const eventSchema = z.object({
  id: z.number(),
  attributes: z.object({
    eventName: z.string(),
    eventPreviewText: z.string(),
    eventDescription: z.string(),
    eventStartDate: z.string(),
    eventEndDate: z.string().nullable(),
  }),
});

export const eventsSchema = z.array(eventSchema);
