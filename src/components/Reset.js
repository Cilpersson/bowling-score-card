import React from "react";
import { StyledButton } from "../styles/stylesheet";

export const Reset = ({
  game,
  setPinsDown,
  setCurrentFrameIndex,
  setRollCounter,
}) => {
  const resetGame = () => {
    game.reset();
    // This shouldn't be here.
    // setPinsDown();
    setRollCounter(0);
    setCurrentFrameIndex(0);
    setPinsDown([]);
  };
  return (
    <StyledButton onClick={() => resetGame()} width="100px">
      RESET
    </StyledButton>
  );
};
