import React from "react";
import { Building2, Globe, ClipboardList, ArrowRight, CarIcon, CarFrontIcon } from "lucide-react";
import { FaCertificate } from "react-icons/fa";

const DriverTraining = () => {
  const partnerships = [
    {
      icon: <CarIcon size={32} className="text-blue-600" />,
      title: "Class 3 Driver Training",
      description: "Our intensive Class 3 programme prepares you to operate trucks with more than two axles, including dump trucks, garbage trucks, and small tow trucks. This 40-hour course covers vehicle inspections, basic manoeuvres, defensive driving techniques, and load securement, culminating in full preparation for your licensing exam.",
      color: "from-blue-100 to-blue-50",
      highlight: "Direct employment pathways"
    },
    {
      icon: <CarFrontIcon size={32} className="text-blue-600" />,
      title: "Class 5 Driver Training",
      description: "Whether you're a new driver or looking to improve your skills, our Class 5 programme offers comprehensive training for standard passenger vehicles. This foundation course includes urban and highway driving, parking techniques, hazard perception, and all elements required for basic driver certification in Albert.",
      color: "from-purple-100 to-purple-50",
      highlight: "Tailored to your business needs"
    },
    {
      icon: <FaCertificate size={32} className="text-blue-600" />,
      title: "Air Brakes Certification",
      description: "This specialised one-day course provides essential training on air brake systems found in commercial vehicles. You'll learn about system components, maintenance requirements, troubleshooting common issues, and proper operation techniques to ensure safe and efficient vehicle handling.",
      color: "from-indigo-100 to-indigo-50",
      highlight: "Culturally sensitive scheduling"
    }
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16" id="partnership">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Learn to Drive
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
           Driving<span className="text-blue-600"> Training</span> The Smarter Way
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At FNHC, we offer comprehensive driver training courses designed to meet industry standards whilst accommodating diverse learning needs. 
          Each programme combines hands-on practical instruction with essential theory, 
          delivered by experienced instructors who understand both the technical requirements and cultural contexts of our students.
        </p>
      </div>

      {/* Partnership Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {partnerships.map((partner, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
          >
            {/* Icon Header */}
            <div className={`bg-gradient-to-r ${partner.color} h-32 flex items-center justify-center`}>
              <div className="p-4 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform">
                {partner.icon}
              </div>
            </div>
            
            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-bold text-gray-900">{partner.title}</h3>
              <p className="text-gray-600">{partner.description}</p>
              
              {/* <div className="flex items-center gap-2 pt-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-blue-600">{partner.highlight}</span>
              </div> */}
            </div>
            
            {/* Footer */}
            <div className="px-6 pb-6">
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Register Here
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="">

      </div>
    </section>
  );
};

export default DriverTraining;