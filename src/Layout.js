import styled from "styled-components";
import "./App.css";

const Layout = ({ children }) => {
  return (
    <div className="App">
      <Container>{children}</Container>
    </div>
  );
};

const Container = styled.div`
  width: 375px;
  height: 667px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-sizing: border-box;
`;
export default Layout;
