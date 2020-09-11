import React from "react";
import { ButtonRow } from "./ButtonRow";
import { ScoreBoard } from "./ScoreBoard";
import { MainWrapper } from "../styles/stylesheet";

export const Home = () => {
  return (
    <MainWrapper>
      <ScoreBoard />
      <ButtonRow />
    </MainWrapper>
  );
};
