import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

const PaypalPurchase = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem('telegram_user');
    if (!storedUser) {
      navigate('/');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('telegram_user');
    navigate('/');
  };

  return (
    <div className="relative bg-gray-100 min-h-screen">
      <img
        src={`${process.env.PUBLIC_URL}/background.svg`}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      />

      <Header handleLogout={handleLogout} />

      <main className="relative flex flex-col items-center justify-center py-10 md:pt-0 pt-0">
        <h1 className="text-3xl font-poppins font-bold text-center bg-green-700 text-yellow-200 py-3 shadow-lg">
          GoGreen
        </h1>
        <p className="font-body text-center text-green-800 m-8 p-4 border-2 border-green-800 max-w-screen-sm">
          Support our environmental initiatives by making a donation or purchasing carbon offsets. Your contribution helps us create a greener world!
        </p>

        <button
          className="font-body bg-green-700 text-white text-2xl py-4 px-12 rounded-lg shadow-md hover:bg-green-800"
          aria-label="Donate with PayPal"
        >
          Donate with PayPal
        </button>
      </main>
    </div>
  );
};

export default PaypalPurchase;