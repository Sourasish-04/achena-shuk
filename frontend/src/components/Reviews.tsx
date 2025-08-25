import React from 'react'; // Community Reviews
import { Star } from 'lucide-react';

const Reviews = () => {
  const reviewLink = "https://forms.google.com/review-suggestion-form";

  return (
    <section className="py-20 bg-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Community Reviews</h2>
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`w-6 h-6 ${i < 4 ? 'fill-[#b0db9c] text-[#b0db9c]' : 'fill-[#b0db9c]/50 text-[#b0db9c]/50'}`} />
              ))}
            </div>
            <span className="text-2xl font-semibold text-[#b0db9c]">4.8/5</span>
          </div>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Based on feedback from community members and beneficiaries
          </p>
          
          <a 
            href={reviewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#2e2e2e] hover:bg-[#b0db9c] hover:text-black px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] inline-block"
          >
            Share Your Review or Suggestion
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Maria Garcia",
              location: "Guatemala",
              review: "The clean water project in our village has transformed our daily lives. Thank you for bringing hope to our community!",
              rating: 5
            },
            {
              name: "David Thompson",
              location: "Kenya",
              review: "The education program helped my children get the skills they needed. This organization truly cares about making a difference.",
              rating: 5
            },
            {
              name: "Priya Sharma",
              location: "India",
              review: "The healthcare outreach program provided essential medical care when we needed it most. Incredibly grateful for their work.",
              rating: 5
            }
          ].map((review, index) => (
            <div key={index} className="bg-[#2e2e2e] p-6 rounded-lg hover:shadow-[0_0_30px_rgba(176,219,156,0.6)] transition-all duration-300 transform hover:scale-105">
              <div className="flex space-x-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#b0db9c] text-[#b0db9c]" />
                ))}
              </div>
              <p className="text-gray-300 mb-4 italic">"{review.review}"</p>
              <div>
                <h4 className="font-semibold text-[#b0db9c]">{review.name}</h4>
                <p className="text-gray-400 text-sm">{review.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;