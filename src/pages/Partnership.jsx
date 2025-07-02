import React from "react";
import { BuildingIcon, Globe, NotepadTextIcon } from "lucide-react";
import "../style/style.css";

const Partnership = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl md:text-2xl text-blue-900">Employer & Community Partnerships</h2>
      <p className="text-gray-700 text-sm md:text-base mt-7">
        FNHC is committed to building meaningful partnerships that create
        pathways to employment and strengthen economic participation for
        Indigenous communities across Alberta.
      </p>
      <div className="w-full flex flex-col md:flex-row items-center gap-10 mt-6">
        <div className="w-full md:w-1/3 shadow-md px-4 py-6 rounded-md">
          <svg width="256" height="64" viewBox="0 0 256 64">
            <polygon
              points="0,0 230,0 256,32 230,64 0,64"
              stroke="#FBCFE8"
              stroke-width="4"
              fill="none"
            />
            <foreignObject x="110" y="18" width="32" height="32">
              <div className="flex items-center justify-center h-full">
                <BuildingIcon className="w-8 h-8 text-gray-800" />
              </div>
            </foreignObject>
          </svg>
          <div className="mt-4">
            <h2 className="text-lg my-5 text-blue-900">Industry Connections</h2>
            <p className="text-sm text-gray-700">
              We maintain strong relationships with employers in construction,
              oil & gas, logistics, and transportation sectors. These
              connections ensure our training meets current industry
              requirements and often lead to direct employment opportunities for
              our graduates.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 shadow-md px-4 py-6 rounded-md">
          <svg width="256" height="64" viewBox="0 0 256 64">
            <polygon
              points="0,0 230,0 256,32 230,64 0,64"
              stroke="#0000FF"
              stroke-width="4"
              fill="none"
            />
            <foreignObject x="110" y="18" width="32" height="32">
              <div className="flex items-center justify-center h-full">
                <Globe className="w-8 h-8 text-gray-800" />
              </div>
            </foreignObject>
          </svg>
          <div className="mt-4">
            <h2 className="text-lg my-5 text-blue-900">Customised Corporate Training</h2>
            <p className="text-sm text-gray-700">
              For employers seeking to upskill existing workers or train new
              hires, we offer tailored programmes delivered at your location or
              ours. Our corporate packages can be adapted to address specific
              equipment types, operational contexts, or safety protocols
              relevant to your business.
            </p>
          </div>
        </div>

        <div className="w-full md:w-1/3 shadow-md px-4 py-6 rounded-md">
          <svg width="256" height="64" viewBox="0 0 256 64">
            <polygon
              points="0,0 230,0 256,32 230,64 0,64"
              stroke="#D8BFD8"
              stroke-width="4"
              fill="none"
            />
            <foreignObject x="110" y="18" width="32" height="32">
              <div className="flex items-center justify-center h-full">
                <NotepadTextIcon className="w-8 h-8 text-gray-800" />
              </div>
            </foreignObject>
          </svg>
          <div className="mt-4">
            <h2 className="text-lg my-5 text-blue-900">Community Scheduling</h2>
            <p className="text-sm text-gray-700">
              We work directly with First Nations communities, Métis
              settlements, and Indigenous organisations to coordinate training
              delivery that respects community calendars, cultural events, and
              local priorities. This collaborative approach ensures maximum
              participation and impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partnership;