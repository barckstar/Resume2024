import { useRef } from 'react'
import './parallax.scss'
import { motion, useScroll, useTransform } from 'framer-motion'

const Parallax = ({type, title}) => {
    
    const ref = useRef();
    
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0,1], ["-100%", "500%"]);
    const yTextSun = useTransform(scrollYProgress, [0,1], ["-500%", "500%"]);
    const yBg = useTransform(scrollYProgress, [0,1], ["-60%", "300%"]);
    const yBgSun = useTransform(scrollYProgress, [0,1], ["-300%", "300%"]);

  return (
    <div className='parallax' style={{background:type==="services" ? "linear-gradient(180deg, #000000, #1a1a1a)" : "linear-gradient(180deg, #000000, #635035)"}}>
        <motion.h1 style={{ y:type==="services" ? yText : yTextSun }}>{title}</motion.h1>
        <motion.div className="mountains"></motion.div>
        <motion.div className="planets" style={{
            y : type==="services" ? yBg : yBgSun,
            backgroundImage:`url(${type==="services" ? "/planets.png" : "/sun.png"})`
        }}></motion.div>
        <motion.div style={{ x:type==="services" ? yBg : yBgSun  }} className="stars"></motion.div>
    </div>
  )
}

export default Parallax