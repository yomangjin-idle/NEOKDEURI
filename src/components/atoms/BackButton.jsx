import styled from "styled-components";
import back from "assets/back.svg";
import { useNavigate } from "react-router-dom";

const BackButton = ({ title }) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(-1);
  };
  return (
    <Container>
      <ButtonWrapper>
        <Wrapper onClick={onClickHandler}>
          <img src={back} />
        </Wrapper>
        <Content>{title}</Content>
      </ButtonWrapper>
    </Container>
  );
};

export default BackButton;

const Container = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  z-index: 50;
  width: 100%;
`;

const ButtonWrapper = styled.div`
  position: relative;
  width: ${(props) => props.theme.layout.minWidth.mobile};
  height: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const Wrapper = styled.button`
  position: absolute;
  left: 0;
  border: none;
  width: 3rem;
  height: 3rem;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;

  > img {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 375px;
  height: 100%;
  font-size: ${(props) => props.theme.font.fontSize.large};
  color: ${(props) => props.theme.font.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.font.family.onboadingTitle};
`;
