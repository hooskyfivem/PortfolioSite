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
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        })

        if (error) {
            setError(error.message);
        } else {
            setIsLoggedIn(true);
            navigate('/');
            if (rememberMe) {
                localStorage.setItem('rememberMe', 'true');
            } else {
                localStorage.removeItem('rememberMe');
            }
        }
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
                        {error && <p style={{ color: '#e06070', fontSize: '12px' }}>{error}</p>}
                        <button className="login-btn" onClick={handleLogin}>Sign in</button>
                        <p className="bottom-link">No account? <span onClick={() => navigate('/register')}>Register</span></p>
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
                    </div>
                </div>
            </div>
            {/* <h1> Login to your account </h1> */}
        </div>
        </>
    );
};

export default Login