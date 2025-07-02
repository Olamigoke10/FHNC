import React from 'react';
import ContactImg from '../assets/images/Contact.png';

const ContactUs = () => {
  return (
        <section className='max-w-7xl py-5 px-5 mx-auto' id='contact'>
        <h2 className='text-blue-900 text-xl md:text-2xl mb-10'>Contact us Today</h2>

        <div className='w-full flex flex-col-reverse md:flex-row gap-5'>
            <div className='w-1/2 space-y-5'>
            <p className='text-sm text-gray-700'>
                Ready to start your training journey or explore partnership 
opportunities with First Nation Horizon Contracting? Our team is here 
to answer your questions and guide you through the process.
            </p>

            <div className='space-y-3'>
                <h2 className='text-blue-900 text-lg'>General Enquires</h2>
                <p className='text-sm text-gray-900'>Telephone: +1 (780) 555-1234</p>
                <p className='text-sm text-gray-900'>Email: training@fnhcontracting.ca</p>
            </div>

            <div className='space-y-3'>
                <h2 className='text-blue-900 text-lg'>Corporate & Community Partnerships</h2>
                <p className='text-sm text-gray-900'>Telephone: +1 (780) 555-9012</p>
                <p className='text-sm text-gray-900'>Email: partnerships@fnhcontracting.ca</p>
            </div>
            
            <div className="flex flex-col md:flex-row gap-3">
            <button type="button" className="bg-blue-600 p-3 rounded-md text-white shadow-md hover:bg-blue-700 transition">
              RequestInformation
            </button>
            <button type="button" className="p-3 border border-blue-400 rounded-md text-blue-500 hover:bg-blue-50 transition">
              View Course Calendar
            </button>
          </div>

            </div>

            <div className='md:w-1/2 w-full'>
                <img src={ContactImg} alt="" className='rounded-md shadow-md w-[400px]'/>
                <div className='mt-6'> 
                    <h2 className='text-lg md:text-xl py-6'>Main Training Centre</h2>

                    <div className='space-y-2'>
                    <p className='text-sm text-gray-700'>123 Transportation Avenue</p>
                    <p className='text-sm text-gray-700'>Edmonton, Alberta T5K 2L9</p>
                    <p className='text-sm text-gray-700'>Canada</p>

                    <p className='text-sm text-gray-700'>We also offer mobile training services that can be delivered directly to 
communities throughout Alberta. Contact our partnership team to 
discuss bringing our programmes to your location.</p>
</div>
                </div>

                <div>
                    <h2 className='text-lg md:text-xl py-6'>Hours of Operation</h2>
                    <div className=' space-y-2'>
                    <p className='text-sm text-gray-700'>Monday to Friday: 8:00 AM - 6:00 PM</p>
                    <p className='text-sm text-gray-700'>Saturday: 9:00 AM - 4:00 PM</p>
                    <p className='text-sm text-gray-700'>Sunday: Closed</p>
                    </div>
                </div>
            </div>

        </div>

    </section>
  )
}

export default ContactUs
