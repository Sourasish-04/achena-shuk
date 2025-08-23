import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Users, MapPin } from 'lucide-react';

const AllProjects = () => {
  const projects = [
    {
      id: 1,
      name: "Clean Water Initiative",
      date: "2024-03-15",
      location: "Guatemala",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Providing clean water access to remote villages in rural areas through sustainable well construction and water purification systems.",
      beneficiaries: 2500,
      photos: [ ]
    },
    {
      id: 2,
      name: "Education for All",
      date: "2024-04-20",
      location: "Kenya",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Building schools and providing educational resources to underserved communities, ensuring every child has access to quality education.",
      beneficiaries: 1200,
      photos: []
    },
    {
      id: 3,
      name: "Healthcare Outreach",
      date: "2024-05-10",
      location: "India",
      image: "https://images.pexels.com/photos/6303663/pexels-photo-6303663.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Mobile healthcare clinics bringing medical care to remote areas, providing essential health services to underserved populations.",
      beneficiaries: 3000,
      photos: []
    },
    {
      id: 4,
      name: "Disaster Relief Program",
      date: "2024-02-08",
      location: "Philippines",
      image: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Emergency response and rebuilding efforts for communities affected by natural disasters, providing immediate relief and long-term recovery support.",
      beneficiaries: 4200,
      photos: []
    },
    {
      id: 5,
      name: "Food Security Initiative",
      date: "2024-01-15",
      location: "Ethiopia",
      image: "https://images.pexels.com/photos/6995251/pexels-photo-6995251.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Sustainable agriculture programs and food distribution networks to combat hunger and improve food security in vulnerable communities.",
      beneficiaries: 1800,
      photos: []
    },
    {
      id: 6,
      name: "Women's Empowerment Program",
      date: "2024-06-01",
      location: "Bangladesh",
      image: "https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Skills training and microfinance programs to empower women and promote gender equality in developing communities.",
      beneficiaries: 950,
      photos: []
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <div className="bg-[#1f1f1f] py-8">
        <div className="container mx-auto px-4">
          <div className="flex items-center space-x-4 mb-6">
            <Link 
              to="/" 
              className="flex items-center space-x-2 text-[#b0db9c] hover:text-white transition-colors duration-300"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">All Projects</h1>
          <p className="text-xl text-gray-400">Discover the impact we're making worldwide</p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="container mx-auto px-4 py-12">
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-[#1f1f1f] rounded-lg overflow-hidden shadow-lg hover:shadow-[0_0_40px_rgba(176,219,156,0.6)] transition-all duration-300">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
                {/* Project Info */}
                <div>
                  <h2 className="text-3xl font-bold mb-4">{project.name}</h2>
                  <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div className="flex items-center space-x-2 text-[#b0db9c]">
                      <Calendar className="w-5 h-5" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#b0db9c]">
                      <MapPin className="w-5 h-5" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-[#b0db9c]">
                      <Users className="w-5 h-5" />
                      <span>{project.beneficiaries.toLocaleString()} people</span>
                    </div>
                  </div>
                </div>

                {/* Project Photos */}
                <div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <img 
                        src={project.image} 
                        alt={project.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                    </div>
                    {project.photos.slice(1, 3).map((photo, index) => (
                      <img 
                        key={index}
                        src={photo} 
                        alt={`${project.name} ${index + 2}`}
                        className="w-full h-24 object-cover rounded-lg"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllProjects;