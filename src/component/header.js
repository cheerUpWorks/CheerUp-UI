import React from "react";
import { useNavigate } from 'react-router-dom';
const Header = ({ username }) => {
const navigate = useNavigate();

const handleStartClick = () => {
    navigate('/mainPage'); 
  };
  
  return (
    <header className="flex justify-between items-center px-6 py-4">
      {/* 왼쪽 로고 */}
      <div>
        <img
          src="/logo.png"
          alt="Logo"
          className="mt-5 ml-14 h-8 w-auto"
          onClick={handleStartClick}
        />
      </div>

      {/* 오른쪽 영역 */}
      <div className="flex items-center">
        {/* 로그인 상태 메시지 */}
        {username && (
          <span className="text-gray-700 text-sm mr-4">
            {username} 님 환영해요!
          </span>
        )}

        <button className="border border-blue-500 text-black bg-white px-5 py-1 mr-4 rounded-md transition duration-200 w-32">
          회원가입
        </button>
        <button className="bg-blue-500 text-white px-5 py-1 mr-10 rounded-md transition duration-200 w-32">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
