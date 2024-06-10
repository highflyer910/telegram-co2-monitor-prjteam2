import React from 'react';

const EstimatedEmissions = () => {
  return (

    <div className="relative bg-gray-100 min-h-screen overflow-auto flex flex-col">
=
      <img
        src={`${process.env.PUBLIC_URL}/background.svg`}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      <header className="relative w-full z-10">
        <div className="w-full h-82 md:h-40">
          <img
            src={`${process.env.PUBLIC_URL}/header.svg`}
            alt="GoGreen Logo"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <h1 className="font-poppins text-3xl font-bold text-center bg-green-700 text-yellow-200 py-3 px-4 shadow-lg">
          Estimated Emissions
        </h1>
      </header>


      <main className="relative flex flex-col items-center pt-16 md:pt-10 z-10 flex-grow">

        <div className="relative font-body text-3xl bg-yellow-300 font-bold text-green-800 mb-4 mt-0 sm:w-full text-center border-2 border-green-800 py-3 px-4 w-full max-w-xs">
          <img src={`${process.env.PUBLIC_URL}/icon.png`} alt="" className="absolute left-2 w-10 h-10" aria-hidden="true" />
          1 Month
        </div>

        <section className="shadow-md rounded-lg border-2 border-green-800 bg-yellow-300 p-8 mb-8 text-center w-80" aria-labelledby="emissions-amount">
          <p id="emissions-amount" className="font-poppins text-4xl font-bold text-green-800 mb-4">500kg CO2</p>
          <div className="border-t border-green-800 mb-2 mt-6"></div>
          <div className="flex justify-between">
            <button className="font-body text-red-600 font-bold py-2 px-4 rounded-l w-1/2 border-r border-green-800" aria-label="Cancel emission estimation">
              Cancel
            </button>
            <button className="font-body text-blue-800 font-bold py-2 px-4 rounded-r w-1/2 border-l border-green-800" aria-label="Save emission estimation">
              Save
            </button>
          </div>
        </section>

      </main>

      <div className="flex-grow"></div>

      <button className="bg-green-700 font-body z-10 text-yellow-200 w-full max-w-xs py-3 px-8 rounded shadow-md hover:bg-green-800 mb-8 self-center" aria-label="GoGreen">
        GoGreen
      </button>

    </div>
  );
};


export default EstimatedEmissions;

