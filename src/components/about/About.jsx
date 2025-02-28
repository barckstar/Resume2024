import React from "react";
import { motion } from "framer-motion";
import "./about.scss";

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
  "/techLogos/nodejs.svg",
  "/techLogos/Php_dark.svg",
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
    <div className="about">
      {/* Texto introductorio */}
      <div className="textContainer">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          ¡Hola! Soy Leonel Castro González
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Un desarrollador de software apasionado por crear soluciones tecnológicas que marcan la diferencia. Con una sólida formación en ingeniería de sistemas y experiencia en el desarrollo de aplicaciones web y APIs, me especializo en el uso de tecnologías como <strong>React</strong>, <strong>Next.js</strong>, <strong>.NET</strong>, y <strong>SQL Server</strong> para construir productos escalables y eficientes.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          Mi enfoque se centra en la colaboración efectiva y la resolución de problemas. Disfruto trabajar en equipo, donde puedo combinar mis habilidades técnicas con mi capacidad para comunicarme claramente y adaptarme a los desafíos del proyecto. He liderado proyectos desde la concepción hasta la implementación, como <strong>estampidacr.com</strong> y <strong>MAS Contractors</strong>, este último desarrollado con <strong>Next.js</strong> y <strong>Tailwind CSS</strong> para ofrecer una experiencia de usuario moderna y profesional.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          Me apasiona aprender y mantenerme al día con las últimas tendencias tecnológicas. Siempre estoy buscando oportunidades para crecer profesionalmente y enfrentar nuevos retos que me permitan expandir mis habilidades y contribuir al éxito de proyectos innovadores.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          Si estás buscando un desarrollador comprometido y con una mentalidad orientada a resultados, ¡no dudes en contactarme! Estoy emocionado por la posibilidad de colaborar en tu próximo proyecto.
        </motion.p>
      </div>

      {/* Logos de tecnologías */}
      <div className="slidingLogosContainer">
        <motion.div
          className="slidingLogos"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Tech Logo" />
          ))}
        </motion.div>
        <motion.div
          className="slidingLogos"
          animate={{ x: ["0%", "-100%"] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        >
          {logos.map((logo, index) => (
            <img key={index} src={logo} alt="Tech Logo" />
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default About;