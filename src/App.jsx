import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Login from './Pages/Login';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <NavBar />
        </div>
        <Routes>
          <Route path='/' element={<Register />} />
          <Route path='/Login' element={<Login />} />
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