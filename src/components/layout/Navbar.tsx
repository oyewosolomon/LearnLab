import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="text-white text-2xl font-bold flex gap-3">
            <svg fill="#2563eb" height="40px" width="40px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 470 470"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <path d="M74.8,252.158c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S48.884,252.158,74.8,252.158z M74.8,173.158 c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S57.155,173.158,74.8,173.158z"></path> <path d="M181.6,252.158c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S155.684,252.158,181.6,252.158z M181.6,173.158c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S163.955,173.158,181.6,173.158z"></path> <path d="M288.4,252.158c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S262.484,252.158,288.4,252.158z M288.4,173.158c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S270.756,173.158,288.4,173.158z"></path> <path d="M395.2,252.158c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S369.284,252.158,395.2,252.158z M395.2,173.158c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S377.556,173.158,395.2,173.158z"></path> <path d="M74.8,145.358c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S48.884,145.358,74.8,145.358z M74.8,66.358 c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S57.155,66.358,74.8,66.358z"></path> <path d="M181.6,145.358c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S155.684,145.358,181.6,145.358z M181.6,66.358 c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S163.955,66.358,181.6,66.358z"></path> <path d="M288.4,145.358c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S262.484,145.358,288.4,145.358z M288.4,66.358 c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S270.756,66.358,288.4,66.358z"></path> <path d="M395.2,145.358c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S369.284,145.358,395.2,145.358z M395.2,66.358 c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S377.556,66.358,395.2,66.358z"></path> <path d="M121.8,311.958c0-25.916-21.084-47-47-47s-47,21.084-47,47s21.084,47,47,47S121.8,337.874,121.8,311.958z M74.8,343.958 c-17.645,0-32-14.355-32-32s14.355-32,32-32s32,14.355,32,32S92.445,343.958,74.8,343.958z"></path> <path d="M181.6,358.958c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S155.684,358.958,181.6,358.958z M181.6,279.958c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S163.955,279.958,181.6,279.958z"></path> <path d="M288.4,358.958c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S262.484,358.958,288.4,358.958z M288.4,279.958c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S270.756,279.958,288.4,279.958z"></path> <path d="M395.2,358.958c25.916,0,47-21.084,47-47s-21.084-47-47-47s-47,21.084-47,47S369.284,358.958,395.2,358.958z M395.2,279.958c17.645,0,32,14.355,32,32s-14.355,32-32,32s-32-14.355-32-32S377.556,279.958,395.2,279.958z"></path> <path d="M462.5,23.559H7.5c-4.142,0-7.5,3.357-7.5,7.5v407.883c0,4.143,3.358,7.5,7.5,7.5h455c4.143,0,7.5-3.357,7.5-7.5V31.059 C470,26.916,466.643,23.559,462.5,23.559z M15,431.441v-44.684h44.8c4.142,0,7.5-3.357,7.5-7.5s-3.358-7.5-7.5-7.5H15V38.559h440 v333.199H89.8c-4.142,0-7.5,3.357-7.5,7.5s3.358,7.5,7.5,7.5H455v44.684H15z"></path> </g> </g></svg>
              LearnLab
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-gray-300 hover:text-white transition-colors">
              Home
            </a>
            <a href="/#features" className="text-gray-300 hover:text-white transition-colors">
              Features
            </a>
            <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </a>
            <a href="/#about" className="text-gray-300 hover:text-white transition-colors">
              About Us
            </a>
            <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
              Contact
            </a>
          </div>

          {/* Call-to-Action Button */}
          <div className="hidden md:block">
            <a
              href="/#get-started"
              className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-300 hover:text-white focus:outline-none"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4">
            <div className="flex flex-col space-y-4">
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                Home
              </a>
              <a href="/#features" className="text-gray-300 hover:text-white transition-colors">
                Features
              </a>
              <a href="/#pricing" className="text-gray-300 hover:text-white transition-colors">
                Pricing
              </a>
              <a href="/#about" className="text-gray-300 hover:text-white transition-colors">
                About Us
              </a>
              <a href="/#contact" className="text-gray-300 hover:text-white transition-colors">
                Contact
              </a>
              <a
                href="/#get-started"
                className="px-6 py-2 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;