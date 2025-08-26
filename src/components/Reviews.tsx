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
              name: "Swapan Roy",
              location: "Kakdwip",
              review: "True humanity develops only when we learn to listen to the cries of living people, learn to stand by their side. Otherwise, the curse of emptiness will make us cry again and again, but then maybe there will be no one to hear our cries!The light of humanity still survives in society because of the Achena Sukh of Kakdwip or such exceptional organizations. When the family, society or the state fails to listen to the cries of living people, some people come forward with selfless love.These organizations are like silent poems of humanity - where the dead will be bowed in respect, but the main goal will be to alleviate the suffering of living people. They understand that not only oxygen is needed to survive, but also love, compassion and empathy.",
              rating: 5
            },
            {
              name: "Sujit Mintu Saha",
              location: "Kakdwip",
              review: "In this way, everyone should celebrate their special days by donating one meal a day to these hungry people, Achena Sukh is ready to provide you with all kinds of support.",
              rating: 5
            },
            {
              name: "Santanu Das",
              location: "Kakdwip",
              review: "Very nice plan, this kind of non profit organization is not often seen,",
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