import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "../imgs/profile.jpg";
import GitHup from "../Icons/github.png";
import GitLab from "../Icons/gitlab.png";
import Facebook from "../Icons/facebook.png";
import LinkedIn from "../Icons/linkedin.png"
import '../CSS/aside.css'

const SideBar = () => {
    return (
        <>
            <aside class="sidebar">
                <h2>Mi Portafolio</h2>
                <img src={ProfileImg} class="profile" alt="Jhojan Toro" />
                <Link to="/src/JSX/Profile.jsx"><h3>Jhojan Toro</h3></Link>
                <ul>
                    <li>Mis experiencias profecionales</li>
                    <li>Mis Estudios</li>
                    <li>Idiomas</li>
                    <li>Conocimientos Informaticos</li>
                    <li>Conocimientos y Habilidades</li>
                    <li>Desplazamiento y Movilidad</li>
                    <li>¿Que clase de trabajo quiero?</li>
                </ul>
                <div class="sidebar-footer">
                    <li><a href="{#}"><img src={GitHup} alt="git-hup" class="icon" /></a></li>
                    <li><a href="{#}"><img src={GitLab} alt="gitLab" class="icon" /></a></li>
                    <li><a href="{#}"><img src={Facebook} alt="facebook" class="icon" /></a></li>
                    <li><a href="{#}"><img src={LinkedIn} alt="LinkedIn" class="icon" /></a></li>
                </div>
            </aside>
        </>
    );
}

export default SideBar;