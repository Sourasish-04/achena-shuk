import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Donation = () => {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Make a Donation</h1>
          <p className="text-xl text-gray-400">
            Your contribution can make a difference in someone's life.
          </p>
        </div>
      </div>

      {/* Donation Form */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Donation Form</h2>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your full name"
                className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email address"
                className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="amount" className="block text-gray-400 mb-2">
                Donation Amount
              </label>
              <input
                type="number"
                id="amount"
                placeholder="Enter donation amount (e.g., 100)"
                className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#b0db9c] text-black py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              Donate Now
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;