import React from "react";
import { Frame } from "./Frame";
import { LastFrame } from "./LastFrame";
import { WrapperRow } from "../styles/stylesheet";

export const ScoreBoard = () => {
  return (
    <WrapperRow>
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <Frame />
      <LastFrame />
    </WrapperRow>
  );
};
