import { FastifyServerOptions } from 'fastify';
import { env } from './env.js';

export function getLogger(): FastifyServerOptions['logger'] {
  if (env.NODE_ENV === 'development') {
    return {
      level: 'info',
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname,reqId',
        },
      },
    };
  }

  return env.NODE_ENV === 'production';
}
