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
      const dummyUsername = '홍길동'; // 예시로 '홍길동'을 사용
      setUsername(dummyUsername); // 더미 데이터를 상태로 저장
    };

    fetchUsername();

    // 임시 데이터 (API 데이터로 대체 예정)
    const fetchData = () => {
      const mockData = [
        { username: "OO", preview: "축하해요! 당신의 특별한 날을 기념합니다." },
        { username: "JJ", preview: "행복한 축하의 메시지를 전합니다!" },
        { username: "YY", preview: "오늘 당신의 기쁨을 함께 나누어요!" },
        { username: "BB", preview: "소중한 순간을 함께 축하해요!" },
        { username: "SS", preview: "새로운 시작을 축하합니다!" },
      ];

      setCelebrations(mockData); 
    };

    fetchData();
  }, []);

  const handleCreateCelebration = () => {
    navigate('/createCelebrationPage');
  };

  return (
    <div className='overflow-x-hidden'>
      <header className="mb-4">
        {/* Header 컴포넌트에 username을 prop으로 전달 */}
        <Header username={username} />
      </header>

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col items-start justify-center px-20 py-6 mt-20 w-full ml-6">
        {/* 축하 기록 */}
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

        {/* 자동 폐기 문구 */}
        <div className="mb-6 text-left w-full">
          <p className="text-sm text-gray-600">모든 웹사이트는 1달 후 자동 폐기됩니다.</p>
        </div>

        {/* 카드 리스트 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-1 gap-y-5 w-full">
          {celebrations.map((celebration, index) => (
            <Card
              key={index}
              username={celebration.username}
              preview={celebration.preview}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainPage;
