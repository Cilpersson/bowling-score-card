export class BowlingGame {
  constructor() {
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
        // Adding 1 because of strike and values from the entire frame has not been used
        currentRollIndex++;
      } else if (this.isSpare(frameScore)) {
        // Spare points are frameScore + next frames first roll
        score += this.pointsForSpare(currentRollIndex);
        // Adding 2 because the score for the entire frame has been calculated
        currentRollIndex += 2;
      } else {
        score += frameScore;
        // Adding 2 because the score for the entire frame has been calculated
        currentRollIndex += 2;
      }
      // If score is not yet calculated it will not get pushed to the score list.
      if (score) this.listOfScoreByFrame.push(score);
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
