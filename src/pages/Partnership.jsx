import React from "react";
import { Building2, Globe, ClipboardList, ArrowRight } from "lucide-react";

const Partnership = () => {
  const partnerships = [
    {
      icon: <Building2 size={32} className="text-blue-600" />,
      title: "Industry Connections",
      description: "We maintain strong relationships with employers in construction, oil & gas, logistics, and transportation sectors. These connections ensure our training meets current industry requirements and often lead to direct employment opportunities for our graduates.",
      color: "from-blue-100 to-blue-50",
      highlight: "Direct employment pathways"
    },
    {
      icon: <Globe size={32} className="text-blue-600" />,
      title: "Customised Corporate Training",
      description: "For employers seeking to upskill existing workers or train new hires, we offer tailored programmes delivered at your location or ours. Our corporate packages can be adapted to address specific equipment types or operational contexts.",
      color: "from-purple-100 to-purple-50",
      highlight: "Tailored to your business needs"
    },
    {
      icon: <ClipboardList size={32} className="text-blue-600" />,
      title: "Community Scheduling",
      description: "We work directly with First Nations communities, Métis settlements, and Indigenous organisations to coordinate training delivery that respects community calendars, cultural events, and local priorities.",
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
            Collaborative Approach
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Employer & <span className="text-blue-600">Community</span> Partnerships
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          FNHC builds meaningful partnerships that create pathways to employment and strengthen economic participation for Indigenous communities across Alberta.
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
              
              <div className="flex items-center gap-2 pt-2">
                <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-sm font-medium text-blue-600">{partner.highlight}</span>
              </div>
            </div>
            
            {/* Footer */}
            <div className="px-6 pb-6">
              <a 
                href="#contact" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors"
              >
                Learn about partnership opportunities
                <ArrowRight size={18} className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Section */}
      <div className="mt-16 text-center">
        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 sm:p-10 inline-block max-w-4xl">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to partner with us?</h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Whether you're an employer looking for skilled drivers or a community seeking training solutions, we'd love to discuss how we can work together.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
            Contact Our Partnership Team
          </button>
        </div>
      </div>
    </section>
  );
};

export default Partnership;