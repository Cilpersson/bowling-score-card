import React, { useState } from "react";
import { BowlingGame } from "../game/bowlingGame";
import { ButtonRow } from "./ButtonRow";
import { ScoreBoard } from "./ScoreBoard";
import { MainWrapper } from "../styles/stylesheet";

export const Home = () => {
  const [pinsDown, setPinsDown] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [game] = useState(new BowlingGame());

  return (
    <MainWrapper>
      <ScoreBoard
        game={game}
        pinsDown={pinsDown}
        currentFrameIndex={currentFrameIndex}
      />
      <ButtonRow
        game={game}
        pinsDown={pinsDown}
        setPinsDown={setPinsDown}
        currentFrameIndex={currentFrameIndex}
        setCurrentFrameIndex={setCurrentFrameIndex}
      />
    </MainWrapper>
  );
};
