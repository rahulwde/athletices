import React from 'react';
 

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-10 space-y-6">
        
        <title>About - Athletics</title>
        
      <h1 className="text-4xl font-bold text-center text-[#f95f35]">About Event Explorer</h1>
      
      <p className="text-lg  text-justify">
        <strong className='text-[#f95f35]'>Event Explorer</strong> is a modern event booking platform built to help users easily discover and register for various athletic and community events happening in their area. Whether it's sports tournaments, cultural programs, or social gatherings — users can browse events, view details, and make bookings in just a few clicks.
      </p>

      <div className="bg-base-200 text-base-content rounded-xl p-6 shadow-md">
        <h2 className="text-2xl font-semibold text-[#f95f35] mb-2">🚀 Features</h2>
        <ul className="list-disc list-inside ">
          <li>Authentication with login/register</li>
          <li>Book events and manage your bookings</li>
          <li>Private routes for secure access</li>
          <li>Responsive UI with dark mode support</li>
          <li>Real-time booking validation</li>
        </ul>
      </div>

      <div className="bg-base-200 p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold text-[#f95f35] mb-2">🛠️ Technologies Used</h2>
        <ul className="list-disc list-inside  text-base-content">
          <li>React (v19) + React Router</li>
          <li>Firebase Authentication</li>
          <li>Axios for HTTP requests</li>
          <li>Node.js + Express (Backend)</li>
          <li>MongoDB (Database)</li>
          <li>Tailwind CSS (Styling)</li>
        </ul>
      </div>

      <div className="text-center mt-10">
        <p className="text-gray-600 dark:text-gray-400">Created with ❤️ by <strong>Rahul Mondol</strong></p>
      </div>
    </div>
  );
};

export default About;
