import React, { useState } from "react";
import { motion } from "framer-motion";

const ServiceCard = ({ service, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [randomRotation, setRandomRotation] = useState(0);

  const handleHoverStart = () => {
    setIsHovered(true);
    setRandomRotation(Math.floor(Math.random() * 21) - 10);
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
  };

  return (
    <motion.div
      key={service.id}
      className="servicioCard"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
      animate={{ scale: isHovered ? 1.3 : 1, 
        rotate: isHovered ? randomRotation : 0,
        boxShadow: isHovered
        ? "0px 10px 30px rgba(128, 0, 128, 0.2)"
        : "0px 2px 10px rgba(128, 0, 128, 0.2)",
     }}
    >
      <h3>{service.title}</h3>
      <p>{service.description}</p>
      <div className="price">{service.price}</div>
      <button className="contactButton">Contactar</button>
    </motion.div>
  );
};

export default ServiceCard;