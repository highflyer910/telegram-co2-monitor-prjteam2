// src/components/PayPalPurchase/PayPalPurchase.js

import React from 'react';

const PaypalPurchase = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen">
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
        <h1 className="text-3xl font-poppins font-bold text-center bg-green-700 text-yellow-200 py-3 px-4 shadow-lg">
          GoGreen
        </h1>
      </header>

      {/* Main content */}
      <div className="relative flex flex-col items-center justify-center py-10 px-4 z-10">
        <p className="font-body font-bold text-center text-green-800 mb-8 p-4 border-2 border-green-800 max-w-screen-sm">
          Support our environmental initiatives by making a donation or purchasing carbon offsets. Your contribution helps us create a greener world!
        </p>

        {/* PayPal Button */}
        <button className="font-body bg-green-700 text-white text-2xl py-4 px-12 rounded-lg shadow-md hover:bg-green-800">
          Donate with PayPal
        </button>
      </div>
    </div>
  );
};

export default PaypalPurchase;
