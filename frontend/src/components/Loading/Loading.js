import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <img src={`${process.env.PUBLIC_URL}/loader.gif`} alt="Loading" className="w-16 h-16" />
    </div>
  );
};

export default Loading;
