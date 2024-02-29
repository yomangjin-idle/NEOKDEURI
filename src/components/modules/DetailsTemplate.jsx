import SubTitle from "components/atoms/SubTitle";
import styled from "styled-components";

const DetailsTemplate = ({ name, children, margin }) => {
  return (
    <Wrapper margin={margin}>
      <SubTitle margin="0 0 0.25rem">{name}</SubTitle>
      {children}
    </Wrapper>
  );
};

export default DetailsTemplate;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${(props) => (props.margin ? props.margin : `0 0 2.5rem 0`)};
  font-family: ${(props) => props.theme.font.family.onboadingTitle};
`;
