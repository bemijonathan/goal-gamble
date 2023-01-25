import React from "react";
import "antd/dist/reset.css";
import { SignUp } from "./pages/AuthLayout/SignUp";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
