import React from "react";
import { motion } from "framer-motion";
import homepage from "../assets/images/Homepage.png";
import { FaUsers, FaChalkboardTeacher, FaCogs, FaShieldAlt, FaLaptop, FaArrowRight, FaArrowLeft } from "react-icons/fa";
import AiEthicsPreview from "./minicomponents/AiEthicsPreview";
import DriverTrainingPreview from "./minicomponents/DriverTrainingPreview";

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

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const whyFhnc = [
  {
    title: "Community Empowerment",
    description: "We prioritize Indigenous inclusion and cultural respect in all training programs.",
    icon: <FaUsers className="text-blue-600 text-3xl" />
  },
  {
    title: "Industry Expertise",
    description: "Our trainers are experts in several areas like driver education and AI ethics with proven track records.",
    icon: <FaChalkboardTeacher className="text-blue-600 text-3xl" />
  },
  {
    title: "Customizable Training",
    description: "Programs tailored to meet organizational and individual learning goals.",
    icon: <FaCogs className="text-blue-600 text-3xl" />
  },
  {
    title: "Compliance & Innovation",
    description: "Stay ahead with training that balances innovation with regulatory compliance.",
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />
  },
  {
    title: "Accessible Learning",
    description: "Offering flexible schedules, online options, and on-site training across Alberta.",
    icon: <FaLaptop className="text-blue-600 text-3xl" />
  }
];

const Home = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === whyFhnc.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) => 
      prevIndex === 0 ? whyFhnc.length - 1 : prevIndex - 1
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  React.useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

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
            className="text-1xl sm:text-3xl md:text-5xl font-bold text-gray-900 leading-tight"
            variants={textVariants}
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-800 to-blue-600">
               Empowering Communities & 
            </span>{" "}
           Businesses with Expert Training Programs
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
            <a href="/contact">
            <motion.button 
              type="button" 
              className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
              variants={buttonVariants}
            >
              Contact Us
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
            </motion.button>
            </a>
            
            {/* <motion.button 
              type="button" 
              className="px-8 py-3.5 border-2 border-blue-500 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              variants={buttonVariants}
            >
              Explore Our Courses
            </motion.button> */}
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

      {/* Why Choose FHNC Section with Carousel */}
      <div className="mt-24 text-center">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Why Us?
          </span>
        </div>

        <motion.h1 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight text-center mb-12"
          variants={textVariants}
        >
          Why Choose FHNC
        </motion.h1>

        {/* Mobile Carousel (hidden on md and up) */}
        <div className="md:hidden">
          <motion.div 
            className="relative overflow-hidden"
            variants={containerVariants}
          >
            {/* Carousel Track */}
            <div className="relative h-96">
              {whyFhnc.map((item, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  initial="hidden"
                  whileInView="visible"
                  variants={cardVariants}
                >
                  <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
                    <div className="flex justify-center mb-6">
                      {item.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
              aria-label="Previous slide"
            >
              <FaArrowLeft className="w-5 h-5 text-blue-600" />
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
              aria-label="Next slide"
            >
              <FaArrowRight className="w-5 h-5 text-blue-600" />
            </button>

            {/* Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {whyFhnc.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${index === activeIndex ? 'bg-blue-600' : 'bg-gray-300'}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Grid layout for larger screens (hidden on mobile) */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {whyFhnc.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              custom={index}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-600 pl-12">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ... (previous carousel/grid section code) ... */}

      {/* AI ethics preview */}
      <AiEthicsPreview />

      {/* Driver Training Preview */}
      <DriverTrainingPreview />

{/* Get Started Today! CTA Section */}
<motion.div 
  className="mt-24 bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 md:p-12 text-center"
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={containerVariants}
>
  <motion.h2 
    className="text-2xl md:text-3xl font-bold text-gray-900 mb-6"
    variants={textVariants}
  >
    Get Started Today!
  </motion.h2>
  
  <motion.p 
    className="text-lg text-gray-700 max-w-3xl mx-auto mb-8"
    variants={textVariants}
  >
    Whether you want to empower your community with expert driver training or lead your organization towards responsible AI innovation, FHNC is your trusted partner. Contact us now to learn more about our training programs, schedule a consultation, or request a customized training proposal.
  </motion.p>

  <motion.div 
    className="flex flex-col sm:flex-row gap-4 justify-center"
    variants={containerVariants}
  >
    <a href="/contact">
    <motion.button 
      type="button" 
      className="px-8 py-3.5 bg-gradient-to-r from-blue-600 to-blue-500 rounded-lg text-white font-medium shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 group"
      variants={buttonVariants}
    >
      Contact Us
      <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">→</span>
    </motion.button>
    </a>
    
    {/* <motion.button 
      type="button" 
      className="px-8 py-3.5 border-2 border-blue-500 rounded-lg text-blue-600 font-medium hover:bg-blue-50 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      variants={buttonVariants}
    >
      Request Proposal
    </motion.button> */}
  </motion.div>
</motion.div>

 {/* This closes your main section */}
    </motion.section>
  );
};

export default Home;