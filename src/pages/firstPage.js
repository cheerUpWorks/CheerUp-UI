import React from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/signUp'); 
  };

  return (
    <div>
      {/* 헤더 */}
      <header className="mb-4">
        <Header />
      </header>

      {/* 페이지 내용 */}
      <div className="flex flex-col justify-center items-center px-6 py-4 mt-40">
        {/* 해시태그 */}
        <div className="text-center mb-4 text-blue-500 font-bold text-xl">
          <span>#친구</span>
          <span className="ml-4">#가족</span>
          <span className="ml-4">#동료</span>
          <span className="ml-4">#선배</span>
          <span className="ml-4">#후배</span>
        </div>

        {/* 본문 */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-4 text-center">
          나의 소중한 사람들에게<br />잊지 못할 기억을 선물해요!
        </h1>

        {/* 로고 */}
        <img src="/logo.png" alt="Logo" className="h-24 w-auto mb-6" />

        {/* 시작하기 버튼 */}
        <button
          onClick={handleStartClick}
          className="bg-blue-500 text-white px-16 py-3 mt-3 rounded-lg text-lg transition duration-200"
        >
          지금 시작하기
        </button>
      </div>
    </div>
  );
};

export default FirstPage;
