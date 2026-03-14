// import React from 'react';
// import { useState } from 'react';
import '../../styles/AccountCreation.css';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

interface LoginProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Login = ({ setIsLoggedIn }: LoginProps) => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleLogin = async () => {
        setError('');

        if (!email) {
            setError("Email is required");
            return;
        }
        if (!password) {
            setError("Password is required");
            return;
        }

        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            setError(error.message);
            return;
        } 
        
        if (rememberMe) {
            localStorage.setItem('rememberMe', 'true');
        } else {
            localStorage.removeItem('rememberMe');
        }
        
        setIsLoggedIn(true);
        navigate('/');
    }

    return (
        <>
        <title>Login - Hoosky Services</title>
        <meta name="description" content="Login" />
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
                        <h2>Welcome back</h2>
                        <p className="subtitle">Sign in to your account</p>
                        <div className="input-group">
                            <label>Email</label>
                            <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)}/>
                        </div>
                        <div className="input-group">
                            <label>Password</label>
                            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <p className="error-message">{error}</p>
                        <button className="login-btn" onClick={handleLogin}>Sign in</button>
                        <div className="input-group" style={{ flexDirection: 'row', alignItems: 'center', gap: '8px' }}>
                            <input 
                                type="checkbox" 
                                id="rememberMe"
                                checked={rememberMe}
                                onChange={e => setRememberMe(e.target.checked)}
                                style={{ width: 'auto', height: 'auto' }}
                            />
                            <label htmlFor="rememberMe" style={{ margin: 0 }}>Remember me</label>
                        </div>
                        <p className="bottom-link">No account? <span onClick={() => navigate('/register')}>Register</span></p>
                        <p className="bottom-link">Forgot your password? <span onClick={() => navigate('/resetpassword')}>Reset Password</span></p>
                    </div>
                </div>
            </div>
            {/* <h1> Login to your account </h1> */}
        </div>
        </>
    );
};

export default Login