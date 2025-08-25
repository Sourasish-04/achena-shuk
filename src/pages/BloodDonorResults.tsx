import React from 'react';
import { useLocation } from 'react-router-dom';

const BloodDonorResults = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);

  const bloodGroup = queryParams.get('bloodGroup');
  const country = queryParams.get('country');
  const state = queryParams.get('state');
  const district = queryParams.get('district');
  const city = queryParams.get('city');

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="max-w-3xl w-full bg-[#1f1f1f] p-8 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold mb-6 text-center">Donor Results</h1>
        <p className="text-lg text-gray-400 mb-4">
          Showing results for:
        </p>
        <ul className="text-lg text-gray-300 space-y-2">
          <li><strong>Blood Group:</strong> {bloodGroup}</li>
          <li><strong>Country:</strong> {country}</li>
          <li><strong>State:</strong> {state}</li>
          <li><strong>District:</strong> {district}</li>
          <li><strong>City:</strong> {city}</li>
        </ul>
      </div>
    </div>
  );
};

export default BloodDonorResults;