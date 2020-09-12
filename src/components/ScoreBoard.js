import React from "react";
import { Frame } from "./Frame";
import { LastFrame } from "./LastFrame";
import { WrapperRow } from "../styles/stylesheet";

export const ScoreBoard = ({ pinsDown, game, currentFrameIndex }) => {
  let frames = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <WrapperRow>
      {frames.map((_, index) => {
        return (
          <Frame
            leftBox={pinsDown[index * 2]}
            rightBox={pinsDown[index * 2 + 1]}
            currentMaxScore={game.listOfScoreByFrame[index]}
            currentFrameIndex={currentFrameIndex}
            frameNbr={index}
          />
        );
      })}
      <LastFrame
        leftBox={pinsDown[18]}
        centerBox={pinsDown[19]}
        rightBox={pinsDown[20]}
        currentMaxScore={game.listOfScoreByFrame[9]}
        currentFrameIndex={currentFrameIndex}
        frameNbr={9}
      />
    </WrapperRow>
  );
};
