import React from 'react';
import TelegramLoginButton from './TelegramLoginButton';

const LandingPage = () => {
  return (
    <div className="relative bg-gray-100 min-h-screen">
      <img
        src={`${process.env.PUBLIC_URL}/background.svg`}
        alt=""
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true" 
      />

      {/* Header */}
      <header className="relative w-full z-10" role="banner">
        <div className="w-full h-82 md:h-60">
          <img
            src={`${process.env.PUBLIC_URL}/header.svg`}
            alt="GoGreen Logo"
            className="w-full h-full object-cover"
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
        </div>
        <h1 className="font-poppins text-3xl font-bold text-center bg-green-700 text-yellow-200 py-3 px-4 shadow-lg">
          Welcome to GoGreen
        </h1>
      </header>

      {/* Main content */}
      <main className="relative flex flex-col items-center justify-center py-16 md:pt-12 z-10" role="main">
        <p className="font-body text-2xl text-shadow text-bold text-green-950 mb-3 text-center">
          Start making a difference today!
        </p>

        {/* Login with Telegram button */}
        <TelegramLoginButton />
      </main>
    </div>
  );
};

export default LandingPage;
