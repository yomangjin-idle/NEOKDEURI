import styled from "styled-components";

const Image = ({ width, height, radius, margin, padding, src }) => {
  return (
    <Wrapper
      width={width}
      height={height}
      radius={radius}
      margin={margin}
      padding={padding}
      src={src}
    ></Wrapper>
  );
};

export default Image;

const Wrapper = styled.img`
  width: ${(props) => (props.width ? props.width : `5rem`)};
  height: ${(props) => (props.height ? props.height : `5rem`)};
  border-radius: ${(props) => (props.radius ? props.radius : `0.5rem`)};
  margin: ${(props) => (props.margin ? props.margin : `0`)};
  padding: ${(props) => (props.padding ? props.padding : `0`)};
`;
