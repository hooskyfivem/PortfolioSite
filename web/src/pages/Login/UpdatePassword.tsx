import '../../styles/AccountCreation.css';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../supabaseClient';

const UpdatePassword = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const DiscordLink = 'https://discord.gg/7zqTJ4FGcc';

    const handleUpdatePassword = async () => {
        if (!password) {
            setError('Password is required.');
            return;
        }
        if (password.length < 6) {
            setError("Password must be at least 6 characters.");
            return;
        }
        if (password !== confirmPassword) {
            setError("Passwords do not match.");
            return;
        }

        const { error } = await supabase.auth.updateUser({ password });

        if (error) {
            setError(error.message);
        } else {
            setSuccess("Password updated successfully");
            setError('');
            setTimeout(() => navigate('/login'), 2000);
        }
    }

    return (
        <>
        <title>Support - Hoosky Services</title>
        <meta name="description" content="ResetPassword" />
        <div className="login-page-wrapper">
            <div className="page-container">
                <div className="support-container" style={{ height: 'auto' }}>
                    <div className="right-container" style={{ borderRadius: '8px', borderLeft: '2px solid #1B1B1B' }}>
                        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '16px' }}>
                        <div className="logoContainer">
                            <img src="hoosky.png" />
                        </div>
                    </div>
                    <h2 style={{ textAlign: 'center' }}>Reset Password</h2>
                    <p className="subtitle" style={{ textAlign: 'center' }}>Enter your email to receive a reset link</p>
                    <p className="error-message">{error}</p>
                    {success && <p style={{ color: '#4CAF50', fontSize: '12px', margin: 0 }}>{success}</p>}
                    <div className="input-group">
                            <label>New Password <span style={{ color: '#e06070' }}>*</span> <span style={{ float: 'right', color: password.length >= 6 ? '#4CAF50' : '#e06070' }}>{password.length}/6</span></label>
                            <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} />
                    </div>
                        <div className="input-group">
                            <label>Confirm Password <span style={{ color: '#e06070' }}>*</span></label>
                            <input type="password" placeholder="••••••••" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
                        </div>
                    <button className="login-btn" onClick={handleUpdatePassword}>Update Password</button>
                    <p className="bottom-link">Don't want to reset anymore?<span onClick={() => navigate('/login')}> Back to Login</span></p>
                    <p className="bottom-link">Need further support?<span onClick={() => window.open(DiscordLink, '_blank', 'noopener,noreferrer')}> Join our discord!</span></p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default UpdatePassword