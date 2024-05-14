import React from "react";
import { motion } from "framer-motion";

const Certi1 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl mx-auto my-8"    >
      <a href="https://www.udemy.com/certificate/UC-a42d070f-f344-4e8a-a06b-21a49a78b981/">
        <img
          class="rounded-t-lg w-full p-0"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-a42d070f-f344-4e8a-a06b-21a49a78b981.jpg?v=1715628619000"
          alt=""
        />
      </a>
      
    </motion.div>
    
  );
};

export default Certi1;
