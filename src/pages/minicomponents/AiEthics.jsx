import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";

import Img1 from "../../assets/images/Leadership.png";
import Img2 from "../../assets/images/Leadership.png";
import Img3 from "../../assets/images/Leadership.png";

const textVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const listItemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5
    }
  })
};

const AiEthics = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 600,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Disabled arrows for mobile
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true
        }
      }
    ]
  };

  const features = [
    "Practical AI ethics frameworks and governance best practices",
    "Hands-on workshops for designing explainable AI workflows",
    "Strategies to ensure AI transparency and accountability",
    "Tailored sessions for diverse roles and industries"
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-24 relative">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-40 h-40 md:w-64 md:h-64 bg-blue-100 rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-40 h-40 md:w-64 md:h-64 bg-purple-100 rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-10">
        {/* Carousel Section */}
        <motion.div 
          className="w-full md:w-1/2 relative"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-purple-50 rounded-2xl md:rounded-[3rem] -z-10 opacity-80 backdrop-blur-sm"></div>
          <Slider {...settings}>
            {[Img1, Img2, Img3].map((img, index) => (
              <div key={index} className="px-2 sm:px-4 md:mt-24 flex justify-center">
                <motion.div
                  className={`relative h-[250px] sm:h-[300px] md:h-[350px] w-full overflow-hidden rounded-xl md:rounded-3xl shadow-lg md:shadow-2xl ${
                    index % 3 === 0 ? "blob-1" : index % 3 === 1 ? "blob-2" : "blob-3"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <motion.img
                    src={img}
                    alt={`AI Ethics slide ${index}`}
                    className="w-full h-full object-cover"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </motion.div>
              </div>
            ))}
          </Slider>
        </motion.div>

        {/* Text Section */}
        <motion.div 
          className="w-full md:w-1/2 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-gradient-to-br from-blue-50/70 to-purple-50/70 backdrop-blur-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div 
            className="inline-flex items-center gap-3 mb-4 md:mb-6"
            variants={textVariants}
          >
            <div className="w-2 h-6 md:h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-blue-600 uppercase">
              AI Ethics and Governance
            </span>
          </motion.div>

          <motion.h2 
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600"
            variants={textVariants}
          >
            Responsible AI for the Modern Enterprise
          </motion.h2>

          <motion.p 
            className="text-slate-600 mb-6 md:mb-8 text-base sm:text-lg leading-relaxed"
            variants={textVariants}
          >
            In an era of rapid AI adoption, responsible and ethical AI use
            is critical. Our specialized AI ethics and governance courses
            are designed for business leaders, employees, data scientists,
            compliance officers, teachers, and AI professionals.
          </motion.p>

          <div className="space-y-3 md:space-y-4">
            {features.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start p-3 sm:p-4 rounded-lg md:rounded-xl bg-white/50 backdrop-blur-sm shadow-sm hover:shadow-md transition-all"
                variants={listItemVariants}
                custom={i}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 mt-0.5 sm:mt-1">
                  <svg
                    className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <motion.path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: i * 0.2 }}
                    />
                  </svg>
                </div>
                <span className="ml-2 sm:ml-3 text-sm sm:text-base text-slate-700">{item}</span>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-6 md:mt-8"
            variants={textVariants}
          >
            <a href="https://forms.gle/4u4yp3Vqrvu9CAk49" className="inline-block">
              <motion.button
                className="px-4 py-2 sm:px-6 sm:py-3 rounded-lg md:rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm sm:text-base font-medium shadow-lg hover:shadow-xl transition-all w-full sm:w-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                RegisterAi
              </motion.button>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AiEthics;