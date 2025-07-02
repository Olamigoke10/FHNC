import React from 'react';
import { BuildingIcon, Globe, NotepadTextIcon } from 'lucide-react';
import '../style/style.css';

const Partnership = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-6">
      <h2 className="text-xl md:text-2xl">Employer & Community Partnerships</h2>
      <p className="text-gray-700 text-sm md:text-base mt-7">
        FNHC is committed to building meaningful partnerships that create pathways to employment and strengthen economic participation for Indigenous 
        communities across Alberta.
      </p>
      <div className="w-full flex items-center gap-20 mt-6">
        <div className='w-1/3'>
        <svg width="300" height="64" viewBox="0 0 256 64">
          <polygon points="0,0 230,0 256,32 230,64 0,64" stroke="#FBCFE8" stroke-width="4" fill="none" />
          <foreignObject x="110" y="18" width="32" height="32">
            <div className="flex items-center justify-center h-full">
              <BuildingIcon className="w-8 h-8 text-gray-800" />
            </div>
          </foreignObject>
        </svg>
        </div>

        <div className='w-1/3'>
        <svg width="300" height="64" viewBox="0 0 256 64">
          <polygon points="0,0 230,0 256,32 230,64 0,64" stroke="#0000FF" stroke-width="4" fill="none" />
          <foreignObject x="110" y="18" width="32" height="32">
            <div className="flex items-center justify-center h-full">
              <Globe className="w-8 h-8 text-gray-800" />
            </div>
          </foreignObject>
        </svg>
        </div>
        <div className='w-1/3'>
        <svg width="300" height="64" viewBox="0 0 256 64">
          <polygon points="0,0 230,0 256,32 230,64 0,64" stroke="#D8BFD8" stroke-width="4" fill="none" />
          <foreignObject x="110" y="18" width="32" height="32">
            <div className="flex items-center justify-center h-full">
              <NotepadTextIcon className="w-8 h-8 text-gray-800" />
            </div>
          </foreignObject>
        </svg>
        </div>
      </div>
    </section>
  );
};

export default Partnership;