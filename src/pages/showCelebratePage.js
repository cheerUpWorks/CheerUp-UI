import React from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../component/header';

const ShowCelebratePage = () => {
  const location = useLocation();
  const { name, message, additionalMessage, imagePreviews } = location.state || {};

  return (
    <div>
      <header>
        <Header />
      </header>
      
      <div className="overflow-x-hidden flex items-center justify-center min-h-screen">
        <div className="flex flex-col items-center justify-center px-6 py-6 w-full">
          {/* 축하받는 사람의 이름을 화면 중앙에 크게 표시 */}
          <h1 className="text-5xl font-bold text-center mb-4">{name}</h1>

          {/* 축하 메시지 */}
          <p className="text-2xl font-semibold text-center mb-6">{message || '생일 축하해요!'}</p>

          {/* 추가 메시지 */}
          {additionalMessage && (
            <p className="text-lg text-center text-gray-500 mb-8">{additionalMessage}</p>
          )}

          {/* 텍스트와 사진을 가로로 배치 */}
          <div className="flex flex-row items-center justify-center gap-6 w-full">
            {/* 텍스트 부분 */}
           
          

            {/* 사진 미리보기 */}
            {imagePreviews && imagePreviews.length > 0 && (
              <div className="flex gap-4">
                {imagePreviews.map((preview, index) => (
                  <img
                    key={index}
                    src={preview}
                    alt={`미리보기 ${index + 1}`}
                    className="w-auto h-auto max-w-xs max-h-xs object-contain"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowCelebratePage;
