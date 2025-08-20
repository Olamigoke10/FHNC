import React from "react";
import { motion } from "framer-motion";
import ContactImg from "../assets/images/Contact.png";
import { Phone, Mail, MapPin, Clock, Calendar, Info, Handshake } from "lucide-react";

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

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

const ContactUs = () => {
  return (
    <motion.section 
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-16 mx-auto" 
      id="contact"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      {/* Header Section */}
      <motion.div className="text-center mb-16" variants={itemVariants}>
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Get In Touch
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Contact <span className="text-blue-600">Our Team</span> Today
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Ready to start your training journey or explore partnership opportunities? 
          Our team is here to guide you through the process.
        </p>
      </motion.div>

      <motion.div 
        className="flex flex-col lg:flex-row gap-12"
        variants={containerVariants}
      >
        {/* Left Column - Contact Info */}
        <motion.div className="lg:w-1/2 space-y-8" variants={itemVariants}>
          {/* Contact Cards */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
          >
            {/* General Enquiries */}
            <motion.div 
              className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4 p-6 pb-0">
                <div className="p-3 bg-blue-50 rounded-full">
                  <Info size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">General Enquiries</h3>
              </div>
              <div className="space-y-3 p-6 pt-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-500" />
                  <a href="tel:780-804-0718" className="text-gray-700 hover:text-blue-600 transition-colors">
                    780-804-0718
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-gray-500 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <a 
                      href="mailto:operations@firstnationcontracting.biz" 
                      className="text-gray-700 hover:text-blue-600 transition-colors break-words"
                      style={{ wordBreak: "break-all" }}
                    >
                      operations@firstnationcontracting.biz
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Partnerships */}
            <motion.div 
              className="bg-white rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all"
              variants={itemVariants}
            >
              <div className="flex items-center gap-3 mb-4 p-6 pb-0">
                <div className="p-3 bg-blue-50 rounded-full">
                  <Handshake size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Partnerships</h3>
              </div>
              <div className="space-y-3 p-6 pt-3">
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-gray-500" />
                  <a href="tel:780-804-0718" className="text-gray-700 hover:text-blue-600 transition-colors">
                    780-804-0718
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <Mail size={18} className="text-gray-500 mt-0.5" />
                  <div className="min-w-0 flex-1">
                    <a 
                      href="mailto:operations@firstnationcontracting.biz" 
                      className="text-gray-700 hover:text-blue-600 transition-colors break-words"
                      style={{ wordBreak: "break-all" }}
                    >
                      info@firstnationcontracting.biz
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Buttons */}
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 pt-4"
            variants={itemVariants}
          >
            <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all flex items-center justify-center gap-2">
              <Info size={18} />
              Request Information
            </button>
            <button className="px-6 py-3 border-2 border-blue-500 text-blue-600 font-medium rounded-lg hover:bg-blue-50 transition-colors flex items-center justify-center gap-2">
              <Calendar size={18} />
              View Course Calendar
            </button>
          </motion.div>

          {/* Image */}
          <motion.div className="pt-6" variants={itemVariants}>
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <motion.img
                src={ContactImg}
                alt="Contact our team"
                className="w-full h-auto object-cover"
                loading="lazy"
                initial={{ opacity: 0, scale: 1.05 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Column - Locations & Hours */}
        <motion.div className="lg:w-1/2 space-y-8" variants={itemVariants}>
          {/* Head Office */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Head Office</h3>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">Building 57, Alison Bay</p>
                <p className="text-gray-600">Fort Chipewyan, Top 101</p>
                <p className="text-gray-600">Canada</p>
              </div>
            </div>
            <motion.div 
              className="h-64 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214586.5026361585!2d-111.4962276!3d58.7170656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTjCsDQzJzAxLjQiTiAxMTHCsDI5JzQ2LjQiVw!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Head Office Location"
                className="rounded-b-xl"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Dispatch Office */}
          <motion.div 
            className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-lg transition-all"
            variants={itemVariants}
          >
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-blue-50 rounded-full">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">Dispatch Office</h3>
              </div>
              <div className="space-y-2 mb-4">
                <p className="text-gray-600">101-9908 Franklin Ave</p>
                <p className="text-gray-600">Fort McMurray, Alberta T9H 2K5</p>
                <p className="text-gray-600">Canada</p>
              </div>
              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-sm text-gray-600">
                  We offer mobile training services that can be delivered directly 
                  to communities throughout Alberta.
                </p>
              </div>
            </div>
            <motion.div 
              className="h-64 w-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d214586.5026361585!2d-111.4962276!3d58.7170656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53b7d60e3a5163c1%3A0x9700f8a6a7c4b1d8!2sFort%20McMurray%2C%20AB!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Dispatch Office Location"
                className="rounded-b-xl"
              ></iframe>
            </motion.div>
          </motion.div>

          {/* Hours */}
          <motion.div 
            className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg transition-all"
            variants={itemVariants}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-50 rounded-full">
                <Clock size={24} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Hours of Operation</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-600">Monday - Friday</span>
                <span className="text-gray-700 font-medium">8:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Saturday</span>
                <span className="text-gray-700 font-medium">9:00 AM - 4:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Sunday</span>
                <span className="text-gray-700 font-medium">Closed</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default ContactUs;