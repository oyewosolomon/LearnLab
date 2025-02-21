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
            <a href="/" className="text-white text-2xl font-bold">
              LearnLab<span className="text-blue-400">Virtual</span>
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