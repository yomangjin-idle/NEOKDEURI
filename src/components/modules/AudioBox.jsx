import Image from "components/atoms/Image";
import styled from "styled-components";
import detailImg from "assets/detailsImg.svg";
import play from "assets/play.svg";
import { useNavigate, useParams } from "react-router-dom";

const AudioBox = ({ title }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(`/details/audio/${id}`, {
      state: {
        title,
      },
    });
  };
  return (
    <Wrapper onClick={onClickHandler}>
      <Image src={detailImg} width="100%" height="auto" radius="0" />
      <Background />
      <Play src={play} />
      <Title>{title}</Title>
    </Wrapper>
  );
};

export default AudioBox;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  top: -3rem;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`;

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0) 45.8%,
    rgba(0, 0, 0, 0.79) 74.17%,
    #000000 90.15%
  );
  background-blend-mode: multiply;
  mix-blend-mode: normal;
  z-index: 10;
`;

const Play = styled.img`
  position: absolute;
  z-index: 20;
`;

const Title = styled.h1`
  position: absolute;
  z-index: 20;
  bottom: 0.75rem;
  font-size: 2.5rem;
  color: ${(props) => props.theme.font.colors.white};
  font-family: ${(props) => props.theme.font.family.onboadingTitle};
`;
