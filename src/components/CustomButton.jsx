import React from "react";
import { motion } from 'framer-motion'

export const CustomButton = ({title, className = '', icons, type, onClick, animation}) => {
  return (
    <motion.button
    animate={animation} 
    className={`bg-black text-[#e7e7d6] px-5 py-3 rounded-2xl flex items-center gap-2 md:mt-10 active:scale-90 duration-100 ${className} `}
    type={type}
    onClick={onClick}
    >{title} {icons} </motion.button>
  );
};

