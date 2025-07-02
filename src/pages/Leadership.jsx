import React from "react";
import LeadershipPng from "../assets/images/Leadership.png";
import { Handshake, Globe, Images, Recycle } from "lucide-react";

const Leadership = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <div className="flex flex-col md:flex-row gap-14 ">
        {/* Left Section - Image and Heading */}
        <div className="md:w-[40%]">
          <h1 className="font-bold mb-5 text-1xl md:text-2xl text-blue-700">
            Additional Specialized Training
          </h1>
          <div className="w-full">
            <img
              src={LeadershipPng}
              alt="Leadership"
              className="rounded-md shadow-md"
            />
          </div>
        </div>

        {/* Right Section - Text Content */}
        <div className="md:w-[60%]">
          <div className="flex items-start gap-4 my-10">
            {/* Blue Box */}
            <div className="w-4 h-4 rounded-full border border-blue-700"></div>

            {/* Title and Paragraph */}
            <div className="space-y-3">
              <h3 className="font-semibold text-base text-left">
                Defensive Driving Course
              </h3>
              <p className="sm:text-sm md:text-base text-left">
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
              <p className="sm:text-sm md:text-base text-left">
                Understanding regulations is critical for professional drivers.
                This specialised course covers Hours of Service regulations,
                proper logbook documentation, electronic logging devices, and
                compliance requirements. We emphasise both legal obligations and
                practical applications to ensure drivers can maintain accurate
                records whilst maximising allowed driving time
              </p>
            </div>
          </div>
          <p className="sm:text-sm md:text-base ">
            All our specialised courses can be customised for individual needs
            or delivered as comprehensive packages for those seeking multiple
            certifications. Group bookings for communities and organisations are
            available with special rates
          </p>
        </div>
      </div>

      <h2 className="text-1xl md:text-2xl font-bold  text-blue-900 mb-4 mt-28">
        Our Indigenous Leadership Approach
      </h2>
      <p className="max-w-3xl mb-10 text-gray-700">
        FNHC's leadership model integrates traditional Indigenous values with
        modern training excellence. Our approach emphasises:
      </p>

      <div className="grid md:grid-cols-3 gap-10 items-center max-w-6xl mx-auto">
        {/* Left Text */}
        <div className="space-y-6 text-sm text-blue-900">
          <div>
            <h3 className="font-semibold text-base mb-1 md:text-right sm:text-left">
              Relationship-Based Learning
            </h3>
            <p className="md:text-right sm:text-left">
              We build strong connections between instructors and students,
              recognising that trust and respect form the foundation of
              effective skills transfer...
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-1 md:text-right sm:text-left">
              Environmental Stewardship
            </h3>
            <p className="text-right sm:text-left">
              Honouring traditional Indigenous connections to the land, we
              incorporate responsible environmental practices...
            </p>
          </div>
        </div>

        {/* Donut with Icons */}
        <div className="relative w-[250px] h-[250px] mx-auto">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            {/* Top-Left */}
            <path
              d="M100,100 L0,100 A100,100 0 0,1 100,0 Z 
     M100,100 L45,100 A55,55 0 0,0 100,45 Z"
              fill="#f1f5ff"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Top-Right */}
            <path
              d="M100,100 L100,0 A100,100 0 0,1 200,100 Z 
     M100,100 L100,45 A55,55 0 0,0 155,100 Z"
              fill="#f1f5ff"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Bottom-Left */}
            <path
              d="M100,100 L0,100 A100,100 0 0,0 100,200 Z 
     M100,100 L45,100 A55,55 0 0,1 100,155 Z"
              fill="#f1f5ff"
              stroke="#3b82f6"
              strokeWidth="2"
            />

            {/* Bottom-Right */}
            <path
              d="M100,100 L200,100 A100,100 0 0,1 100,200 Z 
     M100,100 L155,100 A55,55 0 0,0 100,155 Z"
              fill="#f1f5ff"
              stroke="#ec4899"
              strokeWidth="2"
            />

            {/* ICONS */}
            <foreignObject x="35" y="35" width="30" height="30">
              <div className="w-full h-full flex items-center justify-center text-xl text-blue-700">
                <Handshake />
              </div>
            </foreignObject>

            <foreignObject x="135" y="35" width="30" height="30">
              <div className="w-full h-full flex items-center justify-center text-xl text-blue-700">
                <Globe />
              </div>
            </foreignObject>

            <foreignObject x="35" y="135" width="30" height="30">
              <div className="w-full h-full flex items-center justify-center text-xl text-blue-700">
                <Images />
              </div>
            </foreignObject>

            <foreignObject x="135" y="135" width="30" height="30">
              <div className="w-full h-full flex items-center justify-center text-xl text-blue-700">
                <Recycle />
              </div>
            </foreignObject>
          </svg>
        </div>

        {/* Right Text */}
        <div className="space-y-6 text-sm text-blue-900">
          <div>
            <h3 className="font-semibold text-base mb-1">
              Holistic Skills Development
            </h3>
            <p>
              Beyond technical driving skills, we incorporate broader employment
              readiness, cultural awareness...
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-base mb-1">Community Impact</h3>
            <p>
              We measure success not just by certification rates but by
              meaningful employment outcomes...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leadership;
