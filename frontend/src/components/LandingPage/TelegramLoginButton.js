import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TelegramLoginButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Define the onTelegramAuth function
    window.onTelegramAuth = (user) => {
      console.log('Authenticated user:', user);
      localStorage.setItem('telegram_user', JSON.stringify(user));
      navigate('/dashboard');
    };

    // Load Telegram Login Widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    script.setAttribute('data-telegram-login', 'AnotherCoBot'); // Replace with your bot's username
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', ' https://6c52-2a0b-6204-1911-3900-d527-70b5-ddb-a5af.ngrok-free.app/auth/telegram/callback'); // Replace with your auth URL
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)'); // Use the onTelegramAuth function
    document.getElementById('telegram-login-button-container').appendChild(script);
  }, [navigate]);

  return (
    <div id="telegram-login-button-container">
    </div>
  );
};

export default TelegramLoginButton;
