import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import RegisterPng from "../assets/images/Register.png";
import EmailJpg from "../assets/images/emailing.jpg";

const Register = () => {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_hbq68nn",     
        "template_ghlnmlh",    
        form.current,
        "J29WGi3B88Ti_SbyW"      
      )
      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setStatus("✅ Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          setStatus("❌ Failed to send message. Try again.");
        }
      );
  };

  return (
    <section className="max-w-7xl px-4 py-6 my-10 mx-auto" id="register">
      <h2 className="mb-16 sm:text-xl md:text-2xl font-semibold text-blue-900">
        Digital Registration and Course Management
      </h2>

      <div className="flex flex-col md:flex-row gap-32" data-aos="fade-down">
        {/* Left Content */}
        <div className="space-y-6 md:w-1/2">
          <div>
            <h3 className="sm:text-lg md:text-xl font-semibold text-blue-800">
              Streamlined Registration Process
            </h3>
            <p className="text-gray-700">
              Our new online portal makes accessing training simpler than ever
              before. The intuitive registration system guides you through each step.
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
                Receive notifications when new sessions are added near your community
              </li>
              <li>Request custom training dates for group bookings</li>
              <li>Sync course schedules with your personal calendar</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Email Form */}
      <div className="mt-16 flex md:flex-row flex-col gap-10" data-aos="fade-up">
        <div className="md:w-1/2 w-full">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="max-w-md p-6 space-y-4 bg-white w-full"
          >
            <h3 className="text-xl font-semibold text-blue-700">Contact Us</h3>

            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                name="from_name"
                required
                placeholder="Enter Your name..."
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="reply_to"
                required
                placeholder="Enter Your email...."
                className="w-full px-4 py-2 border border-gray-300 rounded"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                name="message"
                rows="5"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded"
              ></textarea>
            </div>

            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Send
            </button>

            {status && (
              <p className="mt-2 text-sm font-medium text-gray-600">{status}</p>
            )}
          </form>
        </div>

        <div className="md:w-1/2 w-full">
          <img
            src={EmailJpg}
            alt="Email Illustration"
            className="rounded-lg w-full md:max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default Register;
