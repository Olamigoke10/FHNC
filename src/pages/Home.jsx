import React from "react";
import homepage from "../assets/images/Homepage.png";

const Home = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10" id="home">
      <div className="flex flex-col-reverse md:flex-row items-center gap-10" data-aos="fade-up">

        {/* Text content */}
        <div className="md:w-1/2 text-center md:text-left space-y-4" data-aos="fade-left">
          <h3 className="text-2xl md:text-4xl font-bold text-blue-900">
            Indigenous-Led Driver Training Excellence in Alberta
          </h3>
          <p className="text-gray-600 leading-relaxed">
            First Nation Horizon Contracting: Empowering communities through
            expert driver training programs tailored for Indigenous and
            non-Indigenous learners across Alberta.
          </p>

          <div className="flex flex-col md:flex-row gap-3 fade-right">
            <button type="button" className="bg-blue-600 p-3 rounded-md text-white shadow-md hover:bg-blue-700 transition">
              Enrol Now!
            </button>
            <button type="button" className="p-3 border border-blue-400 rounded-md text-blue-500 hover:bg-blue-50 transition">
              Explore Our Courses
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img src={homepage} alt="Driver training" className="w-full h-auto drop-shadow-xl" />
        </div>
      </div>
    </section>
  );
};

export default Home;
