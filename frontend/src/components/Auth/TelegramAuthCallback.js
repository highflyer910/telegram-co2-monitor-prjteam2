// TelegramAuthCallback.js

import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TelegramAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Handle authentication callback from Telegram
    const queryParams = new URLSearchParams(window.location.search);
    const userId = queryParams.get('id'); // Example: Retrieve user ID from query parameters

    // Perform any authentication-related actions here, such as storing user information in localStorage, etc.
    console.log('User ID:', userId);

    // Redirect to the desired page after authentication (e.g., Dashboard)
    navigate('/dashboard');
  }, [navigate]);

  return (
    <div>
      <p>Handling Telegram authentication callback...</p>
    </div>
  );
};

export default TelegramAuthCallback;
