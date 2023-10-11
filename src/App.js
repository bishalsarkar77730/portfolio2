import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Dashboard/page/login/Login";
import Homee from "./Homee";
import AllBlogs from "./Blogs/AllBlogs";
import SingleBlogs from "./Blogs/SingleBlogs";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";
import DashHome from "./Dashboard/page/Home/DashHome";
import Addblog from "./Dashboard/page/Addblog/Addblog";

function App() {
  return (
    <>
        <ToastContainer/>
      <Routes>
        <Route exact path="/" element={<Homee />}></Route>
        <Route exact path="/dashboard-login" element={<Login />} />
        <Route exact path="/blogs" element={<AllBlogs />} />
        <Route exact path="/one-blog/:id" element={<SingleBlogs />} />
        <Route exact path="dashboard-home" element={<DashHome />} />
        <Route exact path="Add-blog" element={<Addblog />} />
      </Routes>
    </>
  );
}

export default App;
