import Image from "components/atoms/Image";
import styled from "styled-components";
import example from "assets/example.png";
import SubTitle from "components/atoms/SubTitle";
import Content from "components/atoms/Content";
import Description from "components/atoms/Description";

const ModalDescription = ({ onClickHandler }) => {
  return (
    <PageWrapper>
      <Wrapper>
        <Image src={example} />
        <DescriptionBox>
          <SubTitle fontSize="1rem" margin="0 0 0.125rem 0">
            다랑쉬골
          </SubTitle>
          <Content fontSize="0.75rem" margin="0 0 0.25rem 0" color="#999999">
            제주 4.3 사건의 희생자를 기리는 공간
          </Content>
          <Description fontSize="0.75rem">
            세화리 다랑쉬굴은 1948년 하도리, 종달리 주민 11명이 피신해 살다가
            발각되어 희생당한 곳이다.
          </Description>
        </DescriptionBox>
      </Wrapper>
      <ButtonWrapper>
        <Button onClick={onClickHandler}>더보기</Button>
      </ButtonWrapper>
    </PageWrapper>
  );
};

export default ModalDescription;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 1rem 0.25rem 0.75rem 0;
  display: flex;
  justify-content: flex-end;
`;

const Button = styled.button`
  width: 5rem;
  height: 2.25rem;
  border-radius: 1.25rem;
  border: none;
  background-color: ${(props) => props.theme.colors.main.primary};
  color: ${(props) => props.theme.font.colors.white};
  font-family: ${(props) => props.theme.font.family.onboadingButton};
  font-size: ${(props) => props.theme.font.fontSize.medium};
`;
