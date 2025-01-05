import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/firstPage'; // 첫 번째 페이지
import SignUpPage from'./pages/signUpPage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} /> {/* 첫 번째 페이지 */}
        <Route path="/signUp" element={<SignUpPage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
