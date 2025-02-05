import React, { useState } from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';

const CreateCelebrationPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [additionalMessage, setAdditionalMessage] = useState('');
  const [imagePreviews, setImagePreviews] = useState([]);

  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleAdditionalMessageChange = (e) => {
    setAdditionalMessage(e.target.value);
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prevPreviews) => [...prevPreviews, ...newPreviews]);
  };

  const handleImageDelete = (index) => {
    const updatedPreviews = [...imagePreviews];
    updatedPreviews.splice(index, 1);
    setImagePreviews(updatedPreviews);
  };

  const handleSubmit = () => {
    if (!name) {
      alert('이름을 반드시 입력해야 합니다!');
      return;
    }

    // 새로운 축하 카드 데이터 생성
    const newCelebration = {
      username: name,
      preview: message || '생일 축하해요!',
      message: message || '생일 축하해요!',
      additionalMessage,
      imagePreviews,
      createdAt: new Date().toISOString()
    };

    // localStorage에서 기존 데이터 가져오기
    const existingCelebrations = JSON.parse(localStorage.getItem('celebrations') || '[]');
    
    // 새 데이터 추가
    const updatedCelebrations = [...existingCelebrations, newCelebration];
    
    // localStorage에 저장
    localStorage.setItem('celebrations', JSON.stringify(updatedCelebrations));

    // ShowCelebratePage로 이동
    navigate('/showCelebratePage', {
      state: {
        name,
        message: message || '생일 축하해요!',
        additionalMessage,
        imagePreviews
      }
    });
  };
  

  const handleCancel = () => {
    console.log('사이트 생성이 취소되었습니다!');
    navigate('/mainPage')
  };

  return (
    <div className="overflow-x-hidden">
      <header>
        <Header />
      </header>

      <div className="flex flex-col items-start justify-start px-6 py-6 mt-10 ml-20 w-full">
        <h1 className="text-3xl font-bold text-left">축하 대작전!</h1>

        <div className="w-full mt-3">
          <p className="text-left text-gray-500 text-sm mb-10">
            소중한 그대를 위한 웹사이트에 들어갈 정보를 입력해주세요
          </p>

          {/* 이름 작성하기 */}
          <div className="mb-8 flex items-center">
            <label htmlFor="name" className="block text-lg font-semibold text-left mr-4">이름 작성하기</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-1 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-full max-w-lg"
              placeholder="축하 대상자의 이름을 입력해주세요"
            />
          </div>

          {/* 문구 작성하기 */}
          <div className="mb-2 flex items-center">
            <label htmlFor="message" className="block text-lg font-semibold text-left mr-4">문구 작성하기</label>
            <input
              id="message"
              type="text"
              value={message}
              onChange={handleMessageChange}
              className="p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-full max-w-lg"
              placeholder="축하 문구를 입력해주세요"
            />
          </div>
          <p className="text-sm text-gray-500 mt-1 mb-8">
            문구를 작성하지 않으면 '생일 축하해요!'로 자동 제작됩니다.
          </p>

          {/* 추가 문구 작성하기 조건부 렌더링 */}
          {message && (
            <div className="mb-8 flex items-center">
              <label htmlFor="additionalMessage" className="block text-lg font-semibold text-left mr-4">추가 문구 작성하기</label>
              <input
                id="additionalMessage"
                type="text"
                value={additionalMessage}
                onChange={handleAdditionalMessageChange}
                className="mt-1 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-full max-w-lg"
                placeholder="추가 문구를 입력해주세요"
              />
            </div>
          )}

          {/* 문구 미리보기 */}
          <div className="mt-8 w-full flex items-center">
            <h2 className="text-xl font-semibold text-gray-700 mr-4">문구 미리보기</h2>
            <p className="text-lg text-gray-800">
              {name ? `${name} ` : ''}{message ? `${message} ${additionalMessage ? `- ${additionalMessage}` : ''}` : '생일 축하해요!'}
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex justify-start space-x-4 w-full mt-10">
            <button
              onClick={handleSubmit}
              className="py-1 px-4 bg-blue-500 text-white font-bold rounded-md w-60"
            >
              사이트 제작
            </button>
            <button
              onClick={handleCancel}
              className="py-1 px-4 border border-blue-500 text-gray-900 font-bold rounded-md w-60"
            >
              취소
            </button>
          </div>
          <p className="mt-2 text-gray-500 text-sm">임시저장은 불가능합니다.</p>
        </div>
      </div>
    </div>
  );
};

export default CreateCelebrationPage;
