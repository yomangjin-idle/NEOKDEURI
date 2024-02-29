import styled from "styled-components";

const TextHighlight = ({ name, radius, padding, fontSize }) => {
  return (
    <Wrapper radius={radius} padding={padding} fontSize={fontSize}>
      {name}
    </Wrapper>
  );
};

export default TextHighlight;

const Wrapper = styled.span`
  background-color: ${(props) => props.theme.colors.main.fourth};
  border-radius: ${(props) =>
    props.radius ? props.radius : props.theme.radius.xlarge};
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.font.fontSize.small};
  padding: ${(props) => (props.padding ? props.padding : "0 0.25rem")};
  margin: ${(props) => (props.margin ? props.margin : "0 0.5rem 0 0")};
  font-family: ${(props) => props.theme.font.family.onboadingSub};
`;
