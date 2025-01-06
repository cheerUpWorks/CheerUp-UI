import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({ username, preview, message, additionalMessage, imagePreviews }) => {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate('/celebrate', {
      state: {
        name: username,
        message: message || preview,
        additionalMessage,
        imagePreviews
      }
    });
  };

  return (
    <div 
      className="h-20 p-4 bg-white border border-sky-400 rounded-lg cursor-pointer hover:bg-gray-50" 
      onClick={handleCardClick}
    >
      <div className="mb-2 text-left text-sm text-gray-600">
        To. {username}
      </div>
      <div className="text-left text-gray-900 font-bold">
        <p className="truncate">{preview}</p>
      </div>
    </div>
  );
};

export default Card;
