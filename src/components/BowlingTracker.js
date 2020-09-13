import React, { useState } from "react";
import { BowlingGame } from "../game/bowlingGame";
import { ButtonRow } from "./ButtonRow";
import { ScoreBoard } from "./ScoreBoard";
import { useScrollPosition } from "@n8tb1t/use-scroll-position";
import { Modal } from "./Modal";
import {
  WrapperButtons,
  WrapperRow,
  WrapperInfo,
  PlayerTitle,
  StyledButton,
  StyledDeleteButton,
  Line,
} from "../styles/stylesheet";

export const BowlingTracker = ({
  playerIndex,
  totalPlayers,
  setTotalPlayers,
}) => {
  /* VALUES FOR SCORE COUNTING */
  const [pinsDown, setPinsDown] = useState([]);
  const [currentFrameIndex, setCurrentFrameIndex] = useState(0);
  const [game] = useState(new BowlingGame());

  /* NAME OF PLAYER  */
  const [playerName, setPlayerName] = useState(`player ${playerIndex + 1}`);

  /* VALUES FOR MODAL */

  const [displayModal, setDisplayModal] = useState(false);
  const [yOffset, setYOffset] = useState(0);
  useScrollPosition(({ _, currPos }) => {
    setYOffset(Math.abs(currPos.y));
  });

  const deleteScorcard = () => {
    totalPlayers[playerIndex] = false;
    setPlayerName(`player ${playerIndex + 1}`);
    setTotalPlayers([...totalPlayers]);
  };

  const changeName = () => {
    setDisplayModal(true);
  };

  return (
    <>
      <Modal
        yOffset={yOffset}
        displayModal={displayModal}
        setDisplayModal={setDisplayModal}
        setPlayerName={setPlayerName}
      />
      {totalPlayers[playerIndex] === true && (
        <>
          <WrapperRow>
            <WrapperInfo>
              <PlayerTitle>Scorecard for {playerName}:</PlayerTitle>
              <WrapperButtons>
                <StyledButton width="150px" onClick={() => changeName()}>
                  change player name
                </StyledButton>
                <StyledDeleteButton
                  width="150px"
                  onClick={() => deleteScorcard()}
                >
                  delete scorecard
                </StyledDeleteButton>
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
