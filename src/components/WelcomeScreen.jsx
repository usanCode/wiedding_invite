

import { motion } from "framer-motion";

function WelcomeScreen({ onOpen }) {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-pink-100 text-center">
      
      <motion.h1
        className="text-3xl font-bold mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        You are invited 💌
      </motion.h1>

      <motion.button
        onClick={onOpen}
        className="bg-red-500 text-white p-10"
        whileHover={{ scale: 1.1 }}
      >
        Open Invitation
      </motion.button>

    </div>
    
  );
}

export default WelcomeScreen;