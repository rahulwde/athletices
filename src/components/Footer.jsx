import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" py-10 mt-16 bg-[#083344] text-white rounded-tr-4xl rounded-tl-4xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Logo and Tagline */}
        <div>
          <h2 className="text-2xl font-bold">🏃‍♂️AthletiX</h2>
          <p className="mt-2 text-sm  ">
            Discover. Book. Compete. Your gateway to local sports events.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:text-base-content">Home</Link></li>
            <li><Link to="/event" className="hover:text-blue-300">Events</Link></li>
            <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
            <li><Link to="/contact" className="hover:text-blue-300">Contact</Link></li>
          </ul>
        </div>

        {/* Private Routes */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Dashboard</h3>
          <ul className="space-y-1 text-sm ">
            <li><Link to="/bookEvent" className="hover:text-blue-300">Book Event</Link></li>
            <li><Link to="/myBooking" className="hover:text-blue-300">My Bookings</Link></li>
            <li><Link to="/manageEvent" className="hover:text-blue-300">Manage Events</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex space-x-4 mt-2">
            <a href="#" className="hover:text-blue-400"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaTwitter size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-blue-400"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="text-center text-sm text-gray-400 mt-10 border-t border-gray-700 pt-4">
        &copy; {currentYear} AthletiX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
