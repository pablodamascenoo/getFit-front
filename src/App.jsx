import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Reset from "./assets/global_styles/Reset.js";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import { theme } from "./assets/themes/index.js";
import { ThemeProvider } from "@mui/material";
import LoginPage from "./pages/LoginPage/index.jsx";
import InfoPage from "./pages/InfoPage/index.jsx";
import UserContext from "./contexts/UserContext.js";

function App() {
  const [userInfo, SetUserInfo] = useState(
    JSON.parse(localStorage.getItem("UserInfo"))
  );
  const value = { userInfo, SetUserInfo };

  return (
    <>
      <Reset />
      <UserContext.Provider value={value}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/sign-up" element={<RegisterPage />} />
              <Route path="/auth/sign-in" element={<LoginPage />} />
              <Route path="/info" element={<InfoPage />} />
            </Routes>
          </BrowserRouter>
        </ThemeProvider>
      </UserContext.Provider>
    </>
  );
}

export default App;
