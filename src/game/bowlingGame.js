export class BowlingGame {
  constructor() {
    this.listOfRolls = [];
    this.listOfScoreByFrame = [];
  }

  reset() {
    this.listOfRolls = [];
    this.listOfScoreByFrame = [];
  }

  roll(pinsDown) {
    this.listOfRolls.push(pinsDown);
  }

  score() {
    let score = 0;
    let currentRollIndex = 0;
    this.listOfScoreByFrame = [];

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore =
        this.listOfRolls[currentRollIndex] +
        this.listOfRolls[currentRollIndex + 1];

      if (this.isStrike(currentRollIndex)) {
        score += this.pointsForStrike(currentRollIndex);
        // Adding 1 because a strike frame contains one roll
        currentRollIndex++;
      } else if (this.isSpare(frameScore)) {
        score += this.pointsForSpare(currentRollIndex);
        // Adding 2 because a spare frame contains two rolls
        currentRollIndex += 2;
      } else {
        score += frameScore;
        // Adding 2 because a regular fram contains two rolls
        currentRollIndex += 2;
      }
      // If score is not a number thus has not yet been calculated it will not get pushed to the score list.
      if (!isNaN(score)) this.listOfScoreByFrame.push(score);
    }
    return score;
  }

  isStrike(currentRollIndex) {
    return this.listOfRolls[currentRollIndex] === 10;
  }

  pointsForStrike(currentRollIndex) {
    // The total points for a strike is 10 plus the value of the two next rolled balls.
    return (
      10 +
      this.listOfRolls[currentRollIndex + 1] +
      this.listOfRolls[currentRollIndex + 2]
    );
  }

  isSpare(frameScore) {
    return frameScore === 10;
  }

  pointsForSpare(currentRollIndex) {
    // The total points for a spare is 10 plus the value of the next rolled ball.
    return 10 + this.listOfRolls[currentRollIndex + 2];
  }
}
