import React, { useState } from "react";
import { BowlingTracker } from "./BowlingTracker";
import {
  Title,
  MainWrapper,
  ComponentWrapper,
  StyledMainButton,
  WrapperRow,
} from "../styles/stylesheet";

export const Home = () => {
  const [totalPlayers, setTotalPlayers] = useState([""]);

  return (
    <MainWrapper>
      <ComponentWrapper>
        <Title>BOWLING SCORE TRACKER</Title>
        <WrapperRow>
          <StyledMainButton
            onClick={() => setTotalPlayers([...totalPlayers, ""])}
          >
            add player
          </StyledMainButton>
        </WrapperRow>
        {totalPlayers.map((_, index) => {
          return <BowlingTracker playerNbr={index + 1} key={index} />;
        })}
      </ComponentWrapper>
    </MainWrapper>
  );
};
