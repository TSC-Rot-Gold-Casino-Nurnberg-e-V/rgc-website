import { z } from "zod";

export const vorstandsmitgliedSchema = z.object({
  id: z.number(),
  attributes: z.object({
    rolle: z.string(),
    name: z.string(),
    telefonnummer: z.string(),
    email: z.string(),
    bild: z.object({
      data: z.object({
        attributes: z.object({
          url: z.string(),
        }),
      }),
    }),
  }),
});

export const vorstandsmitgliederSchema = z.array(vorstandsmitgliedSchema);

export type Vorstandsmitglied = z.infer<typeof vorstandsmitgliedSchema>;
