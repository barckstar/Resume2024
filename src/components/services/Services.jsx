import React from "react";
import { motion } from "framer-motion";
import "./services.scss";

const servicios = [
  {
    id: 1,
    title: "Página web básica (SPA)",
    description:
      "Una página web de una sola aplicación (SPA) con 5-8 secciones, desarrollada con React o Angular.",
    price: "$500 - $800",
  },
  {
    id: 2,
    title: "Página web con múltiples páginas",
    description:
      "Una página web con varias páginas y navegación, desarrollada con React o Angular.",
    price: "$800 - $1200",
  },
  {
    id: 3,
    title: "Página web + API",
    description:
      "Una página web con múltiples páginas y una API personalizada para funcionalidades avanzadas.",
    price: "$1200 - $2000",
  },
  {
    id: 4,
    title: "Mantenimiento mensual",
    description:
      "Actualizaciones, correcciones y soporte técnico para tu página web.",
    price: "$100/mes",
  },
  {
    id: 5,
    title: "Hosting mensual",
    description:
      "Alojamiento de tu página web en servidores rápidos y seguros.",
    price: "$50/mes",
  },
  {
    id: 6,
    title: "Mantenimiento + Hosting",
    description:
      "Un paquete combinado que incluye mantenimiento y hosting.",
    price: "$130/mes",
  },
];

const Servicios = () => {
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
          <motion.div
            key={servicio.id}
            className="servicioCard"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <h3>{servicio.title}</h3>
            <p>{servicio.description}</p>
            <div className="price">{servicio.price}</div>
            <button className="contactButton">Contactar</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Servicios;