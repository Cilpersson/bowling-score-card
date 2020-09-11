import React from "react";
import { Frame } from "./Frame";
import { LastFrame } from "./LastFrame";
import { WrapperRow } from "../styles/stylesheet";

export const ScoreBoard = ({ pinsDown }) => {
  return (
    <WrapperRow>
      <Frame leftBox={pinsDown[0]} rightBox={pinsDown[1]} />
      <Frame leftBox={pinsDown[2]} rightBox={pinsDown[3]} />
      <Frame leftBox={pinsDown[4]} rightBox={pinsDown[5]} />
      <Frame leftBox={pinsDown[6]} rightBox={pinsDown[7]} />
      <Frame leftBox={pinsDown[8]} rightBox={pinsDown[9]} />
      <Frame leftBox={pinsDown[10]} rightBox={pinsDown[11]} />
      <Frame leftBox={pinsDown[12]} rightBox={pinsDown[13]} />
      <Frame leftBox={pinsDown[14]} rightBox={pinsDown[15]} />
      <Frame leftBox={pinsDown[16]} rightBox={pinsDown[17]} />

      <LastFrame
        leftBox={pinsDown[18]}
        centerBox={pinsDown[19]}
        rightBox={pinsDown[20]}
      />
    </WrapperRow>
  );
};
