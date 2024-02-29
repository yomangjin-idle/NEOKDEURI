import Description from "components/atoms/Description";
import Image from "components/atoms/Image";
import styled from "styled-components";

const ImageTemplate = ({ src, text, margin }) => {
  return (
    <Wrapper margin={margin}>
      <Image src={src} radius="0.75rem" width="12.5rem" height="9rem" />
      <Description align="center" fontSize="0.75rem" margin="0.5rem 0 0 0">
        {text}
      </Description>
    </Wrapper>
  );
};

export default ImageTemplate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : `0`)};
  font-family: ${(props) => props.theme.font.family.onboadingTitle};
`;
