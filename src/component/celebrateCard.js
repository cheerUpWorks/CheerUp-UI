import React from 'react';

const Card = ({ username, preview }) => {
  return (
    <div className="w-60 h-20 p-4 bg-white border border-sky-400 rounded-lg">
      {/* "To. OO님" */}
      <div className="mb-2 text-left text-sm text-gray-600">
        To. {username}님
      </div>
      {/* 축하 문구 미리보기 */}
      <div className="text-left text-gray-900 font-bold">
        <p className="truncate">{preview}</p>
      </div>
    </div>
  );
};

export default Card;
