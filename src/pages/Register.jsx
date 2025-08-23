import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import RegisterPng from "../assets/images/Register.png";
import EmailJpg from "../assets/images/emailing.jpg";
import { CheckCircle, Calendar, Upload, CreditCard } from "lucide-react";

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

  const registrationSteps = [
    {
      icon: <CheckCircle size={20} className="text-blue-600" />,
      title: "Course Selection",
      description:
        "Browse our complete catalogue of training programmes with detailed descriptions, prerequisites, and certification outcomes.",
      color: "border-blue-600",
    },
    {
      icon: <CheckCircle size={20} className="text-blue-500" />,
      title: "Eligibility Check",
      description:
        "Complete a quick assessment to confirm you meet the requirements including licence status and experience.",
      color: "border-blue-500",
    },
    // {
    //   icon: <Upload size={20} className="text-indigo-500" />,
    //   title: "Document Upload",
    //   description:
    //     "Securely submit identification, licences, and any prerequisite certifications.",
    //   color: "border-indigo-400",
    // },
    // {
    //   icon: <CreditCard size={20} className="text-red-500" />,
    //   title: "Payment Option",
    //   description:
    //     "Choose from multiple methods including Indigenous funding support.",
    //   color: "border-red-500",
    // },
  ];

  return (
    <section
      className="max-w-7xl px-4 sm:px-6 lg:px-8 py-16 mx-auto"
      id="register"
    >
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center gap-3 mb-4">
          <div className="w-2 h-8 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
          <span className="text-sm font-semibold tracking-wider text-blue-600 uppercase">
            Get Started
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Digital <span className="text-blue-600">Registration</span> and Course
          Management
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Our intuitive online system makes accessing training simpler than ever
          before.
        </p>
      </div>

      {/* Registration Process */}
      <div className="flex flex-col lg:flex-row gap-12 mb-24">
        {/* Left Content - Steps */}
        <div className="lg:w-1/2 space-y-8">
          <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <h3 className="text-xl font-bold text-blue-800 mb-4">
              Streamlined Registration Process
            </h3>
            <p className="text-gray-600">
              Our new online portal guides you through each step with clear
              instructions and immediate feedback on your progress.
            </p>
          </div>

          <div className="space-y-6">
            {registrationSteps.map((step, index) => (
              <div key={index} className="flex gap-4 group">
                <div
                  className={`flex-shrink-0 w-12 h-12 rounded-full border-2 ${step.color} flex items-center justify-center group-hover:bg-blue-50 transition-colors`}
                >
                  {step.icon}
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900">
                    {step.title}
                  </h4>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content - Image and Calendar */}
        <div className="lg:w-1/2 space-y-8">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={RegisterPng}
              alt="Registration process"
              className="w-full h-auto object-cover transform transition duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
          </div>

          {/* <div className="bg-white rounded-xl shadow-md p-6 border border-gray-100">
            <div className="flex items-center gap-3 mb-4">
              <Calendar size={24} className="text-blue-600" />
              <h3 className="text-xl font-bold text-blue-800">
                Calendar Integration
              </h3>
            </div>
            <p className="text-gray-600 mb-4">
              Our interactive scheduling system displays real-time availability
              for all courses.
            </p>
            <ul className="space-y-3">
              {[
                "Filter courses by location, date, and programme type",
                "Receive notifications when new sessions are added",
                "Request custom training dates for group bookings",
                "Sync course schedules with your personal calendar",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-600">{item}</span>
                </li>
              ))}
            </ul>
          </div> */}

        </div>
      </div>

      {/* Contact Form Section */}
      <div className="flex flex-col lg:flex-row gap-12 items-center">
        {/* Form */}
        <div className="lg:w-1/2 w-full">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
            <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-6">
              <h3 className="text-xl font-bold text-white">Contact Our Team</h3>
              <p className="text-blue-100">
                Have questions? We're here to help.
              </p>
            </div>
            <form ref={form} onSubmit={sendEmail} className="p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="from_name"
                  required
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="reply_to"
                  required
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  placeholder="How can we help you?"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300"
              >
                Send Message
              </button>

              {status && (
                <div
                  className={`mt-4 p-3 rounded-lg text-sm font-medium text-center ${
                    status.includes("success")
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {status}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Image */}
        <div className="lg:w-1/2 w-full">
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <img
              src={EmailJpg}
              alt="Contact our team"
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent flex items-end p-8">
              <div className="text-white">
                <h3 className="text-xl font-bold mb-2">
                  Need Immediate Assistance?
                </h3>
                <p className="text-blue-100">
                  Call our support team at <a href="">780-804-0718</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
