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
    <FrameWrapper currentFrame={currentFrameIndex === frameNbr}>
      <WrapperCol>
        <WrapperRow>
          <Cube borderWidth="0">{leftBox}</Cube>
          <Cube>{rightBox}</Cube>
        </WrapperRow>
        <Cube width="100%" borderWidth="0">
          {currentMaxScore}
        </Cube>
      </WrapperCol>
    </FrameWrapper>
  );
};
