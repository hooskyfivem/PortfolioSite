import '../../styles/AccountCreation.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';
import config from '../../config';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleReset = async () => {
        setError('');
        setSuccess('');

        if (!email) {
            setError("Email is required")
            return;
        }

        const { error } = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: config.redirectResetBrowser,
        });

        if (error) {
            setError(error.message);
            return
        }

        setSuccess("Check your email for a password reset link.");
    };

    return (
        <>
        <title>Support - Telvion Systems</title>
        <meta name="description" content="ResetPassword" />
        <div className="login-page-wrapper">
            <div className="page-container">
                <div className="support-container">
                    <div className="reset-right-container">
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        <div className="logoContainer">
                            <img src={config.logo} />
                            {/* <i className="fas fa-layer-group"></i> */}
                        </div>
                    </div>
                    <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
                    <p className="subtitle" style={{ textAlign: 'center' }}>Enter your email to receive a reset link</p>
                    <p className="error-message">{error}</p>
                    {success && <p style={{ color: '#4CAF50', fontSize: '12px', margin: 0 }}>{success}</p>}
                    <div className="input-group">
                        <label>Email <span style={{ color: '#e06070' }}>*</span></label>
                        <input type="email" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <button className="login-btn" onClick={handleReset}>Reset Password</button>
                    <p className="bottom-link">Back to <span onClick={() => navigate('/login')}>Login</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default ResetPassword