import styled from "styled-components";

const SubTitle = ({ fontSize, color, fontBold, margin, children }) => {
  return (
    <Wrapper
      fontSize={fontSize}
      color={color}
      fontBold={fontBold}
      margin={margin}
    >
      {children}
    </Wrapper>
  );
};

export default SubTitle;

const Wrapper = styled.h2`
  font-size: ${(props) =>
    props.fontSize ? props.fontSize : props.theme.font.fontSize.large};
  font-weight: ${(props) =>
    props.fontBold ? props.fontBold : props.theme.font.fontStyle.bold};
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.main.primary};
  margin: ${(props) => (props.margin ? props.margin : `0`)};
  text-align: left;
`;
