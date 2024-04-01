import styled from "styled-components";
import SubTitle from "components/atoms/SubTitle";
import Content from "components/atoms/Content";
import Description from "components/atoms/Description";
import { useEffect, useState } from "react";
import { getTourPlaceInfoAPI } from "services/tour";
import Image from "components/atoms/Image";
import LoadingSpinner from "components/atoms/LoadingSpinner";

const ModalDescription = ({ onClickHandler, placeId }) => {
  const [content, setContent] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTourPlaceInfo = async () => {
      try {
        setIsLoading(true);
        const response = await getTourPlaceInfoAPI(placeId);
        const data = response?.data;

        setContent(data.tourInfo);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };

    getTourPlaceInfo();
  }, []);

  return (
    <PageWrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Wrapper>
            {content.images && <Image src={content?.images[0]?.imgPath} />}
            <DescriptionBox>
              <SubTitle fontSize="1rem" margin="0 0 0.125rem 0">
                {content.name}
              </SubTitle>
              <Content
                fontSize="0.75rem"
                margin="0 0 0.25rem 0"
                color="#999999"
              >
                {content.address}
              </Content>
              <Description fontSize="0.75rem">{content.outline}</Description>
            </DescriptionBox>
          </Wrapper>
          <ButtonWrapper>
            <Button onClick={onClickHandler}>더보기</Button>
          </ButtonWrapper>
        </>
      )}
    </PageWrapper>
  );
};

export default ModalDescription;

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 10rem;
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
