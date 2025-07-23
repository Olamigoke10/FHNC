import React from "react";
import { Truck, Car, Fan, ArrowRight, ChevronRight, Handshake, Globe, Image as Images, Recycle } from "lucide-react";
import LeadershipPng from "../assets/images/Leadership.png";
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
      icon: <Car size={40} className="text-blue-600" />,
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

  const trainingPrograms = [
    {
      title: "Defensive Driving Course",
      description: "Our defensive driving programme goes beyond basic skills to teach proactive accident prevention techniques. This course emphasises hazard recognition, proper vehicle control, environmental considerations, and psychological factors affecting driver performance.",
      highlight: "Reduces risk and improves safety in any condition"
    },
    {
      title: "Logbook and Compliance Training",
      description: "Understanding regulations is critical for professional drivers. This specialised course covers Hours of Service regulations, proper logbook documentation, electronic logging devices, and compliance requirements.",
      highlight: "Ensures legal compliance while maximizing efficiency"
    }
  ];

  const leadershipPrinciples = [
    {
      icon: <Handshake size={24} className="text-blue-600" />,
      title: "Relationship-Based Learning",
      description: "We build strong connections between instructors and students, recognising that trust and respect form the foundation of effective skills transfer.",
      position: "left"
    },
    {
      icon: <Globe size={24} className="text-blue-600" />,
      title: "Cultural Integration",
      description: "Our curriculum respectfully blends Indigenous knowledge with modern training techniques for a culturally relevant learning experience.",
      position: "left"
    },
    {
      icon: <Images size={24} className="text-blue-600" />,
      title: "Holistic Skills Development",
      description: "Beyond technical driving skills, we incorporate broader employment readiness, cultural awareness, and personal development.",
      position: "right"
    },
    {
      icon: <Recycle size={24} className="text-blue-600" />,
      title: "Environmental Stewardship",
      description: "Honouring traditional Indigenous connections to the land, we incorporate responsible environmental practices into all training programs.",
      position: "right"
    }
  ];

  return (
    <>
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

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Specialized Training Section */}
        <div className="flex flex-col lg:flex-row gap-12 mb-28">
          {/* Image Section */}
          <div className="lg:w-2/5">
            <div className="mb-8">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
                  Specialized Training
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
                Advanced <span className="text-blue-600">Certification</span> Programs
              </h2>
            </div>
            
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img
                src={LeadershipPng}
                alt="Leadership training"
                className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent"></div>
            </div>
          </div>

          {/* Training Programs */}
          <div className="lg:w-3/5 space-y-10">
            {trainingPrograms.map((program, index) => (
              <div 
                key={index}
                className="group relative pl-10 pr-8 py-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border-l-4 border-blue-600"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-blue-600 to-blue-400 rounded-l-md"></div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{program.title}</h3>
                <p className="text-gray-600 mb-4">{program.description}</p>
                <div className="flex items-center gap-2 text-blue-600 font-medium">
                  <span>{program.highlight}</span>
                  <ChevronRight size={18} className="transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}

            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
              <p className="text-gray-700">
                All our specialised courses can be customised for individual needs
                or delivered as comprehensive packages for those seeking multiple
                certifications. Group bookings for communities and organisations are
                available with special rates.
              </p>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Request Group Training Information
              </button>
            </div>
          </div>
        </div>

        {/* Leadership Approach Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
            <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
              Our Philosophy
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Indigenous <span className="text-blue-600">Leadership</span> Model
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            FNHC's leadership integrates traditional Indigenous values with modern training excellence,
            creating meaningful impact through:
          </p>
        </div>

        {/* Leadership Principles */}
        <div className="grid md:grid-cols-3 gap-12 items-center max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="space-y-10">
            {leadershipPrinciples.filter(p => p.position === "left").map((principle, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Center Donut */}
          <div className="relative w-64 h-64 mx-auto">
            <div className="absolute inset-0 rounded-full border-8 border-blue-100"></div>
            <div className="absolute inset-8 rounded-full border-8 border-blue-200 animate-spin-slow"></div>
            <div className="absolute inset-16 rounded-full bg-blue-50 flex items-center justify-center">
              <span className="text-blue-600 font-bold text-center px-4">
                Indigenous Leadership
              </span>
            </div>
            
            {/* Icons positioned around the donut */}
            {[0, 90, 180, 270].map((degree, i) => (
              <div 
                key={i}
                className="absolute w-12 h-12 bg-white rounded-full shadow-md flex items-center justify-center border border-blue-100"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%) translate(${Math.cos(degree * Math.PI / 180) * 100}px, ${Math.sin(degree * Math.PI / 180) * 100}px)`
                }}
              >
                {leadershipPrinciples[i].icon}
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {leadershipPrinciples.filter(p => p.position === "right").map((principle, index) => (
              <div key={index} className="group">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                    {principle.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{principle.title}</h3>
                    <p className="text-gray-600">{principle.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Programs;