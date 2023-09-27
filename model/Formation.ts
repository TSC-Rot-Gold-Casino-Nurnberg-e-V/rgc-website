import { z } from "zod";
import { teamSchema } from "./Team";

export const formationSchema = z
  .object({
    id: z.number(),
    attributes: z.object({
      titel: z.string(),
      beschreibung: z.string(),
      teams: z
        .object({
          data: z.array(teamSchema),
        })
        .transform(({ data }) => data),
    }),
  })
  .transform(({ id, attributes }) => ({ id, ...attributes }));

export type Formation = z.infer<typeof formationSchema>;
