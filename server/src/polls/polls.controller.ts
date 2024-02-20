/* eslint-disable prettier/prettier */
import { Controller, Logger, Post } from '@nestjs/common';

@Controller('polls')
export class PollsController {
  @Post()
  async create() {
    Logger.log('Creating a poll');
  }
  
  @Post('/join')
  async join() {
    Logger.log('Joining a poll');
    // Add your join logic here
  }

  @Post('/rejoin')
  async rejoin() {
    Logger.log('Rejoining a poll');
    // Add your rejoin logic here
  }
}
