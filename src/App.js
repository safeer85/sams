import './App.css';
import LoginPage from './pages/Login/LoginPage.tsx';
import {  Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
        
        <Route path="/" element={<LoginPage />} />
        
        
      </Routes>
  );
}

export default App;
