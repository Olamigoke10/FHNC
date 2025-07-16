import React from "react";
import AboutImg from "../assets/images/Aboutus.png";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24 bg-gray-50 rounded-3xl my-12" id="about">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
        {/* Image Column */}
        <div className="md:w-1/2 relative">
          <div className="relative before:absolute before:-inset-4 before:rounded-2xl before:bg-gradient-to-br before:from-blue-50 before:to-blue-100 before:opacity-70 before:-z-10">
            <img
              src={AboutImg}
              alt="About Us"
              className="w-full h-auto rounded-xl shadow-2xl object-cover transform transition-all duration-500 hover:scale-[1.02]"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-200 rounded-full opacity-20 -z-10"></div>
        </div>

        {/* Text Column */}
        <div className="md:w-1/2 space-y-8">
          {/* Section Header */}
          <div className="space-y-4">
            <div className="inline-flex items-center gap-3">
              <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
              <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                Our Story
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
              Indigenous-Led <span className="text-blue-600">Excellence</span> in Workforce Development
            </h2>
          </div>

          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-600 leading-relaxed">
              First Nation Horizon Contracting (FNHC) is a proud Indigenous-led
              training provider committed to workforce development across Alberta.
              Our mission is to bridge critical skills gaps while honouring
              Indigenous values and perspectives in everything we do.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Founded on principles of accessibility and excellence, we specialize in
                  comprehensive driver training programs that prepare participants
                  for rewarding careers in construction, oil & gas, logistics, and
                  transportation sectors.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  Our team combines extensive industry experience with cultural awareness, 
                  creating learning environments where all students can thrive.
                </p>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                </div>
                <p className="text-gray-600">
                  We understand the unique challenges faced by remote and Indigenous communities 
                  and have developed flexible delivery models that bring our expertise directly 
                  to the communities that need it most.
                </p>
              </div>
            </div>

            <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
              Learn More About Our Approach
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;