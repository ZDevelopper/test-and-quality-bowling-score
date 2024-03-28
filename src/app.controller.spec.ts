import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BowlingScore } from './bowling.score';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });


  it('should calculate the total score for a game', () => {
    const frames = [5, 5, 3, 7, 6, 2, 8, 1, 9, 1];
    expect(appController.calculateScore(frames)).toBe(47);
  });

  it('should calculate the total score for a game with spares', () => {
    const frames = [5, 5, 3, 7, 3, 2, 8, 1, 9, 1];
    expect(appController.calculateScoreWithSpares(frames)).toBe(50);
  });


  it('should calculate the total score for a game with strikes', () => {
    const frames = [10, 3, 7, 6, 2, 8, 1, 10];
    expect(appController.calculateTotalScoreWithStrike(frames)).toBe(57);
  });

  it('should calculate the total score for a game with spares and strikes', () => {
    const frames = [10,7,3,6,2,10,8,1,10,7,1,6,1,10,8,2,10];
    expect(appController.calculateTotalScoreWithSpareAndStrike(frames)).toBe(145);
  });

});
