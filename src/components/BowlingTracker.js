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
  const [playerName, setPlayerName] = useState(`player ${playerIndex + 1}`);
  const [game] = useState(new BowlingGame());

  const deleteScorcard = () => {
    totalPlayers[playerIndex] = false;
    setPlayerName(`player ${playerIndex + 1}`);
    setTotalPlayers([...totalPlayers]);
  };

  const changeName = () => {
    setPlayerName(window.prompt("What's your name?", "Enter name here"));
  };

  return (
    <>
      {totalPlayers[playerIndex] === true && (
        <>
          <WrapperRow>
            <WrapperInfo>
              <PlayerTitle>Scorecard for {playerName}:</PlayerTitle>
              <WrapperButtons>
                <StyledButton width="150px" onClick={() => changeName()}>
                  change player name
                </StyledButton>
                <StyledButton width="150px" onClick={() => deleteScorcard()}>
                  delete scorecard
                </StyledButton>
              </WrapperButtons>
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
