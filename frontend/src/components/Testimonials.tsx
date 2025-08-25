import React from 'react'; //Voice of our members
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      quote: "We are not born with a specific race, religion, or language, what we are born with that is a hunger...",
      name: "Kalyan Debnath",
      position: "Chairperson",
      Occupation: "Business",
    },
    {
      quote: "Achena Sukh has taught me so much happiness, peace, and satisfaction in standing by the side of helpless people.",
      name: "Laxman Das",
      position: "Vice-Chairperson",
      Occupation: "Ration dealer",
    },
    {
      quote: "Something greater than religion is kindness and service.",
      name: "Soumen Purkait",
      position: "Secretary",
      Occupation: "Pvt Teacher",

    },
    {
      quote: "I dream of an India where no one will be illiterate. No young man will be unemployed. I cannot afford to change the country. I can try to change my own city a little. And that is why, believing in the mantra of service to life through knowledge of Shiva, I have joined Achena Sukh.",
      name: "Saroj Dey",
      position: "Assistant Secretary",
      Occupation: "Govt Teacher",
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Voices of our members</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Together, we can create a brighter future and bring happinessto those who need it most. We promise to use every penny of your donation effectively towards our mission.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-[#1f1f1f] p-6 rounded-lg transform hover:scale-105 transition-all duration-300 hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] relative"
            >
              <Quote className="w-8 h-8 text-[#b0db9c] mb-4 opacity-50" />
              <p className="text-gray-300 mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-[#2e2e2e] pt-4">
                <h4 className="font-semibold text-[#b0db9c] mb-1">{testimonial.name}</h4>
                <p className="text-gray-400 text-sm">{testimonial.position}</p>
                <p className="text-gray-500 text-xs">{testimonial.Occupation}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;