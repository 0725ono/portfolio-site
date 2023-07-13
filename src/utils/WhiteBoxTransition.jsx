import React from "react";
import { motion } from "framer-motion";
// import "./WhiteBoxTransition.css";

const WhiteBoxTransition = ({ children }) => {
  const whiteBox = {
    initial: {
      height: "100vh",
      bottom: 0,
    },
    animate: {
      height: 0,
      opacity: 1,
      transition: {
        duration: 1,
        ease: [0.87, 0, 0.13, 1],
      },
    },
  };
  return (
    <div className="topbg">
      <motion.div
        initial="initial"
        animate="animate"
        variants={whiteBox}
        className="motionBg"
        onAnimationStart={() => document.body.classList.add("overflow")}
        onAnimationComplete={() => document.body.classList.remove("overflow")}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default WhiteBoxTransition;
