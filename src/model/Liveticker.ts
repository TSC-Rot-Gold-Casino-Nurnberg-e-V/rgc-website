import { z } from "zod";

export const livetickerSchema = z.object({
  id: z.number(),
  text: z.string().trim().min(1),
  link: z.string().trim().min(1).optional(),
});

export const strapiLivetickerSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      Text: z.string(),
      Link: z.string().nullish(),
    }),
  })
  .transform(({ id, attributes }) => ({
    id,
    text: attributes.Text,
    link: attributes.Link?.trim() ? attributes.Link : undefined,
  }))
  .pipe(livetickerSchema);

export type Liveticker = z.infer<typeof livetickerSchema>;
