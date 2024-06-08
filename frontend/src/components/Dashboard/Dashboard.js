// src/components/Dashboard/Dashboard.js

import React from 'react';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate();

  const handle1MonthButtonClick = () => {
    // Navigate to the EstimatedEmissions component
    navigate('/estimatedemissions');
  };

  return (
    <div className="relative bg-gray-100 min-h-screen overflow-auto">
      {/* SVG background */}
      <img
        src={`${process.env.PUBLIC_URL}/background.svg`}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Header */}
      <header className="relative w-full z-10">
        <div className="w-full h-82 md:h-60">
          <img
            src={`${process.env.PUBLIC_URL}/header.svg`}
            alt="GoGreen Logo"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <h1 className="font-poppins text-3xl font-bold text-center bg-yellow-400 text-green-800 py-3 px-4 shadow-lg">
          Emissions Impact Dashboard
        </h1>
      </header>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center pt-16 md:pt-6 z-10">
        <p className="font-body text-2xl text-shadow text-bold text-green-950 mb-6 text-center">
          Track your emissions related to your Telegram services usage
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center space-y-3 w-full px-4">
          <button
            className="relative w-full max-w-xs bg-yellow-400 text-green-800 font-body py-2 px-4 rounded border-2 border-green-800 shadow-md hover:bg-yellow-500 flex items-center justify-center"
            onClick={handle1MonthButtonClick}
          >
            <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" className="absolute left-2 w-6 h-6" />
            1 Month
          </button>
          <button
            className="relative w-full max-w-xs bg-yellow-400 text-green-800 font-body py-2 px-4 rounded border-2 border-green-800 shadow-md hover:bg-yellow-500 flex items-center justify-center"
          >
            <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" className="absolute left-2 w-6 h-6" />
            3 Months
          </button>
          <button
            className="relative w-full max-w-xs bg-yellow-400 text-green-800 font-body py-2 px-4 rounded border-2 border-green-800 shadow-md hover:bg-yellow-500 flex items-center justify-center"
          >
            <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" className="absolute left-2 w-6 h-6" />
            6 Months
          </button>
          <button
            className="relative w-full max-w-xs bg-yellow-400 text-green-800 font-body py-2 px-4 rounded border-2 border-green-800 shadow-md hover:bg-yellow-500 flex items-center justify-center"
          >
            <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="Icon" className="absolute left-2 w-6 h-6" />
            1 Year
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
