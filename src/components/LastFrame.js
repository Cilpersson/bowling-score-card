import React from "react";
import {
  FrameWrapper,
  WrapperRow,
  WrapperCol,
  Cube,
} from "../styles/stylesheet";

export const LastFrame = ({
  leftBox,
  centerBox,
  rightBox,
  currentMaxScore,
  currentFrameIndex,
  frameNbr,
}) => {
  return (
    <FrameWrapper width="150px" currentFrame={currentFrameIndex > 8}>
      <WrapperCol>
        <WrapperRow>
          <Cube
            currentFrame={currentFrameIndex >= frameNbr}
            borderWidth="0"
            width="calc(100% / 3)"
          >
            {leftBox}
          </Cube>
          <Cube
            currentFrame={currentFrameIndex >= frameNbr}
            width="calc(100% / 3)"
          >
            {centerBox}
          </Cube>
          <Cube
            currentFrame={currentFrameIndex >= frameNbr}
            width="calc(100% / 3)"
          >
            {rightBox}
          </Cube>
        </WrapperRow>
        <Cube
          currentFrame={currentFrameIndex >= frameNbr}
          width="100%"
          borderWidth="0"
        >
          {currentMaxScore}
        </Cube>
      </WrapperCol>
    </FrameWrapper>
  );
};
