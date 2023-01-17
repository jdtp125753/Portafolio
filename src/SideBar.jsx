import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "./imgs/profile.jpg";
import GitHup from "./Icons/github.png";
import GitLab from "./Icons/gitlab.png";
import Facebook from "./Icons/facebook.png";
import LinknkedIn from "./Icons/linkedin.png";

import "./CSS/aside.css";

const SideBar = () => {
  return (
    <>
      <aside className="sidebar">
        <h2>Mi Portafolio</h2>
        <img src={ProfileImg} className="profile" alt="Jhojan Toro" />
        <h3>
          <Link to="./JSX/Profile" className="name">
            Jhojan Toro
          </Link>
        </h3>

        <ul>
          <Link className="li">Mis experiencias profecionales</Link>
          <Link className="li">Mis Estudios</Link>
          <Link className="li">Idiomas</Link>
          <Link className="li">Conocimientos Informaticos</Link>
          <Link className="li">Conocimientos y HabiLinkdades</Link>
          <Link className="li">Desplazamiento y Movilidad</Link>
          <Link className="li">¿Que clase de trabajo quiero?</Link>
        </ul>
        <div className="sidebar-footer">
          <li>
            <a href="{#}">
              <img src={GitHup} alt="git-hup" className="icon" />
            </a>
          </li>
          <li>
            <a href="{#}">
              <img src={GitLab} alt="gitLab" className="icon" />
            </a>
          </li>
          <li>
            <a href="{#}">
              <img src={Facebook} alt="facebook" className="icon" />
            </a>
          </li>
          <li>
            <a href="{#}">
              <img src={LinknkedIn} alt="LinknkedIn" className="icon" />
            </a>
          </li>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
