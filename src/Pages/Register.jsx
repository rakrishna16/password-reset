import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { SiVorondesign } from "react-icons/si";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { name, email, password };
    await axios
      .post("https://password-rest-h7d5.onrender.com/api/auth/register", payload)
      .then((res) => {
        toast.success(res.data.message);
        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="h-full bg-white">
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <SiVorondesign className="mx-auto h-10 w-auto" />
          <h2 className="mt-10 text-center text-lg sm:text-2xl/9 font-bold tracking-tight text-gray-900">Register for a new account</h2>
        </div>
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm/6 font-medium text-gray-900">Enter Name</label>
              <div className="mt-2">
                <input type="text" name="name" id="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
              <div className="mt-2">
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
              </div>
              <div className="mt-2">
                <input type={showPass ? "text" : "password"} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
              </div>
              <div className="mt-2">
                <input type="checkbox" onClick={() => setShowPass(!showPass)} className="p-10 checked:bg-teal-500 hover:bg-teal-500 text-gray-900" />{showPass ? " hide" : " show"} password
              </div>
            </div>
            <div>
              <button type="submit" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Register</button>
            </div>

          </form>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account continue to?
            <Link to="/login" className="font-semibold text-teal-500 hover:text-gray-900"> Login Page</Link>
          </p>
        </div>
      </div>


    </div>
  );
};

export default Register;