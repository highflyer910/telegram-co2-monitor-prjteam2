import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import DropdownMenu from '../DropdownMenu/DropdownMenu';

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('telegram_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const handleLogout = () => {
    // Remove user data from localStorage
    localStorage.removeItem('telegram_user');
    setUser(null);
    setIsLoggedIn(false);
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="relative w-full z-10" role="banner">
      <div className="relative w-full h-82 md:h-60 flex justify-between items-center">
        <img src={`${process.env.PUBLIC_URL}/header.svg`} alt="GoGreen Header" className="w-full h-full object-cover" style={{ objectFit: 'cover', objectPosition: 'center' }} />
        <Link to="/" className="absolute top-2 left-4">
          <img src={`${process.env.PUBLIC_URL}/yellow-logo.svg`} alt="GoGreen Logo" className="w-16 h-16" />
        </Link>
        <div className="absolute top-4 right-4">
          {isLoggedIn && (
            <button
              onClick={toggleDropdown}
              className="bg-transparent border-0 p-0"
            >
              <img src={`${process.env.PUBLIC_URL}/user-yellow.svg`} alt="Logo" className="w-8 h-8" />
            </button>
          )}
          {isLoggedIn && (
            <div ref={dropdownRef}>
              <DropdownMenu
                isLoggedIn={isLoggedIn}
                user={user}
                handleLogout={handleLogout}
                isDropdownOpen={isDropdownOpen}
              />
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;