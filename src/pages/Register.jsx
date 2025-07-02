import React from "react";
import RegisterPng from "../assets/images/Register.png";

const Register = () => {
  return (
    <section className="max-w-7xl px-4 py-6 my-20 mx-auto">
      <h2 className="mb-16 sm:text-xl md:text-2xl font-semibold text-blue-900">
        Digital Registration and Course Management
      </h2>

      <div className="flex flex-col md:flex-row gap-32">
        {/* Left Content */}
        <div className="space-y-6 md:w-1/2">
          <div>
            <h3 className="sm:text-lg md:text-xl font-semibold text-blue-800">
              Streamlined Registration Process
            </h3>
            <p className="text-gray-700">
              Our new online portal makes accessing training simpler than ever
              before. The intuitive registration system guides you through each
              step.
            </p>
          </div>

          {/* Steps */}
          <div className="flex gap-3 ml-4">
            <div className="w-3 h-14 border border-blue-700 rounded-xl"></div>
            <div className="space-y-1">
              <h4 className="font-medium">Course Selection</h4>
              <p className="text-gray-700 text-sm">
                Browse our complete catalogue of training programmes with detailed
                descriptions, prerequisites, and certification outcomes.
              </p>
            </div>
          </div>

          <div className="flex gap-3 ml-6">
            <div className="w-3 h-14 border border-blue-500 rounded-xl"></div>
            <div className="space-y-1">
              <h4 className="font-medium">Eligibility Check</h4>
              <p className="text-gray-700 text-sm">
                Complete a quick assessment to confirm you meet the requirements
                including licence status and experience.
              </p>
            </div>
          </div>

          <div className="flex gap-3 ml-8">
            <div className="w-3 h-14 border border-violet-400 rounded-xl"></div>
            <div className="space-y-1">
              <h4 className="font-medium">Document Upload</h4>
              <p className="text-gray-700 text-sm">
                Securely submit identification, licences, and any prerequisite
                certifications.
              </p>
            </div>
          </div>

          <div className="flex gap-3 ml-12">
            <div className="w-3 h-14 border border-red-500 rounded-xl"></div>
            <div className="space-y-1">
              <h4 className="font-medium">Payment Option</h4>
              <p className="text-gray-700 text-sm">
                Choose from multiple methods including Indigenous funding support.
              </p>
            </div>
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-1/2 space-y-6">
          <img
            src={RegisterPng}
            alt="Registration"
            className="rounded-md shadow-md w-full md:max-w-sm"
          />
          <div>
            <h3 className="font-semibold text-blue-800">Calendar Integration</h3>
            <p className="text-gray-700 text-sm mb-3">
              Our interactive scheduling system displays real-time availability for
              all courses across multiple locations. You can:
            </p>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
              <li>Filter courses by location, date, and programme type</li>
              <li>
                Receive notifications when new sessions are added near your
                community
              </li>
              <li>Request custom training dates for group bookings</li>
              <li>Sync course schedules with your personal calendar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
