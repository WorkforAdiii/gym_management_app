import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/home';
import Dashboard from './Pages/Dashboard/dashboard';
import Sidebar from './Comp/Sidebar/sidebar';

function App() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const isLogedIn = sessionStorage.getItem("isLogin");
    if (isLogedIn) {
      setIsLogin(true);
      navigate('/dashboard');
    }
  }, [navigate]);

  return (
    <div className='flex'>
      {isLogin && <Sidebar />}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
