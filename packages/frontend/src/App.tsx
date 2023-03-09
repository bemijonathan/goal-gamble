import React from "react";
import "antd/dist/reset.css";
import { SignUp } from "./pages/AuthLayout/SignUp";
import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/AuthLayout/SignIn";
import { Dashboard } from "./pages";
import { ErrorPage } from "./pages/error";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/" element={<Dashboard />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
