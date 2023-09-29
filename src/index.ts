import 'dotenv/config';
import fastify from 'fastify';
import { env } from './env.js';
import { getLogger } from './logger.js';

const server = fastify({
  logger: getLogger(),
  ignoreDuplicateSlashes: true,
  ignoreTrailingSlash: true,
});

server.get('/api', async () => {
  return { hello: 'world' };
});

server.get('/err', async (request, reply) => {
  reply.status(400).send(new Error('Some error'));
});

const start = async () => {
  try {
    await server.listen({ port: env.PORT, host: env.HOST });
    server.log.info(`Server listening at http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
