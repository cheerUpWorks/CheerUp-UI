import React, { useState, useEffect } from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';
import Card from '../component/celebrateCard'; 

const MainPage = () => {
  const navigate = useNavigate();
  const [celebrations, setCelebrations] = useState([]); 
  const [username, setUsername] = useState(''); 


  useEffect(() => {
    const fetchUsername = () => {
      const dummyUsername = '이예흔'; // 예시로 '홍길동'을 사용
      setUsername(dummyUsername); // 더미 데이터를 상태로 저장
    };

    fetchUsername();

    // localStorage에서 축하 카드 데이터 가져오기
    const fetchData = () => {
      const storedCelebrations = JSON.parse(localStorage.getItem('celebrations') || '[]');
      
      // 기존 더미 데이터와 합치기 (선택사항)
      const mockData = [
        { username: "강은아", preview: "생일 너무 축하해!" },
        { username: "설아 선배님", preview: "졸업추카 취업추카입니다 >.<" },
        { username: "강호야", preview: "해사고 입학 축하해!" },
        { username: "뽀삐뽀삐", preview: "생일 추카행~~" },
      ];

      // 저장된 데이터와 더미 데이터 합치기
      const allCelebrations = [...storedCelebrations, ...mockData];
      setCelebrations(allCelebrations);
    };

    fetchData();
  }, []);

  const handleCreateCelebration = () => {
    navigate('/createCelebrationPage');
  };

  return (
    <div className='overflow-x-hidden'>
      <Header username={username} />

      <div className="flex flex-col items-start justify-center px-20 py-6 mt-8 w-full ml-6">
        <div className="flex items-center mb-6 w-full justify-start">
          <h2 className="text-xl font-semibold text-left mr-4">
            {`${username}님의 축하기록`}
          </h2>
          <button
            onClick={handleCreateCelebration}
            className="ml-4 py-1 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            축하하러 가기
          </button>
        </div>

        <div className="mb-6 text-left w-full">
          <p className="text-sm text-gray-600">모든 웹사이트는 1달 후 자동 폐기됩니다.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-5 w-full">
          {celebrations.map((celebration, index) => (
            <Card
              key={index}
              username={celebration.username}
              preview={celebration.preview}
              message={celebration.message}
              additionalMessage={celebration.additionalMessage}
              imagePreviews={celebration.imagePreviews}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
