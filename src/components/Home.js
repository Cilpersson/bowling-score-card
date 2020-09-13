import React, { useState } from "react";
import { BowlingTracker } from "./BowlingTracker";
import {
  Title,
  WrapperRow,
  MainWrapper,
  ComponentWrapper,
  StyledMainButton,
} from "../styles/stylesheet";

export const Home = () => {
  const [totalPlayers, setTotalPlayers] = useState([true]);

  const addPlayer = () => {
    setTotalPlayers([...totalPlayers, true]);
  };

  return (
    <MainWrapper>
      <ComponentWrapper>
        <Title>BOWLING SCORE TRACKER</Title>
        <WrapperRow>
          <StyledMainButton onClick={() => addPlayer()}>
            add player
          </StyledMainButton>
        </WrapperRow>
        {totalPlayers.map((_, index) => {
          return (
            <BowlingTracker
              playerIndex={index}
              totalPlayers={totalPlayers}
              setTotalPlayers={setTotalPlayers}
              key={index}
            />
          );
        })}
      </ComponentWrapper>
    </MainWrapper>
  );
};
