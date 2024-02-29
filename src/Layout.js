//import { useState } from 'react';
import styled from "styled-components";
import "./App.css";

//import { instance } from "./api.js";

const Layout = ({ children }) => {
  // const [apiTest, setApiTest] = useState(false);
  // const [dbTest, setDbTest] = useState(false);

  // const handleApiOnclick = async () => {
  //     try {
  //         await instance.get("/test");
  //         setApiTest(true);
  //     } catch(err) {
  //         console.log(err);
  //     }

  // }

  // const handleDbOnClick = async () => {
  //     try {
  //         await instance.get("/db");
  //         setDbTest(true);
  //     } catch(err) {
  //         console.log(err);
  //     }
  // }

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
