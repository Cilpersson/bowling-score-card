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
  const handleOnClick = () => {
    pushToPinArr();
  };

  const pushToPinArr = () => {
    game.roll(buttonValue);
    game.score();
    if (isStrike()) {
      currentFrameIndex < 9
        ? setPinsDown([...pinsDown, "", "x"])
        : setPinsDown([...pinsDown, "x"]);
      rollCounter += 2;
      setCurrentFrameIndex(currentFrameIndex + 1);
    } else if (isSpare()) {
      setPinsDown([...pinsDown, "/"]);
      rollCounter++;
      setCurrentFrameIndex(currentFrameIndex + 1);
    } else if (isNotLastFrame()) {
      setPinsDown([...pinsDown, buttonValue.toString()]);
      rollCounter++;
      updateFrameIndex();
    } else if (bonusRoll()) {
      setPinsDown([...pinsDown, buttonValue.toString()]);
      rollCounter++;
      updateFrameIndex();
    } else {
      setPinsDown([...pinsDown, ""]);
      rollCounter++;
      updateFrameIndex();
    }
    rollCounter > 1 ? setRollCounter(0) : setRollCounter(rollCounter);
  };

  const isStrike = () => {
    return rollCounter === 0 && buttonValue === 10;
  };

  const isSpare = () => {
    return (
      rollCounter === 1 && +pinsDown[pinsDown.length - 1] + buttonValue === 10
    );
  };

  const isNotLastFrame = () => {
    return currentFrameIndex < 10;
  };

  const bonusRoll = () => {
    return (
      (currentFrameIndex >= 10 && pinsDown[pinsDown.length - 1] === "/") ||
      (currentFrameIndex >= 10 && pinsDown[pinsDown.length - 1] === "x") ||
      (currentFrameIndex >= 10 && pinsDown[pinsDown.length - 2] === "x")
    );
  };

  const updateFrameIndex = () => {
    rollCounter > 1
      ? setCurrentFrameIndex(currentFrameIndex + 1)
      : setCurrentFrameIndex(currentFrameIndex);
  };
  console.log(
    rollCounter === 1 && buttonValue + +pinsDown[pinsDown.length - 1] > 10
  );
  return (
    <>
      {
        <StyledButton
          onClick={() => handleOnClick()}
          disabled={
            rollCounter === 1 &&
            buttonValue + +pinsDown[pinsDown.length - 1] > 10
          }
        >
          {buttonValue}
        </StyledButton>
      }
    </>
  );
};
