import React from "react";
import AboutImg from "../assets/images/Aboutus.png";

const About = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 mt-11" id="about">
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Text Column */}
        <div className="md:w-1/2">
          {/* Line + Heading */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-4 bg-blue-600 rounded-lg"></div>
            <h1 className="text-2xl md:text-4xl text-blue-700">Who We Are</h1>
          </div>

          <p className="text-gray-700 leading-relaxed sm:text-sm md:text-base">
            First Nation Horizon Contracting (FNHC) is a proud Indigenous-led
            training provider committed to workforce development across Alberta.
            Our mission is to bridge critical skills gaps whilst honouring
            Indigenous values and perspectives in everything we do. Founded on
            principles of accessibility and excellence, we specialise in
            comprehensive driver training programmes that prepare participants
            for rewarding careers in construction, oil & gas, logistics, and
            transportation sectors. Our team combines extensive industry
            experience with cultural awareness, creating learning environments
            where all students can thrive. We understand the unique challenges
            faced by remote and Indigenous communities in accessing quality
            training. That's why we've developed flexible delivery models that
            bring our expertise directly to the communities that need it most,
            whilst maintaining the highest standards of instruction and
            certification.
          </p>
        </div>

        {/* Image Column */}
        <div className="md:w-1/2">
          <img
            src={AboutImg}
            alt="About Us"
            className="w-full h-auto rounded-md shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
