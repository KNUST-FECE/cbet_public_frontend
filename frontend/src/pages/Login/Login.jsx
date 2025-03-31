import React, { useState } from 'react';
import axios from 'axios';
import { logos } from '../../assets/assets';
import{toast} from "react-hot-toast";
import { useNavigate } from 'react-router-dom';
import './Login.css';

const domain = 'https://1e20-154-161-102-63.ngrok-free.app/';

const Login = () => {
    const [indexNumber, setIndexNumber] = useState('');

    const navigate = useNavigate();
   const handleLogin = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post(`${domain}api/users/login`, { indexNumber });
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log('Login successful:', response.data);
        toast.success("Login successful!");
        navigate('/');
    } catch (error) {
        console.error('Login failed:', error.response?.data || error.message);
        toast.error("Login failed. Please try again.");
    }
};


    const [isLoading, setIsLoading] = useState(false);

    return (
        <div className='login-container'>
            <div className="form-container">
                <div className="form-left">
                    <img src={logos.loginImage} alt="Login" />
                </div>
                <div className="form-right">
                    <form className='login-form' onSubmit={async (e) => {
                        setIsLoading(true);
                        await handleLogin(e);
                        setIsLoading(false);
                    }}>
                        <p>Enter your index Number:</p>
                        <input 
                            type="text" 
                            placeholder='Index Number' 
                            required
                            value={indexNumber}
                            onChange={(e) => setIndexNumber(e.target.value)}
                        />
                        <button type="submit" disabled={isLoading}>
                            {isLoading ? 'Logging in...' : 'Login'}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
