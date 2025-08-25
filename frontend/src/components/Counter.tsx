import React, { useState, useEffect, useRef } from 'react';
import { Users, Heart, Award } from 'lucide-react';

const Counter = () => {
  const [counts, setCounts] = useState({ projects: 0, lives: 0, members: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const finalCounts = { projects: 10, lives: 25000, members: 50 };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const stepTime = duration / steps;

    const intervals = Object.keys(finalCounts).map(key => {
      const target = finalCounts[key as keyof typeof finalCounts];
      const increment = target / steps;
      let current = 0;

      return setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(intervals.find(interval => interval === this));
        }
        setCounts(prev => ({ ...prev, [key]: Math.floor(current) }));
      }, stepTime);
    });

    return () => intervals.forEach(clearInterval);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-20 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        {/* Adjust grid classes for responsiveness */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#2e2e2e] p-8 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] transition-all duration-300">
              <Award className="w-12 h-12 text-[#b0db9c] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-[#b0db9c] mb-2">
                {counts.projects.toLocaleString()}+
              </div>
              <p className="text-xl text-gray-300">Projects</p>
            </div>
          </div>

          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#2e2e2e] p-8 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] transition-all duration-300">
              <Heart className="w-12 h-12 text-[#b0db9c] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-[#b0db9c] mb-2">
                {counts.lives.toLocaleString()}+
              </div>
              <p className="text-xl text-gray-300">Lives Impacted</p>
            </div>
          </div>

          <div className="text-center transform hover:scale-105 transition-all duration-300">
            <div className="bg-[#2e2e2e] p-8 rounded-lg shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] transition-all duration-300">
              <Users className="w-12 h-12 text-[#b0db9c] mx-auto mb-4" />
              <div className="text-4xl md:text-5xl font-bold text-[#b0db9c] mb-2">
                {counts.members}
              </div>
              <p className="text-xl text-gray-300">Team Members</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Counter;