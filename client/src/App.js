import { Routes, Route, Link } from "react-router-dom";
import Login from './pages/Login'
import DashbordLayot from './pages/DashbordLayot'
import BlogHome from './pages/BlogHome'
import Home from './pages/Home'
import React from 'react'
import Blog from "../src/Component/Blog"
import Layot from "./pages/Layot"
import EditBlog from "./pages/EditBlog"


export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="dashbord" element={<Layot />}>
        <Route path="/dashbord/home" element={<DashbordLayot />} />
        <Route path="/dashbord/home/blog/:id" element={<Blog />} />
        <Route path="/dashbord/home/editblog/:id" element={<EditBlog />} />
      </Route>
      <Route path="blog/:id" element={<BlogHome />} />
    </Routes>
  )
}

