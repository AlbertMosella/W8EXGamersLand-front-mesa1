import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import styled from "styled-components";

import GamesPage from "./pages/GamesPage/GamesPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import Error404Page from "./pages/Error404Page/Error404Page";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import jwtDecode from "jwt-decode";
import { loginActionCreator } from "./redux/features/userSlice";
import ManuelitaLaCantadora from "./components/ManuelitaLaCantadora/ManuelitaLaCantadora";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function App() {
  const { logged } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token || logged) {
      const userInfo = jwtDecode(token);

      dispatch(loginActionCreator(userInfo));
      navigate("/games");
    }
  }, [dispatch, navigate, logged]);

  return (
    <>
      <AppStyle>
        <h1>GamersLand</h1>
        <Routes>
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route
            path="/games"
            element={
              <ManuelitaLaCantadora>
                <GamesPage />
              </ManuelitaLaCantadora>
            }
          />
          <Route path="/*" element={<Error404Page />} />
        </Routes>
      </AppStyle>
    </>
  );
}

export default App;
