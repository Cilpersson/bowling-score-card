import styled from "styled-components/macro";

export const MainWrapper = styled.section`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const WrapperRow = styled.section`
  display: flex;
`;

export const WrapperCol = styled(WrapperRow)`
  flex-direction: column;
`;

/* STYLING FOR BUTTONS */

export const PinButton = styled.button`
  height: 50px;
  width: 50px;

  border: none;
  background: lightgreen;
  margin: 0 5px;
`;

/* STYLING FOR FRAMES */

export const FrameWrapper = styled.div`
  height: 100px;
  width: ${(props) => props.width || "100px"};
  margin: 0 5px;

  background: salmon;
`;

export const Cube = styled.div`
  height: 50px;
  width: ${(props) => props.width || "50px"};

  display: flex;
  justify-content: center;
  align-items: center;

  background: green;

  border-width: ${(props) => props.borderWidth || "0 0 1px 1px"};
  border-color: blue;
  border-style: solid;
`;
