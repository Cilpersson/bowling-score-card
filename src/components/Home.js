import React, { useState } from "react";
import { ButtonRow } from "./ButtonRow";
import { ScoreBoard } from "./ScoreBoard";
import { MainWrapper } from "../styles/stylesheet";

export const Home = () => {
  const [pinsDown, setPinsDown] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  return (
    <MainWrapper>
      <ScoreBoard pinsDown={pinsDown} />
      <ButtonRow
        pinsDown={pinsDown}
        setPinsDown={setPinsDown}
        currentFrameIndex={currentFrameIndex}
        setCurrentFrameIndex={setCurrentFrameIndex}
      />
    </MainWrapper>
  );
};
