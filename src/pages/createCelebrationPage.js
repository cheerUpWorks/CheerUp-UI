import React, { useState } from 'react';
import Header from '../component/header';

const CreateCelebrationPage = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [previewMessage, setPreviewMessage] = useState('생일 축하해요!');
  const [image, setImage] = useState(null);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
    setPreviewMessage(e.target.value || '생일 축하해요!');
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = () => {
    // 사이트 생성 로직 구현
    console.log('사이트가 생성되었습니다!');
  };

  const handleCancel = () => {
    // 취소 버튼 로직
    console.log('사이트 생성이 취소되었습니다!');
  };

  return (
    <div className='overflow-x-hidden'>
      <header>
        <Header/>
      </header>

      <div className="flex flex-col items-start justify-start px-6 py-6 mt-10 ml-20 w-full">
        <h1 className="text-3xl font-bold text-left">축하 대작전!</h1>

        {/* 본문 */}
        <div className="w-full mt-3">
          <p className="text-left text-gray-500 text-sm mb-5">
            소중한 그대를 위한 웹사이트에 들어갈 정보를 입력해주세요
          </p>

          {/* 이름 작성하기 */}
          <div className="mb-6 flex items-center">
            <label htmlFor="name" className="block text-lg font-semibold text-left mr-2">이름 작성하기</label>
            <input
              id="name"
              type="text"
              value={name}
              onChange={handleNameChange}
              className="mt-2 ml-80 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-96"
              placeholder="축하 대상자의 이름을 입력해주세요"
            />
          </div>

          {/* 문구 작성하기 */}
          
            <div className="mb-6 flex items-center">
              <label htmlFor="message" className="block text-lg font-semibold text-left mr-2">문구 작성하기</label>
            
            <div className=''>
              <input
                id="message"
                type="text"
                value={message}
                onChange={handleMessageChange}
                className="mt-2 ml-80 p-2 bg-sky-100 text-gray-700 border border-gray-300 rounded-md w-96"
                placeholder="축하 문구를 입력해주세요"
              />
               <p className="ml-80 mt-2 text-sm text-gray-500">
              문구를 작성하지 않으면 '생일 축하해요!'로 자동 제작됩니다.
          </p>
            </div>
          </div>


          {/* 문구 미리보기 */}
          <div className="mb-6 flex items-center">
            <h3 className="text-lg font-semibold text-left mr-2 whitespace-nowrap">문구 미리보기</h3>
            <p className="mt-2 ml-8 p-4 rounded-md w-full">{previewMessage}</p>
          </div>


          {/* 사진 등록하기 */}
          <div className="mb-6 flex items-center">
            <label htmlFor="image" className="block text-lg font-semibold text-left mr-2">사진 등록하기</label>
            <input
              id="image"
              type="file"
              onChange={handleImageChange}
              className="mt-2 ml-10 p-2 w-80 bg-sky-100 text-gray-700 border border-gray-300 rounded-md"
            />
          </div>

          {/* 사이트 제작 및 취소 버튼 */}
          <div className="flex justify-start space-x-4 w-full mt-10">
            <button
                onClick={handleSubmit}
                className="py-1 px-4 bg-sky-500 text-white font-bold rounded-md w-60"
            >
                사이트 제작
            </button>
            <button
                onClick={handleCancel}
                className="py-1 px-4 border border-sky-500 text-gray-900 font-bold rounded-md w-60"
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
