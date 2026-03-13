// import React from 'react';
// import { useState } from 'react';
// import { type Dispatch, type SetStateAction } from 'react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

interface RegisterProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Register = ({ setIsLoggedIn }: RegisterProps) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleRegister = async () => {
        const { error } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) {
            setError(error.message);
        } else {
            setIsLoggedIn(true);
            navigate('/');
        }
    };

    return (
        <>
        <title>Register - Hoosky Services</title>
        <meta name="description" content="Register" />
        <div className="login-page-wrapper">
            <div className="page-container">
                <div className="login-container">
                    <div className="left-container">
                        <div className="brandContainer">
                            <div className="logoContainer">
                                <img src="hoosky.png"></img>
                                {/* <i className="fas fa-layer-group"></i> */}
                            </div>
                            <p>Hoosky</p>
                        </div>
                        <h2>Trusted developer services</h2>
                        <p className="servicesdesc">Premium scripts, bots, and digital solutions</p>
                    </div>
                    <div className="right-container">
                        <h2>Register Account</h2>
                        <p className="subtitle">Register a new account</p>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        {error && <p style={{ color: '#e06070', fontSize: '12px' }}>{error}</p>}
                        <button className="login-btn" onClick={handleRegister}>Register</button>
                        <p className="bottom-link">Already have an account? <span onClick={() => navigate('/login')}>Login</span></p>
                    </div>
                </div>
            </div>
            {/* <h1> Login to your account </h1> */}
        </div>
        </>
    );
};

export default Register