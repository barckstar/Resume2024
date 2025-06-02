import React from "react";
import { motion } from "framer-motion";
import "./about.scss";
import data from "../../data/data.json"; 



const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-60%",
    transition: {
      duration: 20,
      repeatType: "mirror",
      repeat: Infinity
    }
  }
}

const About = () => {
  const { aboutInfo, logos } = data; 

  return (
    <div className="about">
      <div className="textContainer">
        {aboutInfo.map((paragraph, index) => (
          <motion.p
            key={paragraph.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            dangerouslySetInnerHTML={{ __html: paragraph.description }} 
          />
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
    </div>
  );
};

export default About;