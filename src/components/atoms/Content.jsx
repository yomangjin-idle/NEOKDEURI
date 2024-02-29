import styled from "styled-components";

const Content = ({ fontSize, color, fontBold, align, margin, children }) => {
  return (
    <Wrapper
      fontSize={fontSize}
      color={color}
      fontBold={fontBold}
      margin={margin}
      align={align}
    >
      {children}
    </Wrapper>
  );
};

export default Content;

const Wrapper = styled.span`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.font.fontSize.medium};
  font-weight: ${(props) => (props.fontBold ? props.fontBold : `500`)};
  color: ${(props) => (props.color ? props.color : `white`)};
  text-align: ${(props) => (props.align ? props.align : `left`)};
  margin: ${(props) => (props.margin ? props.margin : `0`)};
  font-family: ${(props) => props.theme.font.family.L};
`;
