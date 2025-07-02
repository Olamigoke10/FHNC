import React from "react";
import { Truck, CarIcon, Fan } from "lucide-react";

const Programs = () => {
  return (
    <section className="max-w-7xl px-4 py-10 mx-auto" id="programs">
      <div>
        <h2 className="text-2xl md:text-4xl text-blue-700 mb-5">
          Our Traning Programmes
        </h2>
        <p className="text-gray-700">
          At FNHC, we offer comprehensive driver training courses designed to
          meet industry standards whilst accommodating diverse learning needs.
          Each programme combines hands-on practical instruction with essential
          theory, delivered by experienced instructors who understand both the
          technical requirements and cultural contexts of our students.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-200 mt-14">
        <div className="w-full space-y-3 shadow-md hover:shadow-lg transition-all duration-300 rounded-md px-5 py-6 bg-white">
          <div className="">
            <Truck size={50} className="text-blue-700" />
          </div>
          <h1 className="font-bold">Class 3 Driver Training</h1>
          <p className="text-gray-700">
            Our intensive Class 3 programme prepares you to operate trucks with
            more than two axles, including dump trucks, garbage trucks, and
            small tow trucks. This 40-hour course covers vehicle inspections,
            basic manoeuvres, defensive driving techniques, and load securement,
            culminating in full preparation for your licensing exam.
          </p>
        </div>

        <div className="w-full space-y-3 shadow-md hover:shadow-lg transition-all duration-300 rounded-md px-5 py-6 bg-white">
          <div className="">
            <CarIcon size={50} className="text-blue-700" />
          </div>
          <h1 className="font-bold">Class 5 Driver Training</h1>
          <p className="text-gray-700">
            Whether you're a new driver or looking to improve your skills, our
            Class 5 programme offers comprehensive training for standard
            passenger vehicles. This foundation course includes urban and
            highway driving, parking techniques, hazard perception, and all
            elements required for basic driver certification in Albert.
          </p>
        </div>

        <div className="w-full space-y-3 shadow-md hover:shadow-lg transition-all duration-300 rounded-md px-5 py-6 bg-white">
          <div className="">
            <Fan size={50} className="text-blue-700" />
          </div>
          <h1 className="font-bold">Air Brakes Certification</h1>
          <p className="text-gray-700">
            This specialised one-day course provides essential training on air
            brake systems found in commercial vehicles. You'll learn about
            system components, maintenance requirements, troubleshooting common
            issues, and proper operation techniques to ensure safe and efficient
            vehicle handling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Programs;
