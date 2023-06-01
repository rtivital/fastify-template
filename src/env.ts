import { z } from 'zod';

const envSchema = z.object({
  PORT: z.preprocess(Number, z.number()).default(4321),
});

export const env = envSchema.parse(process.env);
