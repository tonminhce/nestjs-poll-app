import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsModule } from './polls/polls.module';
import { APP_FILTER } from '@nestjs/core';
import { LoggingFilter } from './middleware';

@Module({
  imports: [ConfigModule.forRoot(), PollsModule],
  controllers: [],
  providers: [
    {
      provide: APP_FILTER,
      useClass: LoggingFilter,
    },
  ],
})
export class AppModule {}
