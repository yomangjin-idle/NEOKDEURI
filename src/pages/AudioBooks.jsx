import BackButton from "components/atoms/BackButton";
import LoadingSpinner from "components/atoms/LoadingSpinner";
import AudioPlayer from "components/modules/AudioPlayer";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getTourAudioInfoAPI } from "services/tour";
import styled from "styled-components";

const AudioBooks = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const [file, setFile] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getTourPlaceInfo = async () => {
      try {
        setIsLoading(true);
        const response = await getTourAudioInfoAPI(id);
        const data = response?.data;

        setFile(data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    getTourPlaceInfo();
  }, []);

  return (
    <Wrapper>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <BackButton title={state.title && `${state.title}의 추억`} />
          <Content>{file?.script}</Content>
          <AudioPlayer id={id} src={file?.filePath} />
        </>
      )}
    </Wrapper>
  );
};

export default AudioBooks;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: #252936;
`;

const Content = styled.p`
  height: 32.6rem;
  margin: 0.5rem 1.5rem 0 1.5rem;
  color: ${(props) => props.theme.font.colors.white};
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  cursor: pointer;
  font-family: ${(props) => props.theme.font.family.M};
  white-space: pre-line;
  text-align: left;
  &::-webkit-scrollbar {
    display: none;
  }
`;
