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
      setRollCounter(0);
      //   setCounter(0);

      setCurrentFrameIndex(currentFrameIndex + 1);
    } else if (isSpare()) {
      setPinsDown([...pinsDown, "/"]);
      //   setCounter(0);
      setRollCounter(0);
      setCurrentFrameIndex(currentFrameIndex + 1);
    } else {
      setPinsDown([...pinsDown, buttonValue.toString()]);
      //   setCounter(1);
      setRollCounter(rollCounter + 1);
    }
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
      {isNaN(+pinsDown[pinsDown.length - 1]) && (
        <PinButton onClick={() => handleOnClick()}>{buttonValue}</PinButton>
      )}
      {buttonValue + +pinsDown[pinsDown.length - 1] <= 10 && (
        <PinButton onClick={() => handleOnClick()}>{buttonValue}</PinButton>
      )}
    </>
  );
};
