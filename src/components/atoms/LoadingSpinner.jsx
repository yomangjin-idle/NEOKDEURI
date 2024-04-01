import styled from "styled-components";
import Image from "./Image";
import loading from "assets/loading.gif";

const LoadingSpinner = () => {
  return (
    <Wrapper>
      <Image width="2.5rem" height="2.5rem" src={loading}></Image>
    </Wrapper>
  );
};

export default LoadingSpinner;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
