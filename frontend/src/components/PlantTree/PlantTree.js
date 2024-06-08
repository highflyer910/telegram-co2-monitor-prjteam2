import React from 'react';

const PlantTree = () => {
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
      <div className="relative flex flex-col items-center justify-center py-12 px-4 z-10">
        <p className="font-body font-bold text-center text-green-800 mb-6 p-4 border-2 border-green-800 max-w-screen-sm">
          We appreciate your wish to engage in the process of taking steps to offset the greenhouse gas emissions caused using your Telegram team services!
        </p>

        <h2 className="font-poppins text-2xl font-bold text-green-800 mb-4">
          START YOUR FOREST HERE
        </h2>

        {/* Buttons */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-8 w-full max-w-screen-md">
          {['Pine', 'Palm', 'Oak', 'Maple', 'Sycamore', 'Ash'].map((tree) => (
            <button
              key={tree}
              className="font-body font-bold relative bg-yellow-400 text-green-800 text-lg py-8 px-4 rounded-lg shadow-md border-2 border-green-800 hover:bg-yellow-500 flex flex-col items-center"
            >
              <img
                src={`${process.env.PUBLIC_URL}/tree.png`}
                alt="Tree Icon"
                className="w-20 h-12 mb-2"
              />
              {tree}
            </button>
          ))}
        </div>

        {/* Plant Button */}
        <button className="font-body w-60 bg-green-700 text-yellow-200 py-2 px-8 rounded-lg shadow-md hover:bg-green-800">
          Plant
        </button>
      </div>
    </div>
  );
};

export default PlantTree;