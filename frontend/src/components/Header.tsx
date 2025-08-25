import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';


const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-40 transition-all duration-500 ${scrolled ? 'bg-[#1f1f1f]/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-6"> {/* Increased padding */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-4 transform hover:scale-105 transition-all duration-300">
                <img 
      src="src/components/Logo2.png" 
      alt="Achena Sukh Logo" 
      className="w-20 h-20 rounded-full object-cover"
    />
 {/* Increased size */} 
            <span className="text-3xl font-bold">Achena Sukh</span> {/* Increased font size */}
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-10"> {/* Increased spacing */}
            <a href="#about" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">About Us</a>
            <Link to="/story" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">Story</Link>
            <Link to="/projects" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">Projects</Link>
            <Link to="/verify" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">Verify Member</Link>
            <a
              href="/donation"
              className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-8 py-3 rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_20px_rgba(176,219,156,0.6)]"
            >
              Donate
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />} {/* Increased icon size */}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 py-6 bg-[#1f1f1f]/95 backdrop-blur-md rounded-lg">
            <nav className="flex flex-col space-y-6 px-6"> {/* Increased spacing */}
              <a href="#about" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">About Us</a>
              <Link to="/story" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">Story</Link>
              <Link to="/projects" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">Projects</Link>
              <Link to="/verify" className="hover:text-[#b0db9c] text-lg transition-colors duration-300">Verify Member</Link>
              <a 
                href="/donation"
                className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-8 py-3 rounded-full text-center text-lg transition-all duration-300"
              >
                Donate
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;