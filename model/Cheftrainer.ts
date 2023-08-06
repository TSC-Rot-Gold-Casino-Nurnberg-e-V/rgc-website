import { z } from "zod";
import { trainerSchema } from "./Trainer";

export const cheftrainerSchema = z.object({
  id: z.number(),
  attributes: z.object({
    titel: z.string(),
    trainer: z.object({
      data: trainerSchema,
    }),
  }),
});

export const cheftrainersSchema = z.array(cheftrainerSchema);

export type Cheftrainer = z.infer<typeof cheftrainerSchema>;
