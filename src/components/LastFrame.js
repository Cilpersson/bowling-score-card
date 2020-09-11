import React from "react";
import {
  FrameWrapper,
  WrapperRow,
  WrapperCol,
  Cube,
} from "../styles/stylesheet";

export const LastFrame = () => {
  return (
    <FrameWrapper width="150px">
      <WrapperCol>
        <WrapperRow>
          <Cube borderWidth="0" width="calc(100% / 3)"></Cube>
          <Cube width="calc(100% / 3)"></Cube>
          <Cube width="calc(100% / 3)"></Cube>
        </WrapperRow>
      </WrapperCol>
    </FrameWrapper>
  );
};
