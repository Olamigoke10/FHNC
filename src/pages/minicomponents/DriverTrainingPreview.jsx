import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaCertificate } from "react-icons/fa";
import { Car, CarFront, ArrowRight } from "lucide-react";

// Animation variants for the Driver Training Preview section
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const cardHoverVariants = {
  rest: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5 },
};

const DriverTrainingPreview = () => {
  const trainingPrograms = [
    {
      icon: <Car size={32} className="text-blue-600" />,
      title: "Class 3 Driver Training",
      description: "Our intensive Class 3 programme prepares you to operate trucks with more than two axles.",
      highlight: "Direct employment pathways"
    },
    {
      icon: <CarFront size={32} className="text-blue-600" />,
      title: "Class 5 Driver Training",
      description: "Comprehensive training for standard passenger vehicles with urban and highway driving.",
      highlight: "Tailored to your business needs"
    },
    {
      icon: <FaCertificate size={32} className="text-blue-600" />,
      title: "Air Brakes Certification",
      description: "Specialized training on air brake systems found in commercial vehicles.",
      highlight: "Culturally sensitive scheduling"
    }
  ];

  return (
    <motion.section 
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gradient-to-b from-blue-50 to-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Professional Training
          </span>
        </div>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
          variants={textVariants}
        >
          Launch Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800">Driving Career</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
          variants={textVariants}
        >
          Our comprehensive driver training programs combine hands-on practical instruction with essential theory, 
          delivered by experienced instructors who understand both technical requirements and cultural contexts.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {trainingPrograms.map((program, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow border border-blue-100"
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 bg-blue-100 rounded-full">
                {program.icon}
              </div>
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-3">{program.title}</h3>
            <p className="text-gray-600 mb-4">{program.description}</p>
            <div className="flex items-center justify-center gap-2 pt-2">
              {/* <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg> */}
              {/* <span className="text-sm font-medium text-blue-600">{program.highlight}</span> */}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="bg-gradient-to-r from-blue-100 to-blue-200 rounded-2xl p-8 md:p-12"
        variants={textVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to start your driving career?</h3>
            <p className="text-gray-700 mb-6">
              Our programs are designed to meet industry standards while accommodating diverse learning needs. 
              We provide the skills and certification you need to succeed in the transportation industry.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Experienced certified instructors",
                "Flexible scheduling options",
                "Hands-on practical training",
                "Job placement assistance"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <motion.div 
            className="md:w-1/3 text-center"
            whileHover="hover"
          >
            <motion.div
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all group"
              variants={cardHoverVariants}
            >
              <Link
                to="/DriverTraining"
                className="inline-flex items-center justify-center"
              >
                Explore Programs
                <motion.span variants={arrowVariants}>
                  <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </motion.span>
              </Link>
            </motion.div>
            <p className="text-sm text-gray-600 mt-4">
              Or <Link to="/contact" className="text-blue-600 hover:underline">contact us</Link> for more information
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default DriverTrainingPreview;