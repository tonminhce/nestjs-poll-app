/* eslint-disable prettier/prettier */
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreatePollDto, JoinPollDto } from './polls.dto';
import { PollsService } from './polls.service';
@Controller('polls')
export class PollsController {
  constructor(private readonly pollsService: PollsService) {}
  @Post()
  @UsePipes(new ValidationPipe({ transform: true })) // Apply validation pipe to this route
  async create(@Body() createPollDto: CreatePollDto) {
    const result = await this.pollsService.createPoll(createPollDto);
    return result;
  }

  @Post('/join')
  @UsePipes(new ValidationPipe({ transform: true })) // Apply validation pipe to this route
  async join(@Body() joinPollDto: JoinPollDto) {
    const result = await this.pollsService.joinPoll(joinPollDto);
    return result;
  }

  @Post('/rejoin')
  @UsePipes(new ValidationPipe({ transform: true })) // Apply validation pipe to this route
  async rejoin() {
    const result = await this.pollsService.rejoinPoll({
      pollID: '12345678',
      name: 'John Doe',
      userID: '12345678',
    });
    return result;
  }
}
