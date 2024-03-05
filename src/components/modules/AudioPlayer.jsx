import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import stop from "assets/stop.svg";
import start from "assets/play.svg";
import { setLocalStorage } from "modules/utils";
import { useNavigate } from "react-router-dom";

const AudioPlayer = ({ id, src }) => {
  const navigate = useNavigate();
  const audioRef = useRef(new Audio(src));
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const progressBarContainerRef = useRef(null);

  const togglePlayPause = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    const audio = audioRef.current;

    const onLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const onTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const onEnded = () => {
      setIsPlaying(false);
      setLocalStorage(id, true);
      navigate("/main");
    };

    audio.addEventListener("loadedmetadata", onLoadedMetadata);
    audio.addEventListener("timeupdate", onTimeUpdate);
    audio.addEventListener("ended", onEnded);

    return () => {
      audio.removeEventListener("loadedmetadata", onLoadedMetadata);
      audio.removeEventListener("timeupdate", onTimeUpdate);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const changeAudioProgress = (e) => {
    const width = progressBarContainerRef.current.offsetWidth; // 전체 진행률 바의 너비
    const clickX = e.nativeEvent.offsetX; // 클릭한 위치
    const duration = audioRef.current.duration;
    audioRef.current.currentTime = (clickX / width) * duration;
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <Container>
      <Wrapper>
        <Button onClick={togglePlayPause}>
          {isPlaying ? <img src={stop} /> : <img src={start} />}
        </Button>
        <ProgressBarContainer
          ref={progressBarContainerRef}
          onClick={changeAudioProgress}
        >
          <ProgressBar currentTime={currentTime} duration={duration} />
        </ProgressBarContainer>
        <Time>{formatTime(duration)}</Time>
      </Wrapper>
    </Container>
  );
};

export default AudioPlayer;

const Container = styled.div`
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 5.75rem;
  display: flex;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: ${(props) => props.theme.layout.minWidth.mobile};
  height: 5.75rem;
  padding: 0 1.5rem;
  background-color: ${(props) => props.theme.colors.background.primary};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.span`
  width: 1.5rem;
  height: 1.5rem;
  cursor: pointer;

  > img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

const ProgressBarContainer = styled.div`
  width: 16rem;
  height: 0.5rem;
  background-color: #d9d9d9;
  border-radius: 1rem;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  height: 100%;
  border-radius: 1rem;
  background-color: ${(props) => props.theme.colors.main.primary};
  width: ${(props) => (props.currentTime / props.duration) * 100}%;
`;

const Time = styled.span`
  color: ${(props) => props.theme.font.colors.white};
  font-size: ${(props) => props.theme.font.fontSize.small};
  font-family: ${(props) => props.theme.font.family.L};
`;
