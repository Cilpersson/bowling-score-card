import React from "react";
import {
  FrameWrapper,
  WrapperRow,
  WrapperCol,
  Cube,
} from "../styles/stylesheet";

export const LastFrame = ({ leftBox, centerBox, rightBox }) => {
  return (
    <FrameWrapper width="150px">
      <WrapperCol>
        <WrapperRow>
          <Cube borderWidth="0" width="calc(100% / 3)">
            {leftBox}
          </Cube>
          <Cube width="calc(100% / 3)">{centerBox}</Cube>
          <Cube width="calc(100% / 3)">{rightBox}</Cube>
        </WrapperRow>
      </WrapperCol>
    </FrameWrapper>
  );
};
