import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WorkExp.scss";

const experiences = [
  {
    id: 1,
    title: "Freelancer - Desarrollador Frontend",
    date: "Oct 2023 - Actualidad",
    description: [
      "Liderazgo de proyectos desde la concepción hasta la implementación.",
      "Comunicación constante con los clientes para garantizar que se cumplan sus expectativas.",
      "Colaboración efectiva con equipos multidisciplinarios para lograr resultados óptimos.",
      "Proyectos destacados:",
      "- Estampida CR: Desarrollo y lanzamiento de un sitio web para una empresa de estampados, utilizando React y Vite.",
      "- MAS Contractors: Creación de un sitio web profesional para una empresa de construcción, utilizando Next.js y Tailwind CSS.",
    ],
  },
  {
    id: 2,
    title: "Geotecnologías S.A. - Analista Programador Junior",
    date: "Oct 2022 - Oct 2023",
    description: [
      "Resolución de problemas y mejoras en la API REST de la empresa.",
      "Desarrollo de un nuevo sistema que integra Esri y ArcGIS utilizando C#.",
      "Creación de informes utilizando jgreport e integración de bibliotecas para mejorar el rendimiento del sistema.",
    ],
  },
  {
    id: 3,
    title: "Nea:Coding - Desarrollador Junior",
    date: "Abr 2022 - Sep 2022",
    description: [
      "Diseño y desarrollo de software para clientes, adaptándome a sus necesidades específicas.",
      "Aprendizaje rápido de nuevas tecnologías y metodologías para cumplir con los objetivos del proyecto.",
    ],
  },
];

const WorkExp = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % experiences.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + experiences.length) % experiences.length);
  };

  return (
    <section className="workExp">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experiencia Laboral
      </motion.h2>

      {/* Línea de tiempo */}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div
            key={exp.id}
            className={`timeline-point ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          >
            <div className="point"></div>
            <p>{exp.date}</p>
          </div>
        ))}
      </div>

      {/* Controles de navegación */}
      <div className="controls">
        <button onClick={handlePrev}>Anterior</button>
        <button onClick={handleNext}>Siguiente</button>
      </div>

      {/* Tarjeta de descripción */}
      <motion.div
        className="descriptionCard"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h3>{experiences[activeIndex].title}</h3>
        <p className="date">{experiences[activeIndex].date}</p>
        <ul>
          {experiences[activeIndex].description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default WorkExp;