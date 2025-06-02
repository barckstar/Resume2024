import './navbar.scss';
import { motion } from 'framer-motion';
import { TbBrandFiverr } from "react-icons/tb";
import { FaFilePdf } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="wrapper">
        <motion.h1 
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Full Stack Developer
        </motion.h1>
        <div className="social">
          <a href="https://www.fiverr.com/sellers/leonelgonzal192/edit" target='_blank' rel="noopener noreferrer">
            <TbBrandFiverr size={30}/>
          </a>
          <a href="https://www.linkedin.com/in/leo-cas/" target='_blank' rel="noopener noreferrer">
            <FaLinkedin size={30}/>
          </a>
          <a href="https://wa.me/+50660692197" target='_blank' rel="noopener noreferrer">
            <ImWhatsapp size={30} />
          </a>
          <a href="/PDF/Resume Ingles 2025.pdf"  target='_blank' rel="noopener noreferrer" download="Resume_2025.pdf">
            <FaFilePdf size={30}/>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;