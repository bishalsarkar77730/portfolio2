import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Dashboard/page/login/Login";
import Homee from "./Homee";
import AllBlogs from "./Blogs/AllBlogs";
import SingleBlogs from "./Blogs/SingleBlogs";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Homee />}></Route>
        <Route exact path="/dashboard-login" element={<Login />} />
        <Route exact path="/blogs" element={<AllBlogs />} />
        <Route exact path="/one-blog" element={<SingleBlogs />} />
      </Routes>
    </>
  );
}

export default App;
