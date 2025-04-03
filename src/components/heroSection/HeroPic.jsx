import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import { PiCircleThin } from "react-icons/pi";
const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center"
    >
      <img
        src="../../images/Ayu.png"
        alt="Ayush"
        className="max-h-[450px] w-auto rounded-full border"
      />
      <div className="absolute -z-10 flex justify-center items-center animate-pulse sm:hidden md:block">
        <PiCircleThin className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-orange blur-md" />
      </div>
    </motion.div>
  );
};

export default HeroPic;
