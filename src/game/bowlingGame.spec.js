import { BowlingGame } from "./bowlingGame";

// 'RED - GREEN - REFACTOR' seems like the way to go both in the java-video I watched and the
// javascript video I'm currently watching.

// I'm not completely confident in how to write the describe("") and it("") part of the test,
// if I have understood it correctly the describe part should be understood by a non-
// developer and the it-section shoud be a more coding technichal description?

/* ALL GUTTER BALLS */
describe("A game of all gutter balls results in 0 points", () => {
  const game = new BowlingGame();

  it("should return 0 for a game of 0 points", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(0);
    }
    expect(game.score()).toEqual(0);
  });
});

/* ALL ROLLS ONE PIN DOWN */
describe("A game of all one pin down rolls should result in 20 points", () => {
  const game = new BowlingGame();

  it("should return 0 for a game of 0 points", () => {
    for (let i = 0; i < 20; i++) {
      game.roll(1);
    }
    expect(game.score()).toEqual(20);
  });
});
