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
        <h3 >
          <Link to="/profile" className="text-danger name">
            Jhojan Toro
          </Link>
        </h3>

        <ul>

          <Link className="text-light li" to="/experiencie">Mis experiencias profecionales</Link>
          <Link className="text-light li">Mis Estudios</Link>
          <Link className="text-light li">Idiomas</Link>
          <Link className="text-light li">Conocimientos Informaticos</Link>
          <Link className="text-light li">Conocimientos y Habilidades</Link>
          <Link className="text-light li">Desplazamiento y Movilidad</Link>
          <Link className="text-light li">¿Que clase de trabajo quiero?</Link>
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
