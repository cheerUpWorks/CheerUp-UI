import React from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';

const FirstPage = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    navigate('/signUp'); // 클릭 시 /second 경로로 이동
  };

  return (
    <div>
        <header>
            <Header/>
        </header>
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-6 py-4">
        
        {/* 해시태그 */}
        <div className="text-center mb-6 text-blue-500 font-bold text-xl">
            <span className="">#친구</span>
            <span className="ml-4"> #가족</span>
            <span className="ml-4"> #동료</span>
            <span className="ml-4"> #선배</span>
            <span className="ml-4"> #후배</span>
        </div>

        {/* 본문 */}
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">나의 소중한 사람들에게<br/>잊지 못할 기억을 선물해요!</h1>

        {/* 로고 */}
        <img src="/logo.png" alt="Logo" className="h-24 w-auto mb-6" />

        {/* 시작하기 버튼 */}
        <button
            onClick={handleStartClick}
            className="bg-blue-500 text-white px-16 py-3 mt-3 rounded-lg text-lg hover:bg-green-600 transition duration-200"
        >
                 지금 시작하기
            </button>
        </div>
    </div>
  );
};

export default FirstPage;
