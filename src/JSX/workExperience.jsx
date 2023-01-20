import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../CSS/workExperience.css";
const workExperience = () => {
  return (
    <>
      <h1 className="text-danger title ">Mi experiencia Laboral</h1>

      <article className="carta bg-secondary ">
        <h3 className="title_1 text-light">Acrecer</h3>
        <h4 className="title_2">
          • Practicante en Asistencia en Análisis y Desarrollo de Software
        </h4>
        <p className="texto">
          •Buscar los múltiples errores del software inmobiliario <br />
           para optimizar su uso tanto para empleados como para clientes 
          <br />
          <br />• Revisar el software de prueba antes de que el ower lo llevara a
           producción
        </p>
      </article>

      <article className="carta_2 bg-secondary">
        <h3 className="title_1 text-light">Mi Portafolio</h3>
        <h4 className="title_2">• Programador Autonomo</h4>
        <p className="texto">
          • Desarrolle La pagina web desde el principio a Fin  
          <br />
          • Prara el front Utilice React
        </p>
      </article>
    </>
  );
};

export default workExperience;
