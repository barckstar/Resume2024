import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

const sliderVariantsLeft = {
  initial: {
    x: "100%",
  },
  animate: {
    x: "-100%",
    transition: {
      duration: 20,
      repeatType: "loop",
      repeat: Infinity,
      ease: "linear",
    },
  },
};

const sliderVariantsRight = {
    initial: {
        x: 0,
    },
    animate:{
        x: "-220%",
        transition:{
            duration: 20,
            repeatType: "mirror",
            repeat: Infinity
        }
    }
}

const logos = [
  "./techLogos/Amazon Web Services_dark.svg",
  "/techLogos/angular.svg",
  "/techLogos/azure.svg",
  "/techLogos/bootstrap.svg",
  "/techLogos/cloudflare.svg",
  "/techLogos/csharp.svg",
  "/techLogos/css_old.svg",
  "/techLogos/figma.svg",
  "/techLogos/firebase.svg",
  "/techLogos/Github_dark.svg",
  "/techLogos/gitlab.svg",
  "/techLogos/Google_Colaboratory.svg",
  "/techLogos/jwt.svg",
  "/techLogos/kotlin.svg",
  "/techLogos/mysql.svg",
  "/techLogos/netlify.svg",
  "/techLogos/nextjs_icon_dark.svg",
  "/techLogos/nodejs.svg"
];

const logos2 = [
  
  "/techLogos/nodejs.svg",
  "/techLogos/Php_dark.svg",
  "/techLogos/Php_light.svg",
  "/techLogos/postman.svg",
  "/techLogos/python.svg",
  "/techLogos/react.svg",
  "/techLogos/sqlite.svg",
  "/techLogos/sql-server.svg",
  "/techLogos/stripe.svg",
  "/techLogos/swagger.svg",
  "/techLogos/tailwindcss.svg",
  "/techLogos/typescript.svg",
  "/techLogos/Unity_dark.svg",
  "/techLogos/Vercel_dark.svg",
  "/techLogos/visual-studio.svg",
  "/techLogos/vitejs.svg",
  "/techLogos/vscode.svg",
  "/techLogos/wordpress.svg"
];

const About = () => {
  return (
    <div className="slidingLogosContainer">
      {/* Barra izquierda a derecha */}
      <motion.div
        className="slidingBar"
        variants={sliderVariantsLeft}
        initial="initial"
        animate="animate"
      >
        {logos.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </motion.div>
      
      {/* Barra derecha a izquierda */}
      <motion.div
        className="slidingBar"
        variants={sliderVariantsRight}
        initial="initial"
        animate="animate"
      >
        {logos2.map((logo, index) => (
          <img key={index} src={logo} alt={`Logo ${index}`} className="logo" />
        ))}
      </motion.div>
    </div>
  );
};

export default About;
