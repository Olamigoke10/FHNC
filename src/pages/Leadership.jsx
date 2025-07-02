import React from "react";
import LeadershipPng from "../assets/images/Leadership.png";

const Leadership = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-14">
        {/* Left Section - Image and Heading */}
        <div className="w-[40%]">
          <h1 className="font-bold mb-5 text-1xl md:text-2xl text-blue-700">
            Additional Specialized Training
          </h1>
          <div>
            <img
              src={LeadershipPng}
              alt="Leadership"
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="w-[60%]">
          <div className="flex items-start gap-4 my-10">
            {/* Blue Box */}
            <div className="w-4 h-4 rounded-full border border-blue-700"></div>

            {/* Title and Paragraph */}
            <div className="space-y-3">
              <h3 className="font-semibold text-base text-left">
                Defensive Driving Course
              </h3>
              <p className="text-sm text-left">
                Our defensive driving programme goes beyond basic skills to
                teach proactive accident prevention techniques. This course
                emphasises hazard recognition, proper vehicle control,
                environmental considerations, and psychological factors
                affecting driver performance. Participants leave with strategies
                to reduce risk and improve safety in any driving condition.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 my-10">
            {/* Blue Box */}
            <div className="w-4 h-4 rounded-full border border-blue-700 mt-1"></div>

            {/* Title and Paragraph */}
            <div className="space-y-3">
              <h3 className="font-semibold text-base text-left">
                Logbook and Compliance Training
              </h3>
              <p className="text-sm text-left">
                Understanding regulations is critical for professional drivers.
                This specialised course covers Hours of Service regulations,
                proper logbook documentation, electronic logging devices, and
                compliance requirements. We emphasise both legal obligations and
                practical applications to ensure drivers can maintain accurate
                records whilst maximising allowed driving time
              </p>
            </div>

            
          </div>
          <p className="text-sm ">
              All our specialised courses can be customised for individual needs
              or delivered as comprehensive packages for those seeking multiple
              certifications. Group bookings for communities and organisations
              are available with special rates
            </p>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
