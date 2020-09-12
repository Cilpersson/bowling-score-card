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
  return (
    <FrameWrapper>
      <WrapperCol>
        <WrapperRow>
          <Cube currentFrame={currentFrameIndex === frameNbr} borderWidth="0">
            {leftBox}
          </Cube>
          <Cube currentFrame={currentFrameIndex === frameNbr}>{rightBox}</Cube>
        </WrapperRow>
        <Cube
          currentFrame={currentFrameIndex === frameNbr}
          width="100%"
          borderWidth="0"
        >
          {currentMaxScore}
        </Cube>
      </WrapperCol>
    </FrameWrapper>
  );
};
