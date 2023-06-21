import React from "react";
import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <motion.div
      style={{ height: "90vh", backgroundColor: "#343434", color: "aliceblue" }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      AboutUs
    </motion.div>
  );
};

export default AboutUs;
