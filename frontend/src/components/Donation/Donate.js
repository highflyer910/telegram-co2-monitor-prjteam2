import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../Header/Header';
import Loading from '../Loading/Loading'; 

const Donate = () => {
  const [donationSuccessful, setDonationSuccessful] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('telegram_user');
    console.log('Stored user:', storedUser);
    if (!storedUser) {
      navigate('/');
    } else {
      try {
        const parsedUser = JSON.parse(storedUser);
        console.log('Parsed user:', parsedUser);
        setUser(parsedUser);
      } catch (error) {
        console.error('Failed to parse user data:', error);
        navigate('/');
      }
    }
  }, [navigate]);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const context = queryParams.get('context');
    const status = queryParams.get('don_status');

    if (context && status === 'success') {
      setDonationSuccessful(true);
    }
  }, [location.search]);

  if (!user) {
    return <Loading />; 
  }

  const handleLogout = () => {
    localStorage.removeItem('telegram_user');
    navigate('/');
  };

  const handleDonate = () => {
    const projectId = 'mgnus-lucus-it';
    const callbackUrl = 'https://gogreenapp.vercel.app/dashboard/donation/callback'; // Replace with your actual callback URL
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);

    const donationUrl = `https://donate.plant-for-the-planet.org/?to=${projectId}&context=don_&frequency=once&callback_url=${encodedCallbackUrl}&callback_method=api`;

    window.open(donationUrl, '_blank');
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
          Support our environmental initiatives by making a donation. Your contribution helps us create a greener world!
        </p>

        <button
          className="font-body bg-green-700 text-white text-2xl py-4 px-12 rounded-lg shadow-md hover:bg-green-800"
          aria-label="Donate with PayPal"
          onClick={handleDonate}
        >
          Donate To Plant Trees
        </button>

        {donationSuccessful && (
          <div className="text-center text-green-800 p-4 border-2 border-green-800 max-w-screen-sm">
            <h2>Donation Successful!</h2>
            <p>Thank you for your donation! Here are the details:</p>
            {/* to add donation details here */}
          </div>
        )}
      </main>
    </div>
  );
};

export default Donate;
