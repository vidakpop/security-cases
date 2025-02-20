import { motion } from "framer-motion";

const Cases = () => {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }} 
      animate={{ x: 0, opacity: 1 }} 
      transition={{ duration: 0.5 }}
      className="p-6 text-white"
    >
      <h1 className="text-3xl font-bold neon-text">📂 Cases</h1>
      <p className="text-gray-400">View and manage all cases.</p>
    </motion.div>
  );
};

export default Cases;
