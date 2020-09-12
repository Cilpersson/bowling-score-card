import styled from "styled-components/macro";
import backgroundSVG from "../images/background.svg";

const lightBlue = "#97E4F9";
const lightGreen = "#B8EA6B";

export const Title = styled.h1`
  font-weight: 700;
  font-size: 80px;
  margin: 10px 0;
  text-align: center;
  text-shadow: 1px 1px #2d7e94, -1px -1px #2d7e94, -1px 1px #2d7e94,
    1px -1px #2d7e94, 5px 7px 0px #b8ea6b, 6px 8px #2d943a;

  color: ${lightBlue};
`;

export const MainWrapper = styled.section`
  height: 100vh;
  width: 100vw;
  background-image: url(${backgroundSVG});

  padding: 50px 10px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ComponentWrapper = styled.section`
  background: #ffffffbd;
  padding: 50px;
`;

export const WrapperRow = styled.section`
  display: flex;
`;

export const WrapperCol = styled(WrapperRow)`
  flex-direction: column;
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
