import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard"; 
import "./services.scss";
import data from "../../data/data.json"; 

const Servicios = () => {
  const { servicios } = data;
  return (
    <section className="servicios">
    <motion.h2
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Nuestros Servicios
    </motion.h2>

    <div className="serviciosGrid">
      {servicios.map((servicio, index) => (
        <ServiceCard key={servicio.id} service={servicio} index={index} />
      ))}
    </div>
  </section>
  );
};

export default Servicios;