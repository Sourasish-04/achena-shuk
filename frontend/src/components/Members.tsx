import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Members = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const members = [
    { name: "Sarah Johnson", position: "Director", photo: "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Michael Chen", position: "Project Manager", photo: "https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Emily Davis", position: "Community Outreach", photo: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "David Wilson", position: "Finance Coordinator", photo: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "Lisa Anderson", position: "Volunteer Coordinator", photo: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
    { name: "James Rodriguez", position: "Communications Lead", photo: "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % members.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [members.length]);

  const visibleMembers = [
    members[currentIndex],
    members[(currentIndex + 1) % members.length],
    members[(currentIndex + 2) % members.length],
  ];
  
  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Team</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Meet the dedicated individuals who make our mission possible
          </p>
        </div>

        {/* Auto-scrolling Members Sidebar */}
        <div className="mb-12 overflow-hidden">
          <div className="flex justify-between transition-transform duration-500 ease-in-out gap-x-0">
            {visibleMembers.map((member, index) => (
              <div key={`${currentIndex}-${index}`} className="flex-shrink-0 w-80">
                <div className="bg-[#1f1f1f] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,219,156,0.6)]">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-[#b0db9c]"
                  />
                  <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                  <p className="text-[#b0db9c] text-center">{member.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* View All Members Button */}
        <div className="text-center">
          <Link 
            to="/members"
            className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] inline-flex items-center space-x-2"
          >
            <span>View All Members</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Members;