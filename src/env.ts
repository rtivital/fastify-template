import { z } from 'zod';

const envSchema = z.object({
  PORT: z.preprocess(Number, z.number()).default(4321),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
});

export const env = envSchema.parse(process.env);
