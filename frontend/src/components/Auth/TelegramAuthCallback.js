import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TelegramAuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const user = {
      id: queryParams.get('id'),
      firstName: queryParams.get('first_name'),
      username: queryParams.get('username'),
      hash: queryParams.get('hash'),
    };

    console.log('User data received:', user);

    if (user.id) {
      localStorage.setItem('telegram_user', JSON.stringify(user));
      navigate('/dashboard');
    } else {
      console.error('User data is missing or invalid');
    }
  }, [navigate]);

  return (
    <div>
      <p>Loading...</p>
    </div>
  );
};

export default TelegramAuthCallback;
