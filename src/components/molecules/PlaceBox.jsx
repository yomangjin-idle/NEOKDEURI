import Image from "components/atoms/Image";
import styled from "styled-components";
import DetailsDescription from "components/modules/DetailsDescription";
import SubTitle from "components/atoms/SubTitle";
import Content from "components/atoms/Content";

const PlaceBox = ({ src, title, des, address, gap }) => {
  return (
    <Wrapper>
      <Image src={src} />
      <DescriptionBox>
        <SubTitle fontSize="1rem" color="white" margin="0 0 0.125rem 0">
          {title}
        </SubTitle>
        <Content fontSize="0.75rem" margin="0 0 0.25rem 0">
          {des}
        </Content>
        <DetailsDescription name="주소" margin="0 0 0.125rem 0">
          {address}
        </DetailsDescription>
        <DetailsDescription name="거리">{gap}</DetailsDescription>
      </DescriptionBox>
    </Wrapper>
  );
};

export default PlaceBox;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 1rem;
`;

const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 0.75rem;
`;
