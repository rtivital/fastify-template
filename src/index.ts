import 'dotenv/config';
import fastify from 'fastify';
import { env } from './env';

const server = fastify({ logger: true });

server.get('/', async () => {
  return { hello: 'world' };
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
