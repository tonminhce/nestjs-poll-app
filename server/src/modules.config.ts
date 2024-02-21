import { Logger } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { RedisModule } from './redis.module';

export const redisModule = RedisModule.registerAsync({
  imports: [ConfigModule],
  useFactory: async (configService: ConfigService) => {
    const logger = new Logger('RedisModule');
    const hostredis = configService.get('REDIS_HOST');
    const portredis = configService.get('REDIS_PORT');
    return {
      connectionOptions: {
        host: hostredis,
        port: portredis,
      },
      onClientReady: (client) => {
        logger.log('Redis client ready');

        client.on('error', (err) => {
          logger.error('Redis Client Error: ', err);
        });

        client.on('connect', () => {
          logger.log(
            `Connected to redis`,
          );
        });
      },
    };
  },
  inject: [ConfigService],
});
