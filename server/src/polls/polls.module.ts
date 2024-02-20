/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PollsController } from './polls.controller';
// import { PollsService } from './polls.service';

@Module({
  imports: [ConfigModule],
  controllers: [PollsController],
  providers: [],
})
export class PollsModule {}