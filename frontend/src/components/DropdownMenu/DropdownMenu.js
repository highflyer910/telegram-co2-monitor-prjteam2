// DropdownMenu.js
import React, { useState } from 'react';
import Modal from './LogoutModal';

const DropdownMenu = ({ isLoggedIn, user, isDropdownOpen }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleLogoutClick = () => {
    setModalOpen(true);
  };

  const handleConfirmLogout = () => {
    localStorage.removeItem('telegram_user');
    setModalOpen(false);
    window.location.reload();
  };

  const handleCancelLogout = () => {
    setModalOpen(false);
  };

  return (
    <div className={`absolute top-12 right-4 bg-yellow-300 rounded-md shadow-lg ${isDropdownOpen ? 'block' : 'hidden'}`}>
      {isLoggedIn && user && (
        <div className="flex flex-col items-start p-4">
          <span className="mb-2 font-body font-bold text-center text-green-900">{user.first_name}</span>
          <span className="mb-2 font-body text-green-900">{user.username}</span>
          <button onClick={handleLogoutClick} className="text-green-900 hover:text-green-950">
            Log Off
          </button>
        </div>
      )}
      <Modal
        isOpen={isModalOpen}
        title="Log Off"
        message="Please log out from the Telegram app to completely terminate your session."
        onConfirm={handleConfirmLogout}
        onCancel={handleCancelLogout}
      />
    </div>
  );
};

export default DropdownMenu;
