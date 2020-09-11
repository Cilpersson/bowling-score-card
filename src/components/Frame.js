import React from "react";
import {
  FrameWrapper,
  WrapperRow,
  WrapperCol,
  Cube,
} from "../styles/stylesheet";

export const Frame = ({ leftBox, rightBox }) => {
  return (
    <FrameWrapper>
      <WrapperCol>
        <WrapperRow>
          <Cube borderWidth="0">{leftBox}</Cube>
          <Cube>{rightBox}</Cube>
        </WrapperRow>
      </WrapperCol>
    </FrameWrapper>
  );
};
