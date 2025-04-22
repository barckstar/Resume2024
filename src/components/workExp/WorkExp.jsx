import React, { useState } from "react";
import { motion } from "framer-motion";
import "./WorkExp.scss";
import data from "../../data/data.json"; 

const WorkExp = () => {
  const { experiences } = data;
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