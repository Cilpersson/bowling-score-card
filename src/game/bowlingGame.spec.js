import { BowlingGame } from "./bowlingGame";
// 'RED - GREEN - REFACTOR' seems like the way to go both in the java-video I watched and the
// javascript-video.

// I'm not very confident in how to write the describe("") and it("") part of the test,
// if I have understood it correctly the describe part should be understood by a non-
// developer and the it-section shoud be a more coding technichal description?

let game;

beforeEach(() => {
  game = new BowlingGame();
});

/* ALL GUTTER BALLS */
describe("A game of all gutter balls results in 0 points", () => {
  it("should return 0 for a game of 0 pins down", () => {
    rollMany(0, 20);
    expect(game.score()).toEqual(0);
  });
});

/* ALL ROLLS ONE PIN DOWN */
describe("A game of all one pin down rolls should result in 20 points", () => {
  it("should return 20 for a game of 1 pin down 20 times", () => {
    rollMany(1, 20);
    expect(game.score()).toEqual(20);
  });
});

/* SPARE  */
describe("A game of 5, 5 (5 + 5 = spare), 3 should result in 16 points", () => {
  it("should return 16 for a game of 5, 5, 3, 0 * 17", () => {
    game.roll(5);
    game.roll(5);
    game.roll(3);
    rollMany(0, 17);
    expect(game.score()).toEqual(16);
  });
});

/* STRIKE */
describe("A game of 10 (strike), 1, 1 should result in 14 points (12 for strike + 2 for next frame)", () => {
  it("should return 14 for a game of 10, 1, 1, 0 * 17", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    rollMany(0, 17);
    expect(game.score()).toEqual(14);
  });
});

/* PERFECT GAME */
describe("A perfect game should give a score of 300)", () => {
  it("should return 300 for twelve strikes in a row", () => {
    rollMany(10, 12);
    expect(game.score()).toEqual(300);
  });
});

/* RESET GAME */
describe("All values should be reset to initial values)", () => {
  it("should reset both constructor arrays to equal empty arrays", () => {
    game.roll(10);
    game.roll(1);
    game.roll(1);
    game.score();
    game.reset();
    expect(game.listOfRolls).toEqual([]);
    expect(game.listOfScoreByFrame).toEqual([]);
  });
});

const rollMany = (pinsDown, rolls) => {
  for (let i = 0; i < rolls; i++) {
    game.roll(pinsDown);
  }
};
