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
  setPlayerName,
}) => {
  const [newName, setNewName] = useState("");
  useEffect(() => {
    /* 
     Modyfying the dom like this kind of feels like bad practice, 
     however I really wanted to try to make my own popups.
     I did look after how to toogle the body in the globalStyles conditionally like this:

     body {
      overflow: ${({ displayModal }) => (displayModal ? "hidden" : "visible")};
     }
    
     But, the globalStyles is mounted in the index.js file and I can't declare the displayModal useState there
     and pass it as props to the BowlingTracker comp. So, I'm aware of the hackyness this is, I have asked my teacher 
     but have not yet heared back from him. 
    */
    if (displayModal) document.body.style.overflow = "hidden";
  }, [displayModal]);

  const handleNameUpdate = () => {
    setPlayerName(newName);
    document.body.style.overflow = "visible";
    setDisplayModal(false);
  };

  const cancelChange = () => {
    document.body.style.overflow = "visible";
    setDisplayModal(false);
  };

  return (
    <>
      {displayModal && (
        <FullScreen width={window.innerWidth} top={yOffset}>
          <PopUpWindow>
            <WrapperCol>
              <PlayerTitle color="white">What's your name? </PlayerTitle>
              <Input
                type="text"
                value={newName}
                placeholder="your name"
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
