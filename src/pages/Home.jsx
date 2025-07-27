import React from "react";
import { motion } from "framer-motion";
import homepage from "../assets/images/Homepage.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

const buttonVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "backOut"
    }
  }
};

const Home = () => {
  return (
    <motion.section 
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24" 
      id="home"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left space-y-6">
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
            variants={textVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
              Indigenous-Led
            </span>{" "}
            Driver Training Excellence in Alberta
          </motion.h1>
          
          <motion.p 
            className="text-lg text-gray-600 leading-relaxed max-w-2xl"
            variants={textVariants}
          >
            First Nation Horizon Contracting empowers communities through expert 
            driver training programs tailored for both Indigenous and non-Indigenous 
            learners across Alberta.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
            variants={containerVariants}
          >
            <motion.button 
              type="button" 
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
              variants={buttonVariants}
            >
              Enrol Now
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
            
            <motion.button 
              type="button" 
              className="px-8 py-3.5 border-2 border-blue-500 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              variants={buttonVariants}
            >
              Explore Our Courses
            </motion.button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div 
            className="pt-6 flex flex-col sm:flex-row items-center gap-4 text-sm text-gray-500"
            variants={containerVariants}
          >
            <motion.div 
              className="flex items-center"
              variants={textVariants}
            >
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Certified Instructors
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={textVariants}
            >
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Cultural Sensitivity Training
            </motion.div>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div 
          className="md:w-1/2 relative"
          variants={imageVariants}
        >
          <div className="relative before:absolute before:-inset-4 before:rounded-xl before:bg-gradient-to-r before:from-blue-100 before:to-blue-50 before:opacity-70 before:-z-10">
            <motion.img 
              src={homepage} 
              alt="Driver training" 
              className="w-full h-auto rounded-lg shadow-2xl object-cover transform transition-all duration-500 hover:scale-105" 
              whileHover={{ scale: 1.02 }}
            />
          </div>
          
          {/* Decorative elements */}
          <motion.div 
            className="absolute -bottom-6 -right-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          />
          <motion.div 
            className="absolute -top-6 -left-6 w-16 h-16 bg-blue-300 rounded-full opacity-20 -z-10"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 1, type: "spring" }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Home;