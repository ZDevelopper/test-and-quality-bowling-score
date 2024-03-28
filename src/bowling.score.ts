export class BowlingScore {
  constructor(private readonly frames: number[]) { }

  calculateTotalScore(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      totalScore += this.frames[i];
    }
    return totalScore;
  }

  calculateTotalScoreWithSpare(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      if (i % 2 === 0) {
        totalScore += this.frames[i] + this.frames[i + 1];
        if (i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
          totalScore += this.frames[i + 2];
        }
      }
    }
    return totalScore;
  }

  calculateTotalScoreWithStrike(): number {
    let totalScore = 0;
    for (let i = 0; i < this.frames.length; i++) {
      totalScore += this.frames[i];
      if (i < this.frames.length - 1 && this.frames[i] === 10) {
        totalScore += this.frames[i + 1];
        if (this.frames[i + 1] !== 10) {
          totalScore += this.frames[i + 2];
        }
      }
    }
    return totalScore;
  }

  calculateTotalScoreWithSpareAndStrike(): number {
    let totalScore = 0;
    let pair: Boolean = true;
    for (let i = 0; i < this.frames.length; i++) {
      console.log('i = ' + i);
      
      if ( pair && i % 2 === 0) {
        totalScore += this.frames[i];
        if (i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
          totalScore += this.frames[i + 2];
        } else if (i < this.frames.length - 1 && this.frames[i] === 10) {
          pair = false;
          totalScore += this.frames[i + 1];
          if (this.frames[i + 1] !== 10) {
            totalScore += this.frames[i + 2];
          }
        }
      } else if (!pair && i % 2 !== 0) {
        totalScore += this.frames[i];
        if (i < this.frames.length) {
          totalScore += this.frames[i + 1];
        }
        if (i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
          totalScore += this.frames[i + 2];
        } else if (i < this.frames.length - 1 && this.frames[i] === 10) {
          pair = true;
          totalScore += this.frames[i + 1];
          if (this.frames[i + 1] !== 10) {
            totalScore += this.frames[i + 2];
          }
        }
      }
      console.log('Total = ' + totalScore);
    }
    return totalScore;
  }




}
