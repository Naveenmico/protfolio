"use client";
import React from "react";
import Card from "../sub/Card";
import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";


const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="education" >
      <div className="absolute w-auto h-auto top-0 z-[5] my-20">
        <motion.div
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          Professional Experience 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
            &{" "}
          </span>
          Education
        </motion.div>
      </div>
      <div
      className="flex flex-col items-center justify-center py-20 my-40 top-10 md:my-10"
      
    >
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 py-20">
        <Card
          src="/logo.png"
          title="SDE Intern @ Orga Plants"
          description="April-July 2023 | Worked on an Agro E-commerce product"
        />
        <Card
          src="/iiitv.png"
          title="B.Tech CSE IIIT Vadodara"
          description="2020-2024 | Final Year Student  |  CPI : 7.66 "
        />
      </div>
    </div>
    </div>
  );
};

export default Encryption;
