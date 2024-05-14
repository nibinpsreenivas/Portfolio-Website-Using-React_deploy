import React from "react";
import { motion } from "framer-motion";

const Certi = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl mx-auto my-8"    >
      <a href="https://www.udemy.com/certificate/UC-a2900aaa-29c8-48c5-8697-898abf499950/">
        <img
          class="rounded-t-lg w-full p-0"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-a2900aaa-29c8-48c5-8697-898abf499950.jpg?v=1715453930000"
          alt=""
        />
      </a>
      
    </motion.div>
    
  );
};

export default Certi;
