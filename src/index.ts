import { env } from './env.js';
import { server } from './server.js';

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
