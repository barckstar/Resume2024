import { motion } from "framer-motion";
import data from "../../../data/data.json"; 

const variants = {
    open:{
        transition:{
            staggerChildren: 0.1,
        }
    },
    closed:{
        transition:{
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemVariants = {
    open:{
        y:0,
        opacity:1
    },
    closed:{
        y:50,
        opacity:0
    }
}


const Links = () => {
    const { sidebarLinks } = data;

  return (
    <motion.div className="links" variants={variants}>
        {sidebarLinks.map(link => (            
            <motion.a href={`#${link.title}`} 
                key={link.id} 
                variants={itemVariants}
                whileHover={{scale:1.1}}
                whileTap={{scale:0.95}}
                >
                    {link.title}
            </motion.a>
        ))}
    </motion.div>
  )
}

export default Links