"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BowlingScore = void 0;
class BowlingScore {
    constructor(frames) {
        this.frames = frames;
    }
    calculateTotalScore() {
        let totalScore = 0;
        for (let i = 0; i < this.frames.length; i++) {
            totalScore += this.frames[i];
        }
        return totalScore;
    }
    calculateTotalScoreWithSpare() {
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
    calculateTotalScoreWithStrike() {
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
    calculateTotalScoreWithSpareAndStrike() {
        let totalScore = 0;
        let pair = true;
        for (let i = 0; i < this.frames.length; i++) {
            console.log('i = ' + i);
            if (pair && i % 2 === 0) {
                totalScore += this.frames[i];
                if (i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
                    totalScore += this.frames[i + 2];
                }
                else if (i < this.frames.length - 1 && this.frames[i] === 10) {
                    pair = false;
                    totalScore += this.frames[i + 1];
                    if (this.frames[i + 1] !== 10) {
                        totalScore += this.frames[i + 2];
                    }
                }
            }
            else if (!pair && i % 2 !== 0) {
                totalScore += this.frames[i];
                if (i < this.frames.length) {
                    totalScore += this.frames[i + 1];
                }
                if (i < this.frames.length - 2 && this.frames[i] + this.frames[i + 1] === 10) {
                    totalScore += this.frames[i + 2];
                }
                else if (i < this.frames.length - 1 && this.frames[i] === 10) {
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
exports.BowlingScore = BowlingScore;
//# sourceMappingURL=bowling.score.js.map