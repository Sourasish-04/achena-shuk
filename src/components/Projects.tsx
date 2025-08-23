import React from 'react'; //Upcoming Projects
import { Link } from 'react-router-dom';
import { Calendar, Users, ArrowRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      id: 1,
      name: "Clean Water Initiative",
      date: "2024-03-15",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Providing clean water access to remote villages in rural areas.",
      beneficiaries: 2500
    },
    {
      id: 2,
      name: "Education for All",
      date: "2024-04-20",
      image: "https://images.pexels.com/photos/8613089/pexels-photo-8613089.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Building schools and providing educational resources to underserved communities.",
      beneficiaries: 1200
    },
    {
      id: 3,
      name: "Healthcare Outreach",
      date: "2024-05-10",
      image: "https://images.pexels.com/photos/6303663/pexels-photo-6303663.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      description: "Mobile healthcare clinics bringing medical care to remote areas.",
      beneficiaries: 3000
    }
  ];

  return (
    <section className="py-20 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Projects</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Discover our latest initiatives and how they're making a difference
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className="group perspective-1000"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="bg-[#2e2e2e] rounded-lg overflow-hidden transform group-hover:rotateY-12 group-hover:scale-105 transition-all duration-500 hover:shadow-[0_0_40px_rgba(176,219,156,0.6)]">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.name}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-[#b0db9c] transition-colors duration-300">
                    {project.name}
                  </h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(project.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{project.beneficiaries.toLocaleString()} people</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link 
            to="/projects"
            className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] inline-flex items-center space-x-2"
          >
            <span>View All Projects</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects;