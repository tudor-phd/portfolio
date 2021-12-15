import  React, {useState} from "react";
import { motion, useViewportScroll, useTransform, AnimatePresence } from "framer-motion";
import './cards.css'
export const Cards = () => {
  const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 3]);
  const [selectedId, setSelectedId] = useState(null)

  return (
<div className="section2">
<div className="wrapper">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
        ><h2>Work</h2>
        <button onClick={() => setSelectedId('c')}>Click</button>
        </motion.div>
      </motion.div>
    </div>
    <div className="wrapper2">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
          ><h2>About</h2>
          <button onClick={() => setSelectedId('b')}>Click</button>
          </motion.div>
          </motion.div>
    </div>
    <div className="wrapper3">
      <motion.div
        className="container"
        style={{
          scale
        }}
      >
        <motion.div
          className="item"
          style={{
            scaleY: scrollYProgress
          }}
          ><h2>Skills</h2>
          <button onClick={() => setSelectedId('a')}>Click</button>
          </motion.div>
          </motion.div>
    </div>
    <AnimatePresence>
  {selectedId && (
    <motion.div layoutId={selectedId}>
      <motion.h5>Hello</motion.h5>
      <motion.h2>Hello title</motion.h2>
      <motion.button onClick={() => setSelectedId(null)} />
    </motion.div>
  )}
</AnimatePresence>
</div>
  );
};

export default Cards
