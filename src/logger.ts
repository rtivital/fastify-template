import { FastifyServerOptions } from 'fastify';
import pino from 'pino';
import { env } from './env.js';

export function getRequestLogger(): FastifyServerOptions['logger'] {
  if (env.NODE_ENV === 'development') {
    return pino({
      level: env.LOG_LEVEL,
      transport: {
        target: 'pino-pretty',
        options: {
          translateTime: 'HH:MM:ss',
          ignore: 'pid,hostname,reqId',
        },
      },
    });
  }

  return pino({ level: env.LOG_LEVEL });
}

export const logger = pino({
  level: env.NODE_ENV === 'development' ? 'debug' : env.LOG_LEVEL,
  transport: {
    target: 'pino-pretty',
    options: {
      translateTime: 'HH:MM:ss',
      ignore: 'pid,hostname,reqId',
    },
  },
});
