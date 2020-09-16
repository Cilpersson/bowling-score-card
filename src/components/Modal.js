import React, { useEffect, useState } from "react";
import {
  FullScreen,
  PopUpWindow,
  WrapperCol,
  StyledButton,
  StyledDeleteButton,
  WrapperButtons,
  Input,
  PlayerTitle,
} from "../styles/stylesheet";

export const Modal = ({
  yOffset,
  displayModal,
  setDisplayModal,
  playerName,
  setPlayerName,
}) => {
  const [newName, setNewName] = useState("");

  /* 
     My initial thougt was that modyfying the dom like this felt a little bit hacky and like bad practice, 
     but then I found this hook doing the pretty much the same thing https://usehooks.com/useLockBodyScroll/
     making me rather uncertain of if it's right or wrong. Would love some input on this. 
     
     I did look up how to toogle the body in the globalStyles conditionally like this:
     body {
      overflow: ${({ displayModal }) => (displayModal ? "hidden" : "visible")};
     }
     But, the globalStyles is mounted in the index.js file and I can't declare the displayModal useState there
     and pass it as props to the BowlingTracker comp. So, I'm aware of the potential hackyness that this is and that
     I could have used the regular prompt or something like sweet alert. But I wanted to try this out and it was fun to style. 
  */

  useEffect(() => {
    if (displayModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [displayModal]);

  const handleNameUpdate = () => {
    setPlayerName(newName);
    setDisplayModal(false);
  };

  const cancelChange = () => {
    setDisplayModal(false);
  };

  return (
    <>
      {displayModal && (
        <FullScreen width={window.innerWidth} top={yOffset}>
          <PopUpWindow>
            <WrapperCol>
              <PlayerTitle color="white">What's your name?</PlayerTitle>
              <Input
                type="text"
                value={newName}
                placeholder={playerName}
                onChange={(event) => {
                  setNewName(event.target.value);
                }}
              />
              <WrapperButtons>
                <StyledButton
                  margin="0"
                  width="75px"
                  onClick={() => handleNameUpdate()}
                >
                  confirm
                </StyledButton>
                <StyledDeleteButton
                  margin="0"
                  width="75px"
                  onClick={() => cancelChange()}
                >
                  cancel
                </StyledDeleteButton>
              </WrapperButtons>
            </WrapperCol>
          </PopUpWindow>
        </FullScreen>
      )}
    </>
  );
};
