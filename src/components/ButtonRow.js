import React, { useState } from "react";
import { Button } from "./Button";
import { Reset } from "./Reset";

export const ButtonRow = ({
  game,
  pinsDown,
  setPinsDown,
  currentFrameIndex,
  setCurrentFrameIndex,
}) => {
  const [rollCounter, setRollCounter] = useState(0);
  let buttonRowArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
      {buttonRowArr.map((_, index) => {
        return (
          <Button
            game={game}
            buttonValue={index}
            pinsDown={pinsDown}
            setPinsDown={setPinsDown}
            currentFrameIndex={currentFrameIndex}
            setCurrentFrameIndex={setCurrentFrameIndex}
            rollCounter={rollCounter}
            setRollCounter={setRollCounter}
            key={index}
          />
        );
      })}
      <Reset
        game={game}
        setPinsDown={setPinsDown}
        setCurrentFrameIndex={setCurrentFrameIndex}
        setRollCounter={setRollCounter}
      />
    </>
  );
};
