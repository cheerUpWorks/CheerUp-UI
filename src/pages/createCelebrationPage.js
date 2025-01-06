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
    console.log('사이트가 생성되었습니다!');
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
          <p className="text-left text-gray-500 text-sm mb-5">
            소중한 그대를 위한 웹사이트에 들어갈 정보를 입력해주세요
          </p>

          {/* 이름 작성하기 */}
          <div className="mb-6 flex items-center">
            <label htmlFor="name" className="block text-lg font-semibold text-left mr-4">이름 작성하기</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-2 mr-80 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-96 ml-auto mr-4"
              placeholder="축하 대상자의 이름을 입력해주세요"
            />
          </div>

          {/* 문구 작성하기 */}
          <div className="mb-6 flex items-center">
            <label htmlFor="message" className="block text-lg font-semibold text-left mr-4">문구 작성하기</label>
            <div className="flex flex-col items-end w-full">
              <input
                id="message"
                type="text"
                value={message}
                onChange={handleMessageChange}
                className="mt-2 mr-80 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-96 mr-4"
                placeholder="축하 문구를 입력해주세요"
              />
              <p className="mt-2 mr-96 text-sm text-gray-500">
                문구를 작성하지 않으면 '생일 축하해요!'로 자동 제작됩니다.
              </p>
            </div>
          </div>

          {/* 추가 문구 작성하기 조건부 렌더링 */}
          {message && (
            <div className="mb-6 flex items-center">
              <label htmlFor="additionalMessage" className="block text-lg font-semibold text-left mr-4">추가 문구 작성하기</label>
              <input
                id="additionalMessage"
                type="text"
                value={additionalMessage}
                onChange={handleAdditionalMessageChange}
                className="mt-2 mr-80 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-96 ml-auto mr-4"
                placeholder="추가 문구를 입력해주세요"
              />
            </div>
          )}

          {/* 사진 등록하기 */}
          <div className="mb-6 flex items-center">
            <label htmlFor="image" className="block text-lg font-semibold text-left mr-2">사진 등록하기</label>

            {/* 사진 등록 버튼과 썸네일을 오른쪽으로 배치 */}
            <div className="flex items-center space-x-4">
              <label 
                htmlFor="imageInput" 
                className="py-1 px-4 mt-2 ml-4 bg-gray-300 text-gray-700 font-bold rounded-md cursor-pointer"
              >
                사진 등록하기
              </label>
              <input
                id="imageInput"
                type="file"
                multiple
                onChange={handleImageChange}
                className="hidden"
              />
              {/* 썸네일 미리보기 */}
              <div className="flex gap-2">
                {imagePreviews.map((preview, index) => (
                  <div key={index} className="relative">
                    <img
                      src={preview}
                      alt={`미리보기 ${index + 1}`}
                      className="w-32 h-32 object-cover rounded-md border border-gray-300"
                    />
                    {/* X 버튼 */}
                    <button
                      onClick={() => handleImageDelete(index)}
                      className="absolute top-0 right-0 bg-gray-400 text-white rounded-full w-4 h-4 flex items-center justify-center m-1"
                    >
                      X
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 문구 미리보기 */}
          <div className="mt-8 w-full flex items-center">
            <h2 className="text-xl font-semibold text-gray-700 mr-4">문구 미리보기</h2>
            <p className="text-lg text-gray-800">
              {message ? `${message} ${additionalMessage ? `- ${additionalMessage}` : ''}` : '생일 축하해요!'}
            </p>
          </div>

          {/* 버튼 */}
          <div className="flex justify-start space-x-4 w-full mt-10">
            <button
              onClick={handleSubmit}
              className="py-1 px-4 bg-blue-500 text-white font-bold rounded-md w-60"
              disabled={!name} // 이름이 없으면 버튼 비활성화
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
