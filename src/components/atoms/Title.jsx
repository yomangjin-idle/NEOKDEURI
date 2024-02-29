import styled from "styled-components";

const Title = ({ fontSize, color, fontBold, children }) => {
  return (
    <Wrapper fontSize={fontSize} color={color} fontBold={fontBold}>
      {children}
    </Wrapper>
  );
};

export default Title;

const Wrapper = styled.h1`
  font-size: ${(props) => (props.fontSize ? props.fontSize : `1rem`)};
  font-weight: ${(props) => (props.fontBold ? props.fontBold : `500`)};
  color: ${(props) => (props.color ? props.color : `black`)};
`;
