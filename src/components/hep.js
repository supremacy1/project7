import React, { useState } from 'react';
import './ImageChatToggle.css'; // Import your CSS stylesheet

function ImageChatToggle() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className={`image-container ${isHovered ? 'hovered' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        src="your-image.jpg"
        alt="Your Image"
        className={`image ${isHovered ? 'hidden' : ''}`}
      />
      <div className={`chat-text ${isHovered ? '' : 'hidden'}`}>
        This is your chat text.
      </div>
    </div>
  );
}

export default ImageChatToggle;
