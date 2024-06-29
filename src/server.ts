import fastifyAccepts from '@fastify/accepts';
import cors from '@fastify/cors';
import helmet from '@fastify/helmet';
import fastify from 'fastify';
import { env } from './env.js';
import { getLogger } from './logger.js';

const server = fastify({
  logger: getLogger(),
  ignoreDuplicateSlashes: true,
  ignoreTrailingSlash: true,
});

server.register(helmet);
server.register(fastifyAccepts);

server.addHook('onRequest', (request, reply, done) => {
  if (!request.accepts().type(['application/json'])) {
    reply.code(415).send({ message: 'Unsupported Media Type' });
  } else {
    done();
  }
});

if (env.CORS !== '') {
  server.register(cors, { origin: env.CORS.split(',') });
}

server.get('/api/healthcheck', async () => {
  return { ok: true };
});

server.post('/api/echo', async (request) => {
  return request.body;
});

export { server };
