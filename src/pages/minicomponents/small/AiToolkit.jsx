import React from "react";
import whoAI from "../../../assets/images/whoAi.png";
import {
  Check,
  Users,
  Briefcase,
  Globe,
  Target,
  HelpingHandIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { FcOrganization } from "react-icons/fc";
import { CgOrganisation } from "react-icons/cg";

const AiToolKit = () => {
  const Traning = [
    "Understand the social and environmental impacts of AI",
    "Explore how AI can (and cannot) support your mission and services",
    "Build confidence to procure, commission, or work with AI responsibly",
    "Make decisions that balance innovation with fairness, transparency, and compliance",
  ];

  const Learning = [
    "Build a clear understanding of how AI systems work and where risks can emerge.",
    "Explore the environmental impacts of AI, including energy use and sustainability concerns.",
    "Examine the social impacts of AI, from fairness and bias to accountability.",
    "Get an introduction to the evolving AI policy and governance landscape.",
  ];

  const targetAudience = [
    {
      icon: <HelpingHandIcon size={20} />,
      title: "Charities",
      description: "Executives and managers implementing AI strategies",
    },
    {
      icon: <FcOrganization size={20} />,
      title: "NGOs",
      description: "Those working in AI-affected industries",
    },
    {
      icon: <CgOrganisation size={20} />,
      title: "Organisations",
      description: "NGOs and non-profits addressing AI impacts",
    },
    {
      icon: <Target size={20} />,
      title: "Government Employees",
      description: "Policy makers and public service professionals",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
      {/* Header Section */}
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {/* <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Who is it For
          </span>
        </div> */}

        <motion.h2
          className="text-3xl md:text-4xl font-bold text-slate-800 mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          AI Ethics in Practice – Training & Toolkit
        </motion.h2>

        {/* <motion.p 
          className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          For charities, NGOs, public sector organisations, 
          and government employees who want to understand how Artificial Intelligence (AI) is shaping service delivery, 
          decision-making, and social outcomes.
        </motion.p> */}
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 mt-10">
        {/* Left Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="mb-8">
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Why take this training?
              </span>
            </div>

            <p className="text-slate-700 text-lg leading-relaxed mb-6">
              Are you a freelancer, industry professional, civil society leader,
              or government employee looking to understand and apply AI ethics
              in real-world contexts? Our AI Ethics in Practice workshop helps
              you navigate the ethical, social, and environmental impacts of
              artificial intelligence while equipping you with practical tools.
            </p>
          </div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Traning.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-all border border-blue-100"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check size={14} className="text-blue-600" />
                  </div>
                </div>
                <p className="text-slate-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
          <p className="mt-14 text-slate-600">
            This course is ideal for professionals who want to apply AI ethics in practice, 
            ensure responsible innovation, 
            and stay ahead in today’s rapidly changing AI environment.
          </p>
        </motion.div>

        {/* Right Content */}
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-br from-slate-50 to-blue-50/30 p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="inline-flex items-center gap-3 mb-6">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                What you will learn ?
              </span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {targetAudience.map((audience, index) => (
                <motion.div
                  key={index}
                  className="p-4 rounded-lg bg-white border border-slate-200 hover:border-blue-200 hover:shadow-sm transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                      <span className="text-blue-600">{audience.icon}</span>
                    </div>
                    <h3 className="font-semibold text-slate-800">
                      {audience.title}
                    </h3>
                  </div>
                  <p className="text-sm text-slate-600">
                    {audience.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-8 rounded-2xl overflow-hidden shadow-lg border border-slate-200"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <img
              src={whoAI}
              alt="AI professionals collaborating"
              className="w-full h-auto object-cover"
            />
          </motion.div>
        </motion.div>
      </div>

      <div className="mt-8">
        <motion.div>
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Learning Outcomes
            </span>
          </div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {Learning.map((item, i) => (
              <motion.div
                key={i}
                className="flex items-start p-4 rounded-xl bg-blue-50/50 hover:bg-blue-50 transition-all border border-blue-100"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="flex-shrink-0 mt-1 mr-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <Check size={14} className="text-blue-600" />
                  </div>
                </div>
                <p className="text-slate-700">{item}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AiToolKit;
