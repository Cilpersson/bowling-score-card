import React from "react";
import {
  FrameWrapper,
  WrapperRow,
  WrapperCol,
  Cube,
} from "../styles/stylesheet";

export const Frame = () => {
  return (
    <FrameWrapper>
      <WrapperCol>
        <WrapperRow>
          <Cube borderWidth="0"></Cube>
          <Cube></Cube>
        </WrapperRow>
      </WrapperCol>
    </FrameWrapper>
  );
};
