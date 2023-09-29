import { z } from 'zod';

const envSchema = z.object({
  PORT: z.preprocess(Number, z.number()).default(4321),
  HOST: z.string().default('localhost'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('production'),
  CORS: z.string().default(''),
});

export const env = envSchema.parse(process.env);
