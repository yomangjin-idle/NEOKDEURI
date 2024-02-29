import { Route, BrowserRouter, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Onboading from "pages/Onboading";
import Layout from "./Layout";
import Main from "pages/Main";
import Details from "pages/Details";
import AudioBooks from "pages/AudioBooks";
import Test from "pages/Test";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Layout>
          <Routes>
            <Route path="/" element={<Onboading />} />
            <Route path="/main" element={<Main />} />
            <Route path="/details/:id" element={<Details />} />
            <Route path="/details/audio/:id" element={<AudioBooks />} />
            <Route path="/test" element={<Test />} />
          </Routes>
        </Layout>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
