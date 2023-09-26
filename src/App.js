import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Dashboard/page/login/Login";
import Homee from "./Homee";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homee />}></Route>
        <Route exact path="/dashboard-login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
