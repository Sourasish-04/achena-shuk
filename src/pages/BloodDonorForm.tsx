import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BloodDonorForm = () => {
  const [formData, setFormData] = useState({
    bloodGroup: '',
    country: '',
    state: '',
    district: '',
    city: '',
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to the results page with form data as query parameters
    const queryParams = new URLSearchParams(formData).toString();
    navigate(`/blood-donor-results?${queryParams}`);
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-lg w-full bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Find a Blood Donor</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="bloodGroup" className="block text-gray-400 mb-2">Blood Group</label>
            <select
              id="bloodGroup"
              name="bloodGroup"
              value={formData.bloodGroup}
              onChange={handleChange}
              className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="mb-4">
            <label htmlFor="country" className="block text-gray-400 mb-2">Country</label>
            <input
              type="text"
              id="country"
              name="country"
              value={formData.country}
              onChange={handleChange}
              placeholder="Enter your country"
              className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="state" className="block text-gray-400 mb-2">State</label>
            <input
              type="text"
              id="state"
              name="state"
              value={formData.state}
              onChange={handleChange}
              placeholder="Enter your state"
              className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="district" className="block text-gray-400 mb-2">District</label>
            <input
              type="text"
              id="district"
              name="district"
              value={formData.district}
              onChange={handleChange}
              placeholder="Enter your district"
              className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="city" className="block text-gray-400 mb-2">City</label>
            <input
              type="text"
              id="city"
              name="city"
              value={formData.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full bg-[#2e2e2e] border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#b0db9c] focus:ring-1 focus:ring-[#b0db9c] transition-all duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#b0db9c] text-black py-3 rounded-lg font-semibold hover:bg-white transition-all duration-300 transform hover:scale-105"
          >
            Search Donors
          </button>
        </form>
      </div>
    </div>
  );
};

export default BloodDonorForm;