import React from 'react';
import { Heart, Target, Users, Award } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="relative">
            <img 
              src="https://images.pexels.com/photos/6646914/pexels-photo-6646914.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="About Us"
              className="rounded-lg shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#b0db9c]/20 to-transparent rounded-lg"></div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">About Achena Sukh</h2>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              Welcome to ACHENA SUKH, the name "Achen Sukh" is a combination of two
Bengali words.
Achena means unknown and Sukh means happiness.
Unknown happiness is a kind of happiness that is beyond the material or
superficial pleasures which people often pursue. It is the deeper or more
meaningful sense of contentment or satisfaction that comes from helping others,
making a positive impact, or finding a sense of purpose. By striving to bring
unknown happiness to people's live, ACHENA SUKH has been working towards a
greater sense of fulfillment and well-being for both the recipients and the
volunteers involved in its activities.
            </p>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
              We are Achena Sukh with a noble cause,
 Our mission is to bring light where there was pause,
 To uplift lives and make dreams come true,
 We believe in making a difference, how about you?
            </p>
            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
             
where we strive to bring unknown happiness into people’s life through our
programs and initiatives, we aim to make a positive impact and alleviate pain.
Join us in our journey towards a brighter tomorrow Together, we can spread joy
and banish sorrow.
            </p>

            {/* Mission Points */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex items-center space-x-3">
                <Heart className="w-8 h-8 text-[#b0db9c] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">25000+</h4>
                  <p className="text-gray-400 text-sm">People served</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Target className="w-8 h-8 text-[#b0db9c] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">3+</h4>
                  <p className="text-gray-400 text-sm">Years of experience</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-[#b0db9c] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">75+</h4>
                  <p className="text-gray-400 text-sm">Villages covered</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-[#b0db9c] flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">4000+</h4>
                  <p className="text-gray-400 text-sm">Hours of work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;