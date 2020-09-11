export class BowlingGame {
  constructor() {
    this.currentScore = 0;
  }
  roll(pinsDown) {
    this.currentScore += pinsDown;
  }

  score() {
    return this.currentScore;
  }
}
