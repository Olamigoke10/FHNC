import logo from "../assets/images/logo.png";
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
          
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center">
              <img src={logo} alt="FNHC Logo" className="h-12 w-auto" />
              <span className="ml-3 text-xl font-bold">FNHC</span>
            </div>
            <p className="text-gray-400 text-sm">
              Empowering Indigenous communities through comprehensive driver training and leadership development.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#programs" className="text-gray-400 hover:text-white transition-colors">Programs</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#leadership" className="text-gray-400 hover:text-white transition-colors">Leadership</a></li>
              <li><a href="#register" className="text-gray-400 hover:text-white transition-colors">Registration</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Courses</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Governance & Lifecycle Management
</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Bias, Fairness & Explainability
</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Regulation & Compliance</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Assessment & Monitoring
</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Policy Design & Stakeholder Engagement
</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Driver Training Courses</h3>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Class 3 Driver Training
</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Class 5 Driver Training
</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Air Brakes Certification</a></li>

            </ul>
          </div>

          {/* Contact Info */}
          <div className="text-sm">
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="flex-shrink-0 mt-1 mr-3 text-blue-400" size={18} />
                <address className="text-gray-400 not-italic">
                  Building 57, <br />
                  Alison Bay Fort Chipewyan<br />
                  TOP101 <br />
                </address>
              </div>
              <div className="flex items-center">
                <Phone className="flex-shrink-0 mr-3 text-blue-400" size={18} />
                <a href="tel:+1234567890" className="text-gray-400 hover:text-white transition-colors">780-804-0718</a>
              </div>
              <div className="flex items-center">
                <Mail className="flex-shrink-0 mr-3 text-blue-400" size={18} />
                <a href="mailto:info@firstnationcontraction.biz" className="text-gray-400 hover:text-white transition-colors">info@firstnationcontracting.biz</a>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} First Nations Highway Consortium. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-white text-sm transition-colors">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;