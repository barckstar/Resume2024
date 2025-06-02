import "./hero.scss";
import { motion } from 'framer-motion'
import data from "../../data/data.json";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildern: 0.1,
    }
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity
    }

  }
}

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

const Hero = () => {
  return (
    <div className="hero">
      <div className="waraper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>Leonel Castro Gonzalez</motion.h2>
          <motion.h1 variants={textVariants}>Developer</motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button
              className="button"
              onClick={() => {
                const section = document.getElementById(data.sidebarLinks.find(link => link.id === 3).title);
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variants={textVariants}
            >
              See the Latest Works
            </motion.button>
            <motion.button
              className="button"
              onClick={() => {
                const section = document.getElementById("Contact");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              variants={textVariants}
            >
              Contact Me
            </motion.button>
          </motion.div>
          <motion.img variants={textVariants} animate="scrollButton" src="/scroll.png" alt="" />
        </motion.div>
        <motion.div variants={sliderVariants} initial="initial" animate="animate" className="slidingTextContainer">
          Leonel Castro Gonzalez
        </motion.div>
        <div className="imageContainer">
          <img src="./Foto-Leo-Serio.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
