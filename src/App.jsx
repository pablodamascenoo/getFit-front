import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Reset from "./assets/global_styles/Reset.js";
import RegisterPage from "./pages/RegisterPage/index.jsx";
import { theme } from "./assets/themes/index.js";
import { ThemeProvider } from "@mui/material";

function App() {
  return (
    <>
      <Reset />
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/sign-up" element={<RegisterPage />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
