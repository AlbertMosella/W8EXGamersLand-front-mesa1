import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import GamesPage from "./pages/GamesPage/GamesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Error404Page from "./pages/Error404Page/Error404Page";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <>
      <AppStyle>
        <h1>GamersLand</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/games" element={<GamesPage />} />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
