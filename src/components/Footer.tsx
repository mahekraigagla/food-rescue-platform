
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-wastenot-green text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-wastenot-green"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5" />
                  <path d="M8.5 8.5v.01" />
                  <path d="M16 15.5v.01" />
                  <path d="M12 12v.01" />
                  <path d="M11 17v.01" />
                  <path d="M7 14v.01" />
                </svg>
              </div>
              <span className="text-xl font-bold">WasteNot</span>
            </Link>
            <p className="text-sm">
              Connecting food donors with NGOs to minimize waste and maximize impact.
            </p>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:underline">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">Contact</Link>
              </li>
              <li>
                <Link to="/login" className="hover:underline">Login</Link>
              </li>
              <li>
                <Link to="/signup" className="hover:underline">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/faq" className="hover:underline">FAQ</Link>
              </li>
              <li>
                <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
              </li>
              <li>
                <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4 mb-4">
              <a href="#" className="hover:text-wastenot-yellow">
                <Facebook size={20} />
              </a>
              <a href="#" className="hover:text-wastenot-yellow">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-wastenot-yellow">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-wastenot-yellow">
                <Github size={20} />
              </a>
            </div>
            <p className="text-sm">
              Email: info@wastenot.org<br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-white/20 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} WasteNot. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
