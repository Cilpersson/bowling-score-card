import React from "react";
import { StyledButton } from "../styles/stylesheet";

export const Button = ({
  game,
  buttonValue,
  pinsDown,
  setPinsDown,
  currentFrameIndex,
  setCurrentFrameIndex,
  rollCounter,
  setRollCounter,
}) => {
  const strike = 10;
  const spare = 10;

  const pushToPinArr = () => {
    game.roll(buttonValue);
    game.score();

    if (isStrike()) {
      strikeFormatting();
      rollCounter += 2;
    } else if (isSpare()) {
      setPinsDown([...pinsDown, "/"]);
      rollCounter++;
    } else if (isNotLastFrame() || bonusRoll()) {
      setPinsDown([...pinsDown, buttonValue.toString()]);
      rollCounter++;
    }

    updateFrameIndex();
    rollCounter > 1 ? setRollCounter(0) : setRollCounter(rollCounter);
  };

  const isStrike = () => {
    return rollCounter === 0 && buttonValue === strike;
  };

  const strikeFormatting = () => {
    currentFrameIndex < 9
      ? setPinsDown([...pinsDown, "", "x"])
      : setPinsDown([...pinsDown, "x"]);
  };

  const isSpare = () => {
    return rollCounter === 1 && totalFrame() === spare;
  };

  const totalFrame = () => {
    return +pinsDown[pinsDown.length - 1] + buttonValue;
  };

  const isNotLastFrame = () => {
    return currentFrameIndex < 10;
  };

  const bonusRoll = () => {
    return (
      (currentFrameIndex >= 10 && checkForFinalSpare()) ||
      (currentFrameIndex >= 10 && checkForFinalStrike(1)) ||
      (currentFrameIndex >= 10 && checkForFinalStrike(2))
    );
  };

  const checkForFinalSpare = () => {
    return pinsDown[pinsDown.length - 1] === "/";
  };

  const checkForFinalStrike = (index) => {
    return pinsDown[pinsDown.length - index] === "x";
  };

  const isImpossibleRoll = () => {
    return (
      rollCounter === 1 && buttonValue + +pinsDown[pinsDown.length - 1] > 10
    );
  };

  const updateFrameIndex = () => {
    rollCounter > 1
      ? setCurrentFrameIndex(currentFrameIndex + 1)
      : setCurrentFrameIndex(currentFrameIndex);
  };

  return (
    <StyledButton onClick={() => pushToPinArr()} disabled={isImpossibleRoll()}>
      {buttonValue}
    </StyledButton>
  );
};
