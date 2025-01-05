import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-6 py-4">
      {/* 왼쪽 로고 */}
      <div>
        <img
          src="/logo.png"
          alt="Logo"
          className="mt-5 ml-14 h-8 w-auto"
        />
      </div>

      {/* 오른쪽 로그인 버튼 */}
      <div>
        <button className="bg-blue-500 text-white px-5 py-1 rounded-md hover:bg-blue-600 transition duration-200">
          로그인
        </button>
      </div>
    </header>
  );
};

export default Header;
