import styled from "styled-components";
import DetailsTemplate from "components/modules/DetailsTemplate";
import Description from "components/atoms/Description";
import ImageFlexBox from "components/molecules/ImageFlexBox";
import PlaceBox from "components/molecules/PlaceBox";
import MapContainer from "./MapContainer";
import AudioBox from "components/modules/AudioBox";
import BackButton from "components/atoms/BackButton";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTourPlaceInfoAPI } from "services/tour";
import LoadingSpinner from "components/atoms/LoadingSpinner";

const Details = () => {
  const { id } = useParams();
  const [content, setContent] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const buttonHandler = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const getTourPlaceInfo = async () => {
      try {
        setIsLoading(true);
        const response = await getTourPlaceInfoAPI(id);
        const data = response?.data;

        setContent(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getTourPlaceInfo();
  }, []);

  return (
    <PageWrapper>
      <Container>
        <BackButton />
        {isLoading ? (
          <LoadingSpinner />
        ) : (
          <>
            <AudioBox title={content?.tourInfo?.name} />
            <DetailBox>
              <DetailsTemplate name="주소">
                <Description>{content?.tourInfo?.address}</Description>
              </DetailsTemplate>
              <DetailsTemplate name="개요">
                <Description>
                  {isExpanded
                    ? content?.tourInfo?.content
                    : content?.tourInfo?.content?.slice(0, 185)}
                  {!isExpanded && (
                    <Button onClick={buttonHandler}>더보기</Button>
                  )}
                </Description>
              </DetailsTemplate>
              <DetailsTemplate name="유적지 사진">
                <ImageFlexBox images={content?.tourInfo?.images} />
              </DetailsTemplate>
              {content?.nearToursInfo?.length > 0 && (
                <DetailsTemplate name="인근 유적지">
                  {content?.nearToursInfo?.map((tour, index) => (
                    <PlaceBox
                      src={tour.imgPath}
                      key={index}
                      title={tour.name}
                      des={tour.content}
                      address={tour.address}
                      gap={`약 ${tour.dis}Km`}
                    />
                  ))}
                </DetailsTemplate>
              )}
              {content.tourInfo && (
                <DetailsTemplate name="지도">
                  <MapContainer
                    name={content?.tourInfo?.name}
                    lat={content?.tourInfo?.latitude}
                    lng={content?.tourInfo?.longitude}
                  />
                </DetailsTemplate>
              )}
            </DetailBox>
          </>
        )}
      </Container>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: pointer;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.neutral[700]};
`;

const DetailBox = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  padding: 1.5rem 1.5rem 0 1.5rem;
  border-radius: 1.75rem 0 0 0;
  position: relative;
  top: -3rem;
  background-color: ${(props) => props.theme.colors.background.primary};
`;

const Button = styled.button`
  font-size: 1rem;
  text-decoration-line: underline;
  border: none;
  background-color: transparent;
  color: #999999;
  margin: 0 0.5rem;
  &:hover {
    color: #d9d9d9;
  }
`;

export default Details;
