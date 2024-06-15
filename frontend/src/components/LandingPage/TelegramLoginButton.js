import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const TelegramLoginButton = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.onTelegramAuth = (user) => {
      console.log('Authenticated user:', user);
      localStorage.setItem('telegram_user', JSON.stringify(user));
      navigate('/dashboard');
    };

    // Load Telegram Login Widget script
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-widget.js?7';
    script.async = true;
    script.setAttribute('data-telegram-login','co2usage_bot');
    script.setAttribute('data-size', 'large');
    script.setAttribute('data-auth-url', 'https://gogreenapp.vercel.app/auth/telegram/callback'); // Replace with your auth URL
    script.setAttribute('data-request-access', 'write');
    script.setAttribute('data-onauth', 'onTelegramAuth(user)');
    document.getElementById('telegram-login-button-container').appendChild(script);
  }, [navigate]);

  return (

    <div id="telegram-login-button-container">
    </div>

    <button

      id="telegram-login-button" className="font-body bg-blue-900 hover:bg-blue-950 text-white w-80 text-xl mt-3 py-2 px-6 rounded-md focus:outline-none focus:shadow-outline focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"

      onClick={handleLogin}
      aria-label="Login with Telegram"
    >
      Login with Telegram
    </button>

  );
};

export default TelegramLoginButton;
