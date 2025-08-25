import React from 'react';
import { Heart, Mail, Phone, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  const socialLinks = {
    facebook: " https://www.facebook.com/achenasukh1 ",
    instagram: "https://www.instagram.com/achena_sukh/ ",
  };

  return (
    <footer className="bg-[#1f1f1f] py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Heart className="w-8 h-8 text-[#b0db9c]" />
              <span className="text-2xl font-bold">Achena Sukh</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Unknown happiness is a kind of happiness that is beyond the material or
superficial pleasures which people often pursue. It is the deeper or more
meaningful sense of contentment or satisfaction that comes from helping others,
making a positive impact, or finding a sense of purpose.
            </p>
            <div className="flex space-x-4">
              <a 
                href={socialLinks.facebook} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2e2e2e] p-3 rounded-full hover:bg-[#b0db9c] hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href={socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-[#2e2e2e] p-3 rounded-full hover:bg-[#b0db9c] hover:text-black transition-all duration-300 transform hover:scale-110"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#b0db9c]">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#about" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">About Us</a></li>
              <li><a href="/story" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">Our Story</a></li>
              <li><a href="/projects" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">Our Projects</a></li>
              <li><a href="/members" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">Our Team</a></li>
              <li><a href="/verify" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">Verify Member</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6 text-[#b0db9c]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3 text-gray-400">
                <Mail className="w-5 h-5 text-[#b0db9c]" />
                <span>achenasukh@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3 text-gray-400">
                <Phone className="w-5 h-5 text-[#b0db9c]" />
                <span>+91 7029992422</span>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin className="w-5 h-5 text-[#b0db9c] mt-1" />
                <span>Achena Sukh,<br />Kakdwip, South 24 Parganas, West benagal-743347, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2e2e2e] pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">
              © 2025 Achena Sukh.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-[#b0db9c] transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;