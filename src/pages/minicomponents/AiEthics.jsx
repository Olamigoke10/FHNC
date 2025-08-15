import React from "react";
import AiEthicsImg from "../../assets/images/Leadership.png";
import { motion } from "framer-motion";


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

const AiEthics = () => {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div className="flex flex-col-re md:flex-row">

        <div className="flex flex-col-reverse md:flex-row gap-10">
          <div className="md:w-1/2 rounded-md">
            <img src={AiEthicsImg} alt="" srcset="" className="rounded-md" />
          </div>

          <div className="md:w-1/2">
            <div className="inline-flex items-center justify-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Ai Ethics and Governance
              </span>
            </div>

            <div>
              <p className="text-slate-500">
                In an era of rapid AI adoption, responsible and ethical AI use
                is critical. Our specialized AI ethics and governance courses
                are designed for business leaders, employees, data scientists,
                compliance officers, teachers, and AI professionals. Learn how
                to build, evaluate, and manage AI systems that are transparent,
                explainable, and compliant with global standards.
              </p>

                <div className="my-5 text-slate-500 text-sm">
              <motion.div 
              className="flex items-center"
              variants={textVariants}
            >
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Practical AI ethics frameworks and governance best practices
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={textVariants}
            >
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Hands-on workshops for designing explainable AI workflows
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={textVariants}
            >
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Strategies to ensure AI transparency and accountability
            </motion.div>
            <motion.div 
              className="flex items-center"
              variants={textVariants}
            >
              <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Tailored sessions for diverse roles and industries
            </motion.div>
            

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiEthics;
