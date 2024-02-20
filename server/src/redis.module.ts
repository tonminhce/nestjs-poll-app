import { DynamicModule, FactoryProvider, ModuleMetadata } from '@nestjs/common';
import { Module } from '@nestjs/common';
import IORedis, { Redis, RedisOptions } from 'ioredis';

export const IORedisKey = 'Tonminh2412';

type RedisModuleOptions = {
  connectingOptions: RedisOptions;
  onClientReady?: (client: Redis) => void;
};

type RedisAsyncModuleOptions = {
  useFactory: (
    ...args: any[]
  ) => Promise<RedisModuleOptions> | RedisModuleOptions;
} & Pick<ModuleMetadata, 'imports'> &
  Pick<FactoryProvider, 'inject'>;

@Module({})
export class RedisModule {
  static async registerAsync({
    useFactory,
    imports,
    inject,
  }: RedisAsyncModuleOptions): Promise<DynamicModule> {
    const redisProvider = {
      provide: IORedisKey,
      useFactory: async (...args: any[]) => {
        const options = await useFactory(...args);
        const client = new IORedis(options.connectingOptions);
        if (options.onClientReady) {
          options.onClientReady(client);
        }
        return client;
      },
      inject,
    };

    return {
      module: RedisModule,
      imports,
      providers: [],
      exports: [],
    };
  }
}
