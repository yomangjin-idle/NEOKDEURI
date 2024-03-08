import React from "react";
import styled, { keyframes } from "styled-components";
import logo from "assets/logo.svg";
import onboadingIsland from "assets/onboading_island.svg";
import onboadingBackground from "assets/onboadingBackground.svg";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import FloatDiv from "components/atoms/FloatDiv";
import { theme } from "styles/theme";

export default function Onboading() {
  const { font } = theme;
  const navigate = useNavigate();

  const onClickStartHandler = () => {
    navigate("/main");
  };

  return (
    <MovingBackground>
      <LogoBox>
        <AnimatePresence mode="wait">
          <img src={logo} />
          <Wrapper>
            <FloatDiv initialY={10} exitY={-10} duration={2}>
              <Logo src={onboadingIsland}></Logo>
            </FloatDiv>
          </Wrapper>
        </AnimatePresence>
      </LogoBox>
      <SubTitle color={font.colors.white}>떠난 이의 넋을 되찾다</SubTitle>
      <BottomBox>
        <OnboadingText>
          {`아름다운 섬 제주에 숨겨진 역사를 아시나요.
                    7년간 이어진 무차별적인 학살과 참혹한 희생.
                    그들의 넋두리를 담아 당시의 아픔을 전합니다.
                    그 날의 이야기, 들어보실래요?`}
        </OnboadingText>
        <StartButton onClick={onClickStartHandler}>시작하기</StartButton>
      </BottomBox>
    </MovingBackground>
  );
}

const moveBackground = keyframes`
  from { background-position: 0 0; }
  to { background-position: 100% 0; }

`;
const Wrapper = styled.div`
  width: 300px;
  height: 210px;
`;
const SubTitle = styled.div`
  color: ${(props) => props.theme.font.colors.white};
  font-size: 1.5rem;
  font-family: ${(props) => props.theme.font.family.onboadingTitle};
`;

const Logo = styled.img`
  margin-top: 5rem;
`;

const LogoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3.5rem;
`;

const BottomBox = styled.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  margin-top: 3rem;
`;
const StartButton = styled.button`
  width: 90%;
  height: 72px;
  font-size: 1.5rem;
  margin-top: 3.5rem;
  font-weight: ${(props) => props.theme.font.fontStyle.bold};
  border: none;
  background-color: black;
  color: white;
  font-family: ${(props) => props.theme.font.family.onboadingButton};
  background-color: ${(props) => props.theme.colors.main.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 1.25rem;
  &:hover {
    opacity: 0.8;
  }
`;

const OnboadingText = styled.div`
  white-space: pre-line;
  font-family: ${(props) => props.theme.font.family.onboadingSub};
  color: #c5c5c5;
  line-height: 24px;
  font-size: ${(props) => props.theme.font.fontSize.medium};
  display: flex;
  align-items: center;
  text-align: center;
`;

const MovingBackground = styled.div`
  background-image: url(${onboadingBackground});
  background-repeat: repeat-x;
  animation: ${moveBackground} 30s linear reverse;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
`;
