import 'dotenv/config';
import fastify from 'fastify';
import { env } from './env.js';
import { getLogger } from './logger.js';

const server = fastify({ logger: getLogger() });

server.get('/', async () => {
  return { hello: 'world' };
});

server.get('/err', async (request, reply) => {
  reply.status(400).send(new Error('Some error'));
});

const start = async () => {
  try {
    await server.listen({ port: env.PORT });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
