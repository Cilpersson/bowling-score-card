import { BowlingGame } from "./bowlingGame";

// I'm not completely confident in how to write the describe and it part of the test,
// if I have understood it correctly the describe part should be understood by a non-
// developer and the it-section shoud be a more coding technichal description?
describe("A game of all gutter balls results in 0 points", () => {
  const game = new BowlingGame();

  it("should return 0 for a game of 0 points", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score).toEqual(0);
  });
});
