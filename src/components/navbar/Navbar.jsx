import Sidebar from '../sidebar/Sidebar'
import './navbar.scss'
import {motion} from 'framer-motion'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="wrapper">
            <motion.samp 
              initial={{opacity:0, scale:0.5}}
              animate={{opacity:1, scale:1.5}}
              transition={{duration:0.5}}            
              >Full Stack Developer</motion.samp>
            <div className="social">
                <a href="#"><img src='facebook.png' alt=''/></a>
                <a href="#"><img src='instagram.png' alt=''/></a>
                <a href="#"><img src='youtube.png' alt=''/></a>
                <a href="#"><img src='dribbble.png' alt=''/></a>
            </div>
            <Sidebar/>
        </div>
    </div>
  )
}

export default Navbar