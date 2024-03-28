import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { BowlingScore } from './bowling.score';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('bowling-score')
  calculateScore(@Body() frames: number[]): number {
    const score = new BowlingScore(frames);
    return score.calculateTotalScore();
  }

  @Post('bowling-score')
  calculateScoreWithSpares(@Body() frames: number[]): number {
    const score = new BowlingScore(frames);
    return score.calculateTotalScoreWithSpare();
  }

  @Post('bowling-score')
  calculateTotalScoreWithStrike(@Body() frames: number[]): number {
    const score = new BowlingScore(frames);
    return score.calculateTotalScoreWithStrike();
  }

  @Post('bowling-score')
  calculateTotalScoreWithSpareAndStrike(@Body() frames: number[]): number {
    const score = new BowlingScore(frames);
    return score.calculateTotalScoreWithSpareAndStrike();
  }
}