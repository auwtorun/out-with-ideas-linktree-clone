import React from 'react';

const BackButton = () => {
  const text = "Back To Linktree";
  const cursor = "pointer";
  const animation = {
    transform: 'scale(1.05)',
    transition: 'transform 0.1s ease'
  };

  const handleBackClick = () => {
    window.history.back();
  };

  return (
    <button
      className='backbutton'
      style={{ cursor: cursor }}
      onClick={handleBackClick}
      onMouseOver={(e) => {
        e.target.style.transform = animation.transform;
        e.target.style.transition = animation.transition;
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
      }}
    >
      {text}
    </button>
  );
};

export default BackButton;
