import Content from "components/atoms/Content";
import TextHighlight from "components/atoms/TextHighlight";
import styled from "styled-components";

const DetailsDescription = ({ name, margin, children }) => {
  return (
    <Wrapper margin={margin}>
      <TextHighlight name={name} />
      <Content fontSize="0.75rem" color="#999999">
        {children}
      </Content>
    </Wrapper>
  );
};

export default DetailsDescription;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: white;
  margin: ${(props) => (props.margin ? props.margin : `0`)};
`;
