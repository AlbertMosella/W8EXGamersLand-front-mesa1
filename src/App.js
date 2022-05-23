import { Navigate, Route, Routes } from "react-router-dom";
import styled from "styled-components";

import GamesPage from "./pages/GamesPage/GamesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

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
          <Route path="/" element={<Navigate to="/games" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/games" element={<GamesPage />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
