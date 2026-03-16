// import React from 'react';
// import { useState } from 'react';
// import { type Dispatch, type SetStateAction } from 'react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import config from '../../config';

interface RegisterProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Register = ({ setIsLoggedIn }: RegisterProps) => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    const handleRegister = async () => {
        setError('');

        if (!username) {
            setError("Username is required.");
            return;
        }
        if (!email) {
            setError("Email is required.")
            return;
        }
        if (!password) {
            setError("Password is required")
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }

        const { data, error } = await supabase.auth.signUp({
            email: email,
            password: password,
            options: {
                data: {
                    username: username,
                }
            }
        });

        if (error) {
            setError(error.message);
            return;
        } 
        
        if (data.user && data.user.identities && data.user.identities.length === 0) {
            setError("An account with this email already exists.")
            return;
        }

        setIsLoggedIn(true);
        navigate('/');
    };

    return (
        <>
        <title>Register - Telvion Systems</title>
        <meta name="description" content="Register" />
        <div className="login-page-wrapper">
            <div className="page-container">
                <div className="login-container register-container">
                    <div className="left-container">
                        <div className="GoBack" onClick={() => navigate('/')}>
                            <i className="fa-regular fa-square-caret-left"></i>
                            <p>Home</p>
                        </div>
                        <div className="brandContainer">
                            <div className="logoContainer">
                                <img src={config.logo}></img>
                                {/* <i className="fas fa-layer-group"></i> */}
                            </div>
                            <p>Telvion</p>
                        </div>
                        <h2>Systems that work. Solutions that scale</h2>
                        <p className="servicesdesc">Full-stack development with premium digital solutions.</p>
                    </div>
                    <div className="right-container">
                        <h2>Register Account</h2>
                        <p className="subtitle">Register a new account</p>
                        <div className="input-group">
                            <label>Username <span style={{color: '#e06070'}}>*</span></label>
                            <input type="username" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Email <span style={{color: '#e06070'}}>*</span></label>
                            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div className="input-group">
                            <label>Password <span style={{color: '#e06070'}}>*</span> <span style={{ float: 'right', color: password.length >= 6 ? '#4CAF50' : '#e06070' }}>{password.length}/6</span></label>
                            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <p className="error-message">{error}</p>
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