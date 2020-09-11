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
}) => {
  return (
    <FrameWrapper width="150px" currentFrame={currentFrameIndex > 8}>
      <WrapperCol>
        <WrapperRow>
          <Cube borderWidth="0" width="calc(100% / 3)">
            {leftBox}
          </Cube>
          <Cube width="calc(100% / 3)">{centerBox}</Cube>
          <Cube width="calc(100% / 3)">{rightBox}</Cube>
        </WrapperRow>
        <Cube width="100%" borderWidth="0">
          {currentMaxScore}
        </Cube>
      </WrapperCol>
    </FrameWrapper>
  );
};
