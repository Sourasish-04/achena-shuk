import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, Users, Globe } from 'lucide-react';

const Story = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Story</h1>
          <p className="text-xl text-gray-400">The journey of hope, compassion, and transformation</p>
        </div>
      </div>

      {/* Story Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="text-center mb-12">
            <Heart className="w-16 h-16 text-[#b0db9c] mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Achena Sukh</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              Welcome to ACHENA SUKH, the name "Achen Sukh" is a combination of two Bengali words.
Achena means unknown and Sukh means happiness.
Unknown happiness is a kind of happiness that is beyond the material or superficial pleasures which people often pursue. It is the deeper or more meaningful sense of contentment or satisfaction that comes from helping others, making a positive impact, or finding a sense of purpose. By striving to bring unknown happiness to people's live, ACHENA SUKH has been working towards a greater sense of fulfillment and well-being for both the recipients and the volunteers involved in its activities.
We are Achena Sukh with a noble cause,
Our mission is to bring light where there was pause,
To uplift lives and make dreams come true,
We believe in making a difference, how about you?
where we strive to bring unknown happiness into people’s life through our programs and initiatives, we aim to make a positive impact and alleviate pain.
Join us in our journey towards a brighter tomorrow Together, we can spread joy and banish sorrow.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <img 
              src="https://images.pexels.com/photos/6647034/pexels-photo-6647034.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
              alt="Community Work"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-[#1f1f1f] p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Globe className="w-8 h-8 text-[#b0db9c]" />
              <h3 className="text-2xl font-bold">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              Our mission is to reach those who are struggling in silence, offering not just aid, but hope, empowerment, and a sense of belonging.
            </p>
            <p className="text-gray-300 leading-relaxed">
            Through compassionate outreach, sustainable support systems, and a deeply committed team, we aim to uplift lives, restore faith in humanity, and build a future where kindness and solidarity are the foundation of every community.
            </p>
          </div>

          <div className="bg-[#1f1f1f] p-8 rounded-lg">
            <div className="flex items-center space-x-3 mb-6">
              <Users className="w-8 h-8 text-[#b0db9c]" />
              <h3 className="text-2xl font-bold">Our Vision</h3>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6">
              At Achena Sukh, our vision is to create a world where no one feels forgotten, helpless, or alone. We are driven by the belief that every person deserves access to basic dignity, care, and opportunity—regardless of their circumstances.
            </p>
            <p className="text-gray-300 leading-relaxed">
            </p>
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Journey</h2>
          
          <div className="space-y-8">
            <div className="flex items-start space-x-6">
              <div className="bg-[#b0db9c] text-black px-4 py-2 rounded-full font-bold text-lg flex-shrink-0">
                2014
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#b0db9c]">Foundation Established</h4>
                <p className="text-gray-300">
                  HopeFoundation was officially established with our first project providing clean water access to 500 families in rural Guatemala. This marked the beginning of our mission to create lasting change.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-[#b0db9c] text-black px-4 py-2 rounded-full font-bold text-lg flex-shrink-0">
                2017
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#b0db9c]">Education Initiative Launch</h4>
                <p className="text-gray-300">
                  Launched our education program, building our first school in Kenya and providing educational resources to over 1,000 children. This expanded our impact beyond water access to include educational empowerment.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-[#b0db9c] text-black px-4 py-2 rounded-full font-bold text-lg flex-shrink-0">
                2020
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#b0db9c]">Healthcare Expansion</h4>
                <p className="text-gray-300">
                  Expanded our services to include mobile healthcare clinics, reaching remote communities in India and the Philippines. Our healthcare program has since served over 15,000 individuals.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-6">
              <div className="bg-[#b0db9c] text-black px-4 py-2 rounded-full font-bold text-lg flex-shrink-0">
                2024
              </div>
              <div>
                <h4 className="text-xl font-semibold mb-2 text-[#b0db9c]">Global Impact</h4>
                <p className="text-gray-300">
                  Today, we've completed over 247 projects across 15 countries, impacting more than 15,420 lives. Our team of 50 dedicated professionals continues to work tirelessly toward our vision of a more equitable world.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 bg-[#1f1f1f] p-12 rounded-lg">
          <h3 className="text-3xl font-bold mb-6">Join Our Story</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          At Achena Sukh, we believe that together we can make a real difference in our society.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/donation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#b0db9c] text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)]"
            >
              Donate Now
            </a>
            <Link 
              to="/members"
              className="border-2 border-[#b0db9c] text-[#b0db9c] px-8 py-4 rounded-full font-semibold text-lg hover:bg-[#b0db9c] hover:text-black transition-all duration-300 transform hover:scale-105"
            >
              Meet Our Team
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;