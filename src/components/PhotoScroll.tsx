import React from 'react'; // Home page infinite scroll
import Impact1 from './Impact1.jpg';
import Impact2 from './Impact2.jpg';
import Impact3 from './Impact3.jpg';
import Impact4 from './Impact4.jpg';
import Impact5 from './Impact5.jpg';
import Impact6 from './Impact6.jpg';

const PhotoScroll = () => {
  // Use imported images directly
  const photos = [Impact1, Impact2, Impact3, Impact4, Impact5, Impact6];

  return (
    <section className="py-20 bg-black overflow-hidden">
      <div className="mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">Achena Sukh Impact</h2>
        <p className="text-xl text-gray-400 text-center max-w-2xl mx-auto px-4">
          Witness the transformation we're creating together
        </p>
      </div>

      {/* Right to Left Scroll */}
      <div className="mb-8">
        <div className="flex space-x-6 animate-scroll-right">
          {[...photos, ...photos].map((photo, index) => (
            <img 
              key={`rtl-${index}`}
              src={photo} 
              alt={`Impact ${index + 1}`}
              className="w-80 h-60 object-cover rounded-lg shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Left to Right Scroll */}
      <div className="mb-8">
        <div className="flex space-x-6 animate-scroll-left">
          {[...photos.reverse(), ...photos].map((photo, index) => (
            <img 
              key={`ltr-${index}`}
              src={photo} 
              alt={`Impact ${index + 1}`}
              className="w-80 h-60 object-cover rounded-lg shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>

      {/* Right to Left Scroll (Second Row) */}
      <div>
        <div className="flex space-x-6 animate-scroll-right-slow">
          {[...photos.reverse(), ...photos].map((photo, index) => (
            <img 
              key={`rtl2-${index}`}
              src={photo} 
              alt={`Impact ${index + 1}`}
              className="w-80 h-60 object-cover rounded-lg shadow-lg flex-shrink-0 hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PhotoScroll;