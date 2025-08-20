import React from "react";
import { motion } from "framer-motion";
import { FaBrain, FaShieldAlt, FaUserTie, FaChartLine, FaArrowRight } from "react-icons/fa";

// Animation variants for the AI Ethics Preview section
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

const cardHoverVariants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.03,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const arrowVariants = {
  rest: { x: 0 },
  hover: { x: 5 }
};

const AiEthicsPreview = () => {
  return (
    <motion.section 
      className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-purple-600 to-purple-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-purple-600 uppercase">
            Emerging Technology
          </span>
        </div>

        <motion.h2 
          className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6"
          variants={textVariants}
        >
          Leading the Way in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">Responsible AI Innovation</span>
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-600 max-w-3xl mx-auto mb-10"
          variants={textVariants}
        >
          Discover our specialized AI Ethics and Governance training programs designed for businesses, 
          educators, and technology professionals navigating the new landscape of artificial intelligence.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
        {[
          {
            icon: <FaBrain className="text-purple-600 text-3xl" />,
            title: "Ethical Frameworks",
            description: "Practical approaches to responsible AI implementation"
          },
          {
            icon: <FaShieldAlt className="text-purple-600 text-3xl" />,
            title: "Governance",
            description: "Best practices for AI oversight and accountability"
          },
          {
            icon: <FaUserTie className="text-purple-600 text-3xl" />,
            title: "Leadership Training",
            description: "AI ethics education for decision-makers"
          },
          {
            icon: <FaChartLine className="text-purple-600 text-3xl" />,
            title: "Compliance",
            description: "Navigating regulatory requirements for AI systems"
          }
        ].map((item, index) => (
          <motion.div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition-shadow"
            variants={cardVariants}
            whileHover="hover"
            initial="rest"
          >
            <div className="flex justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </motion.div>
        ))}
      </div>

      <motion.div 
        className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl p-8 md:p-12"
        variants={textVariants}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to implement responsible AI practices?</h3>
            <p className="text-gray-700 mb-6">
              Our AI Ethics and Governance program provides comprehensive training for organizations 
              seeking to harness AI's potential while maintaining ethical standards and regulatory compliance.
            </p>
            <ul className="space-y-2 mb-6">
              {[
                "Customized training for your industry",
                "Practical frameworks you can implement immediately",
                "Expert instruction from AI ethics professionals",
                "Ongoing support and consultation"
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <svg className="w-5 h-5 text-purple-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
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
            <motion.a
              href="/AiEthics"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg text-white font-medium shadow-lg hover:shadow-xl transition-all group"
              variants={cardHoverVariants}
            >
              Explore AI Ethics
              <motion.span variants={arrowVariants}>
                <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </motion.span>
            </motion.a>
            <p className="text-sm text-gray-600 mt-4">
              Or <a href="/contact" className="text-purple-600 hover:underline">contact us</a> for a customized program
            </p>
          </motion.div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default AiEthicsPreview;