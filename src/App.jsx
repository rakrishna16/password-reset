import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import { ToastContainer } from 'react-toastify';

const App = () => {

  const [token ,setToken] = useState('')

  return (
    <div>
      <div>
      <ToastContainer />
     </div>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Login' element={<Login setToken={setToken}/>} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/reset-password/:id/:token" element={<ResetPassword />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;