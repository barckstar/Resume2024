import React, { useState } from "react";
import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";
import "./services.scss";
import data from "../../data/data.json";

const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity
    }
  }
}


const Servicios = () => {
  const { servicios, logos } = data;
  const itemsPerPage = 3;
  const [currentPage, setCurrentPage] = useState(1);


  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = servicios.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(servicios.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="servicios">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Nuestros Servicios
      </motion.h2>
      <div className="paginationButtons">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className="serviciosGrid">
        {currentItems.map((servicio, index) => (
          <ServiceCard key={servicio.id} service={servicio} index={index} />
        ))}
      </div>
      <div className="slidingLogosContainer">
        <motion.div
          className="slidingLogos"
          variants={sliderVariants} initial="initial" animate="animate"
        >
          {logos.map((logo) => (
            <img key={logo.id} src={logo.img} alt="Tech Logo" />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Servicios;