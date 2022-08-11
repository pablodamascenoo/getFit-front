import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Reset from "./assets/global_styles/Reset.js";
import RegisterPage from "./pages/RegisterPage/index.jsx";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Reset />
      <BrowserRouter>
        <Routes>
          <Route path="/auth/sign-up" element={<RegisterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
