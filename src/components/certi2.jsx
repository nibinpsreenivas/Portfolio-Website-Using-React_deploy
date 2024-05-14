import React from "react";
import { motion } from "framer-motion";

const Certi2 = () => {
  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      variants={{
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      className="max-w-xl mx-auto my-8"    >
      <a href="https://www.udemy.com/certificate/UC-61103957-d469-4fc2-bf65-841e710ca35a/">
        <img
          class="rounded-t-lg w-full p-0"
          src="https://udemy-certificate.s3.amazonaws.com/image/UC-61103957-d469-4fc2-bf65-841e710ca35a.jpg?v=17155423510000"
          alt=""
        />
      </a>
      
    </motion.div>
    
  );
};

export default Certi2;
