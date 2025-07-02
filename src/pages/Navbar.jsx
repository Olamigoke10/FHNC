import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import logo from "../assets/images/Logo1.png";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isMobileDropdown, setIsMobileDropdown] = useState(false);

  return (
    <header className="w-full shadow-md">
      <div className="flex items-center justify-between px-4 py-4 h-36">
        {/* Header */}
        <div className="w-40">
          <a href="#home">
            <img src={logo} alt="Logo" className="w-full" />
          </a>
        </div>

        {/* Mobile toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileOpen(!isMobileOpen)}>
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex">
          <ul className="flex gap-x-6 text-sm text-gray-700 font-medium justify-center items-center">
            <li className="hover:bg-slate-100 p-1.5 rounded-md transition-all duration-300 ease-in-out">
              <a href="#home">Home</a>
            </li>

            <li className="hover:bg-slate-100 p-1.5 rounded-md transition-all duration-300 ease-in-out">
              <a href="#about">About Us</a>
            </li>

            {/* Dropdown */}
            <li
              className="relative cursor-pointer"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <span className="flex items-center">
                <span>Programs</span>
                <ChevronDown
                  size={15}
                  className={`transition-transform duration-200 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </span>

              {isOpen && (
                <ul className="absolute left-0 top-5 bg-white border border-gray-300 shadow-md rounded w-48 z-10 p-5">
                  <li className="py-3 hover:bg-slate-100 rounded-md shadow-sm gap-y-2">
                    <a href="#programs" className="px-2">
                      TrainingPrograms
                    </a>
                  </li>
                  <li className="py-3 hover:bg-slate-100 rounded-md shadow-sm text-start">
                    <a href="#leadership" className="px-2">
                      IndigenousLeadership
                    </a>
                  </li>
                  <li className="py-3 hover:bg-slate-100 rounded-md shadow-sm">
                    <a href="#partnerships" className="px-2">
                      Partnerships
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li className="hover:bg-slate-100 p-1.5 rounded-md transition-all duration-300 ease-in-out">
              <Link to="/register">Registration</Link>
            </li>
            <li className="hover:bg-slate-100 p-1.5 rounded-md transition-all duration-300 ease-in-out">
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      {isMobileOpen && (
        <div className="md:hidden flex flex-col px-4 space-y-3 pb-4 gap-y-2 text-sm font-medium text-gray-700 transition-all duration-300">
          <a href="#home" onClick={() => setIsMobileOpen(false)}>
            Home
          </a>

          <a href="#about" onClick={() => setIsMobileOpen(false)}>
            About us
          </a>

          {/* Mobile Dropdown */}
          <div
            className="flex items-center gap-x-1"
            onClick={() => setIsMobileDropdown(!isMobileDropdown)}
          >
            <span>Programs</span>
            <ChevronDown
              size={15}
              className={`transition-transform duration-200 ${
                isMobileDropdown ? "rotate-180" : ""
              }`}
            />
          </div>

          {isMobileDropdown && (
            <ul className="mt-2 space-y-2 bg-white border rounded shadow-md p-4 transition-all ease-in-out duration-300">
              <li className="py-3 hover:bg-slate-100 rounded-md shadow-sm gap-y-2">
                <a
                  href="#programs"
                  className="px-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  TrainingPrograms
                </a>
              </li>
              <li className="py-3 hover:bg-slate-100 rounded-md shadow-sm text-start">
                <a
                  href="#leadership"
                  className="px-2"
                  onClick={() => setIsMobileOpen(false)}
                >
                  IndigenousLeadership
                </a>
              </li>
              <li className="py-3 hover:bg-slate-100 rounded-md shadow-sm">
                <a
                  href="#partnerships"
                  onClick={() => setIsMobileOpen(false)}
                  className="px-2"
                >
                  Partnerships
                </a>
              </li>
            </ul>
          )}

          <Link to="/register" onClick={() => setIsMobileOpen(false)}>
            Registration
          </Link>

          <a href="#contact" onClick={() => setIsMobileOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
