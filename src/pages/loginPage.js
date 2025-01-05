import React, { useState } from 'react';
import Header from '../component/header';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUpRedirect = () => {
    navigate('/signup');
  };

  const handleLogin = () => {
    // 로그인 처리 로직 추가 (예: 인증 API 호출)
    // 로그인 성공 시
    navigate('/mainPage');
  };

  return (
    <div>
      {/* 헤더 */}
      <header className="mb-4">
        <Header />
      </header>

      {/* 메인 컨텐츠 */}
      <div className="flex flex-col items-center justify-center px-4 py-6 mt-20">
        {/* 설명글 */}
        <div className="text-center mb-6">
          <h2 className="text-xl font-semibold">내 소중한 사람들을 위한 비밀 축하 대작전</h2>
        </div>

        {/* 로고 */}
        <div className="mb-6">
          <img src="./logo.png" alt="Logo" className="h-10 w-auto" />
        </div>

        {/* 로그인 문구 */}
        <div className="mb-6 text-center">
          <p className="text-lg text-gray-700">
            이미 계정이 있으신가요? 로그인하여 특별한 선물을 만들어보세요.
          </p>
        </div>

        {/* 입력 폼 */}
        <div className="w-96 p-4 rounded-lg">
          <div className="mb-4">
            <input
              type="email"
              placeholder="이메일을 입력해주세요."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-blue-100 text-gray-600"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="비밀번호를 입력해주세요."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md bg-blue-100 text-gray-600"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            로그인
          </button>
        </div>

        {/* 회원가입 페이지로 이동 링크 */}
        <div className="mt-4 text-center">
          <span className="text-sm">
            계정이 없으신가요?{' '}
            <span
              className="text-blue-500 cursor-pointer font-bold underline"
              onClick={handleSignUpRedirect}
            >
              회원가입
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
