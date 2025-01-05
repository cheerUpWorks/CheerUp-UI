import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FirstPage from './pages/firstPage'; // 첫 번째 페이지
import SignUpPage from'./pages/signUpPage'; 
import LoginPage from './pages/loginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<FirstPage />} /> {/* 첫 번째 페이지 */}
        <Route path="/signUp" element={<SignUpPage/>}/>
        <Route path="/login" element={<LoginPage/>}/> 
      </Routes>
    </Router>
  );
}

export default App;
