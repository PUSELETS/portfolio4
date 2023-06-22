import './App.css';
import { FiTwitter } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { SlSocialInstagram } from "react-icons/sl"
import { motion } from "framer-motion";
import React, { useState } from "react";

const variant = {
  hidden: {
      opacity : 0
  },
  visible : {
      opacity : 1
  }
}

const buttonh ={
  hover: {
    scale : [0,1.5,1,1],
    textShadow : "0px 0px 8px rbg(255, 255, 255)",
    boxShadow : "0px 0px 8px rbg(255, 255, 255)",
  }
}

const social9 = {
  hoverr:{
    scale : [1.4,1],
    textShadow : "0px 0px 8px rbg(255, 255, 255)",
    boxShadow : "0px 0px 8px rbg(255, 255, 255)",
  }
}

const getMenuStyles = (menuOpened) => {
  if (document.documentElement.clientWidth <= 640) {
    return { right: !menuOpened && "-50%" };
  }
};

function App() {

  const [menuOpened, setMenuOpened] = useState(false);

  return (
    <div className="main">
      <nav className="navbar">
        <a className="logo" href="/" >
          Tshekega
        </a>
        <ul className='menu' style={getMenuStyles(menuOpened)}
            
        >
          <li><a href="home">home</a></li>
          <li><a href="about">about</a></li>
          <li><a href="content">content</a></li>
        </ul>
        <div className="menuIcon"
          onClick={() => setMenuOpened((prev) => !prev)} >
          <FiAlignJustify  size={25} />
        </div>
      </nav>
      <div className="view-hieght">
        <section className="container">
          <div className="flex">
           <motion.div className="infor"
            variants={variant}
            initial="hidden"
            animate="visible"
            transition={{delay :1 , duration : 0.2}}
           >
            <span className="name">
              <strong>Hello there, i'm Tshekega </strong>
            </span>
            <span className="design">
              <strong>& i'm a website designer</strong>
            </span>
           </motion.div>
          </div>
       <div className="infor1">
        <p>
          I'm based at mankweng turf-loop, I develop <br /> beautiful, responsive WordPress web and <br /> mobile sites,  focusing on design, content, usability, and simplicity.
        </p>
        <p>
          Chat with  me on [Whatsapp] and [twitter].
        </p>
       </div>
       </section>
      </div>
      <div className='social'>
          <section className='sectionc'>
              <motion.ul 
              initial={{x : 0}}
              animate={{x : [0, 7, -7, 7, -7, 7, -7, 0]}}
              transition={{delay :10 , duration : 0.2}}
              className='listt'>
                <motion.li
                variants={social9}
                whileHover="hoverr"
                animate="hoverr"
                transition={{duration : 0.3}}
                ><a href='IG'><SlSocialInstagram size={"30px"} /></a></motion.li>
                <motion.li
                variants={social9}
                whileHover="hoverr"
                animate="hoverr"
                transition={{duration : 0.3}}
                ><a href='https://wa.me/27681167735?text=hello%20.%0Ayour%20website%20is%20the%20window%20of%20your%20business.%20lets%20make%20you%20a%20website%20that%20is%20fresh%20and%20exciting..'><FaWhatsapp size={"30px"} /></a></motion.li>
                <motion.li
                variants={social9}
                whileHover="hoverr"
                animate="hoverr"
                transition={{duration : 0.3}}
                ><a href='https://twitter.com/mishacktshekega/'><FiTwitter size={"30px"} /></a></motion.li>
              </motion.ul>
              <motion.div className='hi'
              variants={buttonh}
              whileInView="hover"
              animate="hover"
              transition={{delay :3 , duration : 0.7}}
              >
                <p>
                  <strong>start by saying</strong> <button className='button' ><a href="mailto:dimamabolo15@gmail.com"><strong>hi</strong></a></button>
                </p>
              </motion.div>
          </section>

      </div>
      <section className='space'></section>
      <section className='footer'>
        
      </section>
    
    </div>
  );
}

export default App;
