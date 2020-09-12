import styled from "styled-components/macro";
import backgroundSVG from "../images/background.svg";

const lightBlue = "#97E4F9";
const darkBlue = "#2d7e94";
const lightGreen = "#B8EA6B";
const darkGreen = "#2d943a";

/* FONTS */
export const Title = styled.h1`
  font-weight: 700;
  font-size: 80px;
  margin: 10px 0 40px;
  text-align: center;
  text-shadow: 1px 1px ${darkBlue}, -1px -1px ${darkBlue}, -1px 1px ${darkBlue},
    1px -1px ${darkBlue}, 5px 7px 0px ${lightGreen}, 6px 8px ${darkGreen};

  color: ${lightBlue};
`;

export const PlayerTitle = styled.h2`
  font-weight: 400;
  margin: 20px 5px 5px;
  color: ${darkBlue};
`;
/* WRAPPERS */
export const MainWrapper = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-image: url(${backgroundSVG});

  padding: 50px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ComponentWrapper = styled.section`
  width: 1250px;
  background: #ffffffde;
  padding: 50px;
`;

export const WrapperRow = styled.section`
  display: flex;
`;

export const WrapperButtons = styled(WrapperRow)`
  margin: 10px 0;
  justify-content: space-between;
`;

export const WrapperCol = styled(WrapperRow)`
  flex-direction: column;
`;

export const WrapperInfo = styled(WrapperCol)`
  margin: 10px 0;
`;

export const Line = styled.hr`
  border-width: 2px;
  border-color: ${lightBlue};
  margin: 15px 0;

  border-style: solid;
`;

/* STYLING FOR BUTTONS */

export const StyledButton = styled.button`
  height: 50px;
  width: ${(props) => props.width || "50px"};

  border: none;
  background: ${lightGreen};
  margin: 0 5px;

  cursor: pointer;

  transition: all 0.4s;
  &:hover {
    background: ${lightBlue};
  }

  &:disabled {
    opacity: 0.5;
  }
`;

export const StyledMainButton = styled(StyledButton)`
  margin: auto;
  width: 150px;
`;

/* STYLING FOR FRAMES */

export const FrameWrapper = styled.div`
  height: 100px;
  width: ${(props) => props.width || "100px"};
  margin: 0 5px;
`;

export const Cube = styled.div`
  height: 50px;
  width: ${(props) => props.width || "50px"};
  background: ${({ currentFrame }) => (currentFrame ? lightBlue : lightGreen)};
  transition: all 0.4s;

  display: flex;
  justify-content: center;
  align-items: center;

  border-width: ${(props) => props.borderWidth || "0 0 1px 1px"};
  border-color: #ffffff;
  border-style: solid;
`;
