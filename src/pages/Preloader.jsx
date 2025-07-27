import { motion } from "framer-motion";

const Preloader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-white"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <div className="text-center">
        {/* Your logo or loading animation */}
        <motion.div
          className="mx-auto w-24 h-24 border-4 border-blue-600 border-t-transparent rounded-full mb-4"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <motion.p
          className="text-xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Loading...
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Preloader;