import { env } from './env.js';
import { logger } from './logger.js';
import { server } from './server.js';

const start = async () => {
  try {
    logger.info(`Server listening at http://${env.HOST}:${env.PORT}`);
    await server.listen({ port: env.PORT, host: env.HOST });
  } catch (err) {
    server.log.error(err);
    process.exit(1);
  }
};

start();
