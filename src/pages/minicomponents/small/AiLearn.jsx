import { Barcode, Book, Cloud, Cylinder, Edit, File } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide';
import { MdFoundation } from 'react-icons/md';
import { GiCycle } from 'react-icons/gi';
import { BiAnalyse } from 'react-icons/bi';

const AiLearn = () => {
  const items = [
    { icon: <MdFoundation size={24} />, color: 'blue', label: 'Foundations of Ethical AI' },
    { icon: <GiCycle size={24} />, color: 'purple', label: <>
      Governance <br />
      & Lifecycle Management
    </> },
    { icon: <BiAnalyse size={24} />, color: 'red', label: <>
    Bias, Fairness <br /> & Explainability
    </> 
},
    { icon: <Cloud size={24} />, color: 'indigo', label: <>
    Risk Assessment <br /> & Monitoring
    </> },
    { icon: <Edit size={24} />, color: 'orange', label: 'Regulation & Compliance' },
    { icon: <Barcode size={24} />, color: 'green', label: <>
    Policy Design <br /> & Stakeholder Engagement
    </> },
  ];

  const gradientMapping = {
    blue: "linear-gradient(hsl(223, 90%, 50%), hsl(208, 90%, 50%))",
    purple: "linear-gradient(hsl(283, 90%, 50%), hsl(268, 90%, 50%))",
    red: "linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))",
    indigo: "linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))",
    orange: "linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))",
    green: "linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))",
  };

  const GlassIcons = ({ items, className = "", style = {} }) => {
    const getBackgroundStyle = (color) => {
      if (gradientMapping[color]) {
        return { background: gradientMapping[color] };
      }
      return { background: color };
    };

    return (
      <div
        className={`grid gap-14 md:gap-20 grid-cols-2 md:grid-cols-3 mx-auto py-8 overflow-visible ${className}`}
        style={style}
      >
        {items.map((item, index) => (
          <motion.button
            key={index}
            type="button"
            aria-label={item.label}
            className="relative bg-transparent outline-none w-20 h-20 md:w-24 md:h-24 [perspective:24em] [transform-style:preserve-3d] [-webkit-tap-highlight-color:transparent] group"
            whileHover={{ y: -5 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true, margin: "-20px" }}
          >
            <span
              className="absolute top-0 left-0 w-full h-full rounded-xl block transition-all duration-300 ease-out origin-[100%_100%] rotate-[15deg] group-hover:[transform:rotate(25deg)_translate3d(-0.5em,-0.5em,0.5em)]"
              style={{
                ...getBackgroundStyle(item.color),
                boxShadow: "0.5em -0.5em 0.75em hsla(223, 10%, 10%, 0.15)",
              }}
            ></span>

            <span
              className="absolute top-0 left-0 w-full h-full rounded-xl bg-white/15 transition-all duration-300 ease-out origin-[80%_50%] flex backdrop-blur-md [-webkit-backdrop-filter:blur(12px)] transform group-hover:[transform:translateZ(2em)] border border-white/30"
            >
              <span className="m-auto w-8 h-8 flex items-center justify-center text-white" aria-hidden="true">
                {item.icon}
              </span>
            </span>

            <span className="absolute top-24 text-xs py-1">
              {item.label}
            </span>
          </motion.button>
        ))}
      </div>
    );
  };

  return (
    <section className="py-16 md:py-24  from-slate-50 to-blue-50/30">

        <div className="inline-flex items-center justify-center gap-3 mb-4 ">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Course Breakdown
          </span>
        </div>

      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 text-slate-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Explore Our AI Traning courses
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Discover our comprehensive collection of AI learning materials across various domains and applications.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className='mx-auto space-y-10'
        >
          <GlassIcons 
            items={items} 
            className="custom-glass-icons"
            style={{
                 maxWidth: '800px',
             }}
          />
        </motion.div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* <button className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg">
            <p>Register  <span><ArrowRight /></span></p>
          </button> */}
        </motion.div>
      </div>
    </section>
  );
};

export default AiLearn;