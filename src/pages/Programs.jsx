import React from "react";
import { Truck, CarIcon, Fan, ArrowRight } from "lucide-react";

const Programs = () => {
  const programs = [
    {
      icon: <Truck size={40} className="text-blue-600" />,
      title: "Class 3 Driver Training",
      description: "Our intensive Class 3 programme prepares you to operate trucks with more than two axles, including dump trucks, garbage trucks, and small tow trucks. This 40-hour course covers vehicle inspections, basic manoeuvres, defensive driving techniques, and load securement.",
      duration: "40-hour course",
      highlight: "Includes full exam preparation"
    },
    {
      icon: <CarIcon size={40} className="text-blue-600" />,
      title: "Class 5 Driver Training",
      description: "Whether you're a new driver or looking to improve your skills, our Class 5 programme offers comprehensive training for standard passenger vehicles. Covers urban and highway driving, parking techniques, and hazard perception.",
      duration: "Flexible scheduling",
      highlight: "Beginner to advanced levels"
    },
    {
      icon: <Fan size={40} className="text-blue-600" />,
      title: "Air Brakes Certification",
      description: "This specialised one-day course provides essential training on air brake systems found in commercial vehicles. Learn about system components, maintenance, troubleshooting, and proper operation techniques.",
      duration: "1-day intensive",
      highlight: "Mandatory for many commercial licenses"
    }
  ];

  return (
    <section className="max-w-7xl px-4 sm:px-6 lg:px-8 py-16 mx-auto" id="programs">
      {/* Section Header */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Our Offerings
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Comprehensive <span className="text-blue-600">Training Programs</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At FNHC, we offer industry-leading driver training courses designed to meet 
          certification standards while accommodating diverse learning needs. Each program 
          combines hands-on practical instruction with essential theory.
        </p>
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {programs.map((program, index) => (
          <div 
            key={index}
            className="group relative bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-100"
          >
            <div className="p-6 space-y-4">
              {/* Icon with background */}
              <div className="w-16 h-16 rounded-lg bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                {program.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900">{program.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600">{program.description}</p>
              
              {/* Highlights */}
              <div className="space-y-2 pt-2">
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{program.duration}</span>
                </div>
                <div className="flex items-start gap-2">
                  <svg className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-700">{program.highlight}</span>
                </div>
              </div>
            </div>
            
            {/* Footer with CTA */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 group-hover:bg-blue-50 transition-colors">
              <a 
                href="#register" 
                className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors"
              >
                Learn more about this program
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white font-medium rounded-lg shadow-lg hover:shadow-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-300 transform hover:-translate-y-1">
          Compare All Programs
        </button>
        <p className="mt-4 text-gray-500">
          Need help choosing? Contact our advisors for personalized guidance.
        </p>
      </div>
    </section>
  );
};

export default Programs;