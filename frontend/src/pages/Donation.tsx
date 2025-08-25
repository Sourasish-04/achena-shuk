import React, { useState } from 'react';
import axios from 'axios';
// ...other imports remain the same

const Donation = () => {
  const [form, setForm] = useState({ name: '', email: '', amount: '' });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    try {
      const res = await axios.post('http://localhost:5000/api/donation', form); // Use your backend API endpoint
      setMessage(res.data.message || 'Donation successful!');
      setForm({ name: '', email: '', amount: '' });
    } catch (err) {
      setMessage('Error sending donation');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* ...header code */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6 text-center">Donation Form</h2>
          {message && <div className="mb-4 text-center">{message}</div>}
          <form onSubmit={handleSubmit}>
            {/* Name */}
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-400 mb-2">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Enter your full name"
                className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              />
            </div>
            {/* Email */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-400 mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              />
            </div>
            {/* Amount */}
            <div className="mb-6">
              <label htmlFor="amount" className="block text-gray-400 mb-2">
                Donation Amount
              </label>
              <input
                type="number"
                id="amount"
                value={form.amount}
                onChange={handleChange}
                placeholder="Enter donation amount (e.g., 100)"
                className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#b0db9c] text-black py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
            >
              {loading ? 'Processing...' : 'Donate Now'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Donation;
