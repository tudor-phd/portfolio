import React, { useEffect } from 'react';
import hoverEffect from 'hover-effect'
import {
  motion
} from 'framer-motion';
import ParticlesAnimation from "../particles/particles"
import Hover from 'react-3d-hover';
import {isMobile} from 'react-device-detect';

import { useInView } from 'react-intersection-observer';
import aboutImage from './images/about.jpeg'
import aboutImage2 from './images/about2.jpeg'
import './about.css'


export default function About() {
  const [ref, inView] = useInView({
    /* Optional options */
    threshold: 0.5,
    triggerOnce: false
  });
  const variants = {
    visible: { opacity: 1, scale: 1, y: 0 },
    hidden: {
      opacity: 0,
      scale: 0.65,
      y: 50
    }
  };
  useEffect(() => {
    const container = document.querySelector(".about-container");

    if (container) {
      new hoverEffect({
        parent: document.querySelector('.about-container'),
        intensity1: 1,
        intensity2: 1,
        speedIn: 1,
        speedOut: 1,
        image1: aboutImage,
        image2: aboutImage2,
        displacementImage: aboutImage2
      });
    }
  }, []);
  return (
   <>
    
    <motion.div
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      transition={{ duration: 2, ease: 'easeOut' }}
      ref={ref}
      className="magic"
    >
    
      <div>
        <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800" style={isMobile ? { background: "#202124", maxHeight: "100vh", overflow: "auto" } : {background: "#202124"}}>
          <div className="about-container w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"></div>
          <Hover max={10}>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
            {!isMobile && <ParticlesAnimation/>}
            
              <blockquote>
                <p className="text-lg font-medium">
                  “Once you eliminate the impossible, whatever remains, no matter how improbable, must be the truth.” - Sherlock Homes”
      </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-medium">
                  My name is Tudor D. Pop I'm a Full-Stack Engineer based in Cluj-Napoca. I describe myself as a passionate developer who loves coding, open source, and the web platform.
      </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-medium">
                  I have experience in: React.js, Next.js, Node.js Express Framework, Angular, MongoDB, PostgreSQL, Sequelize, Three.js, GSAP, HTML/CSS, Bootstrap, MaterialUI
      </p>
              </blockquote>
              <blockquote>
                <p className="text-lg font-medium">
                  For more details check my <b><a className="linkedin" rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/tudor-dan-pop-95363b66/">LinkedIn</a></b> profile       </p>
              </blockquote>
              <figcaption className="font-medium">
                <div className="text-sky-500 dark:text-sky-400">
                  Tudor D. Pop
      </div>
                <div className="text-slate-700 dark:text-slate-500">
                  Full-Stack Engineer
      </div>
              </figcaption>
            </div>
          </Hover>
        </figure>
      </div>
    </motion.div>
   </>
  );
}