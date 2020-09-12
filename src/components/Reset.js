import React from "react";
import { StyledButton } from "../styles/stylesheet";

export const Reset = ({
  game,
  setPinsDown,
  setCurrentFrameIndex,
  setRollCounter,
}) => {
  const handleOnClick = () => {
    game.reset();
    setPinsDown();
    setRollCounter(0);
    setCurrentFrameIndex(0);
    setPinsDown([]);
  };
  return (
    <StyledButton onClick={() => handleOnClick()} width="100px">
      RESET
    </StyledButton>
  );
};
