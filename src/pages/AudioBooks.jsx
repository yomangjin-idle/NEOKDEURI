import BackButton from "components/atoms/BackButton";
import AudioPlayer from "components/modules/AudioPlayer";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTourAudioInfoAPI } from "services/tour";
import styled from "styled-components";

const AudioBooks = () => {
  const { id } = useParams();
  const [file, setFile] = useState("");

  useEffect(() => {
    const getTourPlaceInfo = async () => {
      try {
        const response = await getTourAudioInfoAPI(id);
        const data = response?.data;

        setFile(data.filePath);
      } catch (error) {
        console.error(error);
      }
    };
    getTourPlaceInfo();
  }, []);

  return (
    <Wrapper>
      <BackButton title="다랑쉬굴의 추억" />
      <Content>
        {`그 시절, 저는 제주도에서 생활하며 이루 어려운 시기를 겪었습니다.제주4·3사건, 그것은 제주도민들에게 깊은 상처를 남긴 참혹한 역사입니다.그 중심에는 '다랑쉬굴'이 있었죠.
          
          다랑쉬굴은 제주도 서귀포시에 위치한 동굴로, 제주4·3사건에서 많은 희생자들이 이곳에서 생명을 잃었습니다.
          
          이곳은 고통 받는 사람들의 숨소리가 아직도 들려올 것만 같은 곳이며, 그 참혹함을 오늘날에도 잊지 못합니다. 
          
          당시 제주도는 외부와 단절되어있었고, 사람들은 공포에 떨며 하루하루를 보냈습니다. 아침에 일어나면 새로운 희생자들의 소식이 전해져 왔고, 누구나 그 다음 희생자가 될 수
          있다는 공포에 사는 것이 일상이었습니다. 
          
          그 시기의 제주도는 평화롭던 섬의 모습을 잃고, 사람들은 고통과 공포 속에서 살아가야 했습니다. 그
          아픔과 슬픔은 말로 표현하기 어렵습니다. 
          
          제주4·3사건은 우리 역사의 아픔을 깊이 실감하게 하는 사건입니다. 이를 기억하며, 우리는 과거의
          참혹한 역사를 잊지 않고, 더 나은 미래를 위해 노력해야 합니다.
          
          다랑쉬굴의 기억은 우리에게 평화의 중요성을 일깨워주며, 그 희생자들에 대한 존경의 마음을 갖게 합니다.`}
      </Content>
      <AudioPlayer id={id} src={file} />
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
