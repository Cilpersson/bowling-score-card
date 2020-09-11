export class BowlingGame {
  constructor() {
    this.listOfRolls = [];
  }
  roll(pinsDown) {
    this.listOfRolls.push(pinsDown);
  }

  score() {
    let score = 0;
    let currentRollIndex = 0;

    for (let frameIndex = 0; frameIndex < 10; frameIndex++) {
      const frameScore =
        this.listOfRolls[currentRollIndex] +
        this.listOfRolls[currentRollIndex + 1];
      if (frameScore === 10) {
        // frameScore === 10 means spare!
        // Spare points are frameScore + next frames first roll
        score = frameScore + this.listOfRolls[currentRollIndex + 2];
      } else {
        score += frameScore;
      }
      // Adding 2 because the score for the entire frame has been calculated
      currentRollIndex += 2;
    }
    return score;
  }
}
