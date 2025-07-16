import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/images/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileDropdown, setIsMobileDropdown] = useState(false);

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center">
              <img src={logo} alt="Logo" className="h-12 w-auto" />
            </a>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {isMobileOpen ? (
                <X size={24} className="block" />
              ) : (
                <Menu size={24} className="block" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300"
            >
              Home
            </a>

            <a 
              href="#about" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300"
            >
              About Us
            </a>

            {/* Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button 
                className="flex items-center text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium group"
              >
                <span>Programs</span>
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    isOpen ? "rotate-180 text-indigo-600" : "text-gray-500 group-hover:text-indigo-600"
                  }`}
                />
              </button>

              {isOpen && (
                <div className="absolute left-0 mt-2 w-56 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-opacity duration-200">
                  <div className="py-1">
                    <a
                      href="#programs"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      Training Programs
                    </a>
                    <a
                      href="#leadership"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      Indigenous Leadership
                    </a>
                    <a
                      href="#partnerships"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-700 transition-colors"
                    >
                      Partnerships
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a 
              href="#register" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300"
            >
              Registration
            </a>

            <a 
              href="#contact" 
              className="text-gray-700 hover:text-indigo-600 px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300"
            >
              Contact
            </a>

            <a
              href="#register"
              className="ml-4 px-4 py-2 rounded-md bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 shadow-sm hover:shadow-md transition-all duration-200"
            >
              Join Now
            </a>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isMobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100">
          <a
            href="#home"
            onClick={() => setIsMobileOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
          >
            Home
          </a>

          <a
            href="#about"
            onClick={() => setIsMobileOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
          >
            About Us
          </a>

          {/* Mobile Dropdown */}
          <div>
            <button
              onClick={() => setIsMobileDropdown(!isMobileDropdown)}
              className="flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
            >
              <span>Programs</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isMobileDropdown ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className={`pl-4 ${isMobileDropdown ? 'block' : 'hidden'}`}>
              <a
                href="#programs"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsMobileDropdown(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Training Programs
              </a>
              <a
                href="#leadership"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsMobileDropdown(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Indigenous Leadership
              </a>
              <a
                href="#partnerships"
                onClick={() => {
                  setIsMobileOpen(false);
                  setIsMobileDropdown(false);
                }}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
              >
                Partnerships
              </a>
            </div>
          </div>

          <a
            href="#register"
            onClick={() => setIsMobileOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
          >
            Registration
          </a>

          <a
            href="#contact"
            onClick={() => setIsMobileOpen(false)}
            className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors"
          >
            Contact
          </a>

          <a
            href="#register"
            onClick={() => setIsMobileOpen(false)}
            className="block w-full mt-2 px-4 py-2 rounded-md bg-indigo-600 text-white text-base font-medium text-center hover:bg-indigo-700 shadow-sm transition-colors"
          >
            Join Now
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;