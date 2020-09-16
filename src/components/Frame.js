import React from "react";
import {
  FrameWrapper,
  WrapperRow,
  WrapperCol,
  Cube,
} from "../styles/stylesheet";

export const Frame = ({
  leftBox,
  rightBox,
  currentMaxScore,
  currentFrameIndex,
  frameNbr,
}) => {
  const isCurrentFrame = () => {
    return currentFrameIndex === frameNbr;
  };

  return (
    <FrameWrapper>
      <WrapperCol>
        <WrapperRow>
          <Cube currentFrame={isCurrentFrame()} borderWidth="0">
            {leftBox}
          </Cube>
          <Cube currentFrame={isCurrentFrame()}>{rightBox}</Cube>
        </WrapperRow>
        <Cube currentFrame={isCurrentFrame()} width="100%" borderWidth="0">
          {currentMaxScore}
        </Cube>
      </WrapperCol>
    </FrameWrapper>
  );
};
