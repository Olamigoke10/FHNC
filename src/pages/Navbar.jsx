import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/logos/fnhc.png";
import { useState, useRef, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileTrainingOpen, setMobileTrainingOpen] = useState(false);
  const [trainingDropdownOpen, setTrainingDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setTrainingDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileTrainingOpen(false);
  }, [location]);

  // Toggle Training dropdown
  const toggleTrainingDropdown = () => {
    setTrainingDropdownOpen(!trainingDropdownOpen);
  };

  // Mobile menu handlers
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const toggleMobileTraining = () => setMobileTrainingOpen(!mobileTrainingOpen);

  // Check if path is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="Logo" className="w-60 md:w-72 font-extrabold" />
            </NavLink>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 transition-all"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X size={24} className="block" />
              ) : (
                <Menu size={24} className="block" />
              )}
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-indigo-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Home
            </NavLink>

            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-indigo-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              About Us
            </NavLink>

            {/* Training Programs Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleTrainingDropdown}
                className={`flex items-center px-3 py-2 text-sm font-medium ${
                  trainingDropdownOpen || isActive('/AiEthics') || isActive('/leadership') || isActive('/partnership')
                    ? 'text-indigo-600' 
                    : 'text-gray-700 hover:text-indigo-600'
                }`}
              >
                Training Programs
                <ChevronDown
                  size={16}
                  className={`ml-1 transition-transform duration-200 ${
                    trainingDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Dropdown Menu */}
              {trainingDropdownOpen && (
                <div className="absolute left-0 mt-2 w-56 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <NavLink
                      to="/AiEthics"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setTrainingDropdownOpen(false)}
                    >
                      AI Ethics & Governance
                    </NavLink>
                    <NavLink
                      to="/DriverTraining"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setTrainingDropdownOpen(false)}
                    >
                      Driving Training
                    </NavLink>
                    <NavLink
                      to="/leadership"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setTrainingDropdownOpen(false)}
                    >
                      Indigenous Leadership
                    </NavLink>
                    <NavLink
                      to="/partnership"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50"
                      onClick={() => setTrainingDropdownOpen(false)}
                    >
                      Partnerships
                    </NavLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-indigo-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Blog
            </NavLink>

            <NavLink 
              to="/register" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-indigo-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Registration
            </NavLink>

            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `px-3 py-2 text-sm font-medium relative after:absolute after:left-1/2 after:-bottom-1 after:h-0.5 after:w-0 after:bg-indigo-600 hover:after:w-[calc(100%-1.5rem)] hover:after:left-3 after:transition-all after:duration-300 ${
                  isActive ? 'text-indigo-600 after:w-[calc(100%-1.5rem)] after:left-3' : 'text-gray-700 hover:text-indigo-600'
                }`
              }
            >
              Contact
            </NavLink>

            <NavLink
              to="/register"
              className={({ isActive }) => 
                `ml-4 px-4 py-2 rounded-md text-sm font-medium shadow-sm hover:shadow-md transition-all duration-200 ${
                  isActive ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
                }`
              }
            >
              Join Now
            </NavLink>
          </nav>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-2 pt-2 pb-4 space-y-1 sm:px-3 bg-white border-t border-gray-100">
          <NavLink
            to="/"
            onClick={toggleMobileMenu}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={toggleMobileMenu}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            About Us
          </NavLink>

          {/* Mobile Training Programs Dropdown */}
          <div>
            <button
              onClick={toggleMobileTraining}
              className={`flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium ${
                mobileTrainingOpen || isActive('/AiEthics') || isActive('/leadership') || isActive('/partnership')
                  ? 'text-indigo-600 bg-indigo-50'
                  : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`}
            >
              <span>Training Programs</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  mobileTrainingOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            <div className={`pl-4 ${mobileTrainingOpen ? 'block' : 'hidden'}`}>
              <NavLink
                to="/AiEthics"
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`
                }
              >
                AI Ethics & Governance
              </NavLink>
              <NavLink
                to="/leadership"
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`
                }
              >
                Indigenous Leadership
              </NavLink>
              <NavLink
                to="/partnership"
                onClick={toggleMobileMenu}
                className={({ isActive }) => 
                  `block px-3 py-2 rounded-md text-base font-medium ${
                    isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-600 hover:text-indigo-600 hover:bg-gray-50'
                  }`
                }
              >
                Partnerships
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/blog"
            onClick={toggleMobileMenu}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Blog
          </NavLink>

          <NavLink
            to="/register"
            onClick={toggleMobileMenu}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Registration
          </NavLink>

          <NavLink
            to="/contact"
            onClick={toggleMobileMenu}
            className={({ isActive }) => 
              `block px-3 py-2 rounded-md text-base font-medium ${
                isActive ? 'text-indigo-600 bg-indigo-50' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
              }`
            }
          >
            Contact
          </NavLink>

          <NavLink
            to="/register"
            onClick={toggleMobileMenu}
            className={({ isActive }) => 
              `block w-full mt-2 px-4 py-2 rounded-md text-base font-medium text-center ${
                isActive ? 'bg-indigo-700 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700'
              }`
            }
          >
            Join Now
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;