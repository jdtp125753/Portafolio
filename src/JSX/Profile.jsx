import React, { useState } from "react";

import ProfileImg from "../imgs/profile.jpg";

import "bootstrap/dist/css/bootstrap.min.css";

import "../CSS/profile.css";

const DownloadHDV = ({ filePath, fileName }) => {
  const hdvDownload = () => {
    const link = document.createElement("a");
    link.href = filePath;
    link.download = fileName;
    link.click();
  };

  return (
    <button className="btn btn-danger downloadhdv" onClick={hdvDownload}>
      Mi hoja De vida
    </button>
  );
};

const Profile = () => {
  const [filePath] = useState(
    "../IFiles/Hoja_de_Vida_Desarrollador_Junior.pdf"
  );
  const [fileName] = useState("Hoja_de_Vida_Desarrollador_Junior.pdf");
  return (
    <>
      <img src={ProfileImg} alt="Jhojan" className="img-Jhojan" />

      <h1>Jhojan D. Toro Perez</h1>

      <p>
        Soy Desarrollador con múltiples habilidades, y manejo una gran rama de
        lenguajes de programación, mi mayor fortaleza es el lenguaje de
        programación Java con SQL (o MySQL), también realizo proyectos Web con
        REACT y JavaScript Front, también manejo Back-End con nodeJs y manejo el
        sistema de control de versiones con Git, Git-hup y GitLab
      </p>

      <br />

      <DownloadHDV filePath={filePath} fileName={fileName} />
    </>
  );
};
export default Profile;
