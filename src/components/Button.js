import React from "react";
import { PinButton } from "../styles/stylesheet";

export const Button = ({
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
    } else {
      setPinsDown([...pinsDown, buttonValue.toString()]);

      rollCounter++;
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

  return (
    <>
      {
        <PinButton
          onClick={() => handleOnClick()}
          disabled={
            rollCounter === 1 &&
            buttonValue + +pinsDown[pinsDown.length - 1] > 10
          }
        >
          {buttonValue}
        </PinButton>
      }
    </>
  );
};
