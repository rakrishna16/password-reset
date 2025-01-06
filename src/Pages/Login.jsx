import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SiVorondesign } from "react-icons/si";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = ({ setToken, setPasskey }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPass, setShowPass] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const payload = { email, password };
        await axios
            .post("https://password-rest-h7d5.onrender.com/api/auth/login", payload)
            .then((res) => {
                toast.success(res.data.message);
                setToken(res.data.token)
                setPasskey(res.data.passkey)
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message);
            });
        setEmail("");
        setPassword("");
    };

    return (
        <div>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link to={"/"}>
                        <SiVorondesign className="mx-auto h-10 w-auto" />
                        <h2 className="mt-10 text-center text-lg sm:text-2xl/9 font-bold tracking-tight text-gray-900">Login To Your Account</h2></Link>
                </div>
                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
                            <div className="mt-2">
                                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} autoComplete="email" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-semibold text-teal-500 hover:text-gray-900">Forgot password?</Link>
                                </div>
                            </div>
                            <div className="mt-2">
                                <input type={showPass ? "text" : "password"} name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete="current-password" required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6" />
                            </div>
                            <div className="mt-2">
                                <input type="checkbox" onClick={() => setShowPass(!showPass)} className="p-10 checked:bg-teal-500 hover:bg-teal-500 text-gray-900" />{showPass ? " hide" : " show"} password
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-500">Submit</button>
                        </div>

                    </form>
                    <p className="mt-10 text-center text-sm/6 text-gray-500">
                        Not have an account please continue to?
                        <Link to="/" className="font-semibold text-teal-500 hover:text-gray-900"> Register Page</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;