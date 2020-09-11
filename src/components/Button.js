import React from "react";
import { PinButton } from "../styles/stylesheet";

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
    } else {
      //specialfall för framindex 9
      if (currentFrameIndex < 10) {
        setPinsDown([...pinsDown, buttonValue.toString()]);
      } else if (
        (currentFrameIndex === 10 && pinsDown[pinsDown.length - 1] === "/") ||
        pinsDown[pinsDown.length - 1] === "x"
      ) {
        setPinsDown([...pinsDown, buttonValue.toString()]);
      } else {
        setPinsDown([...pinsDown, ""]);
      }

      rollCounter++;
      rollCounter > 1
        ? setCurrentFrameIndex(currentFrameIndex + 1)
        : setCurrentFrameIndex(currentFrameIndex);
    }

    rollCounter > 1 ? setRollCounter(0) : setRollCounter(rollCounter);
  };
  console.log(currentFrameIndex);
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
