
import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import Login from './pages/Login'
import Home from './pages/Home';
import AuthContext from './store/AuthContext';

function App() {

  let navigate = useNavigate();
  let storeUserLoggedInInformation = localStorage.getItem("isLoggedIn");

  const [isLoggedIn, setIsLoggedIn] = useState(storeUserLoggedInInformation)

  useEffect(() => {
    if (storeUserLoggedInInformation === true) {
      setIsLoggedIn(true);
    }
  }, [])

  const loginHandler = (email, password) => {

    localStorage.setItem("isLoggedIn", true)
    setIsLoggedIn(true);
    navigate('/home', { replace: true })

  };


  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn")
  };
  return (
    <>
      <AuthContext.Provider value={{
        onlogout: logoutHandler
      }}>
        <Routes>

          <Route path='/' element={isLoggedIn ? (<Home />) : <Navigate to='/login' />} />

          <Route path='/login' element={<Login onLogin={loginHandler} />} />

          <Route path='/home' element={isLoggedIn ? (<Home />) : <Navigate to='/login' />} />



        </Routes>
      </AuthContext.Provider>
    </>
  );
}

export default App;
