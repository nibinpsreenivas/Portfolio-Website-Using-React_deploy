import React from "react";
import { motion } from "framer-motion";

const Certi3 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl mx-auto my-8"    >
      <a href="https://www.udemy.com/certificate/UC-26a5bae8-fc4a-42a1-9bcf-c00d04bfc266/">
        <img
          class="rounded-t-lg w-full p-0"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-26a5bae8-fc4a-42a1-9bcf-c00d04bfc266.jpg?v=1715454563000"
          alt=""
        />
      </a>
      
    </motion.div>
    
  );
};

export default Certi3;
