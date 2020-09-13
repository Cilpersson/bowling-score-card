import React, { useState } from "react";
import { BowlingGame } from "../game/bowlingGame";
import { ButtonRow } from "./ButtonRow";
import { ScoreBoard } from "./ScoreBoard";

import {
  WrapperButtons,
  WrapperRow,
  WrapperInfo,
  PlayerTitle,
  StyledButton,
  Line,
} from "../styles/stylesheet";

export const BowlingTracker = ({
  playerIndex,
  totalPlayers,
  setTotalPlayers,
}) => {
  const [pinsDown, setPinsDown] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [game] = useState(new BowlingGame());

  const handleOnClick = () => {
    totalPlayers[playerIndex] = false;
    setTotalPlayers([...totalPlayers]);
  };
  return (
    <>
      {totalPlayers[playerIndex] === true && (
        <>
          <WrapperRow>
            <WrapperInfo>
              <PlayerTitle>Scorecard for player {playerIndex + 1}:</PlayerTitle>
              <StyledButton width="100px" onClick={() => handleOnClick()}>
                delete scorecard
              </StyledButton>
            </WrapperInfo>
          </WrapperRow>
          <ScoreBoard
            game={game}
            pinsDown={pinsDown}
            currentFrameIndex={currentFrameIndex}
          />
          <WrapperButtons>
            <ButtonRow
              game={game}
              pinsDown={pinsDown}
              setPinsDown={setPinsDown}
              currentFrameIndex={currentFrameIndex}
              setCurrentFrameIndex={setCurrentFrameIndex}
            />
          </WrapperButtons>
          <Line />
        </>
      )}
    </>
  );
};
