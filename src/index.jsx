import React from "react";
import ReactDOM from "react-dom/client";
import "./CSS/index.css";
import "./CSS/contents.css";
import SideBar from "./SideBar";
import Profile from "./JSX/Profile.jsx";
import Experience from "./JSX/workExperience.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Profil = () =>{
  return <Profile/>
}

const Experiences = () =>{
  return <Experience />
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
      <SideBar />
      <div className="container">
          <Routes>
            <Route path="/profile" element={<Profil/>} />
            <Route path="/experiencie" element={<Experiences/>} />
          </Routes>
      </div>
    </BrowserRouter>
);
