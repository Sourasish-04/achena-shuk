import React, { useEffect, useState } from 'react';

const LoadingAnimation = () => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 1000);
    const timer2 = setTimeout(() => setStage(2), 2000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
      <div
        className={`transition-all duration-1000 ${
          stage === 0
            ? 'blur-lg opacity-0'
            : stage === 1
            ? 'blur-sm opacity-50'
            : 'blur-none opacity-100'
        }`}
      >
        <div className="text-center">
          <div
            className={`transform transition-all duration-1000 ${
              stage === 2 ? 'scale-100 translate-y-0' : 'scale-50 translate-y-10'
            }`}
          >
            {/* Updated logo size */}
            <img
              src="src/components/Logo.png" // Update this path based on your project structure
              alt="Achena Sukh Logo"
              className="w-72 h-72 mx-auto mb-8" // Updated size to 300px x 300px
            />
            <h1 className="text-6xl font-bold text-white mb-6">Achena Sukh</h1> {/* Increased font size */}
            <p className="text-[#b0db9c] text-2xl">Creating Impact, Changing Lives</p> {/* Increased font size */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingAnimation;