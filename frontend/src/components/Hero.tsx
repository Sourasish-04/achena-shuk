import React from 'react'; // Home page first photo
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const donateLink = "https://forms.google.com/donate-form";
  
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("src/components/Home_page.jpg")', // Corrected path with forward slashes
        }} // Home page first background image
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-[#b0db9c] bg-clip-text text-transparent">
          Achena Sukh
          <br />
           
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
          A non-profitable charitable trust dedicated to helping the underprivileged and making a positive impact in the community.
          <br/>
          Reg no. - IV-190400062/2021
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
          
            href={"/donation"}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#b0db9c] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] flex items-center justify-center space-x-2"
          >
            <span>Donate Now</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/*  */}
    </section>
  );
};

export default Hero;