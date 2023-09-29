import fastify from 'fastify';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import formBody from '@fastify/formbody';
import { env } from './env.js';
import { getLogger } from './logger.js';

const server = fastify({
  logger: getLogger(),
  ignoreDuplicateSlashes: true,
  ignoreTrailingSlash: true,
});

server.register(helmet);
server.register(formBody);

if (env.CORS !== '') {
  server.register(cors, { origin: env.CORS.split(',') });
}

server.get('/api/healthcheck', async () => {
  return { ok: true };
});

export { server };
