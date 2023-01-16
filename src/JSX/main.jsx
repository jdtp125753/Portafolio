import React from "react";
import {Route} from "react-router-dom";
import Profile from "./Profile"
import "../CSS/main.css";

const Main = () => {
  return (
    <>
      <main className="conteiner">
        <Route path="/src/JSX/Profile.jsx" component={Profile}/>
      </main>
    </>
  );
};
export default Main;