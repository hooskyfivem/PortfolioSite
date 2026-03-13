// import React from 'react';
// import { useState } from 'react';
import { useState, type Dispatch, type SetStateAction } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../supabaseClient';

interface ProfileProps {
    setIsLoggedIn: Dispatch<SetStateAction<boolean>>;
}

const Profile = ({ setIsLoggedIn }: ProfileProps) => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await supabase.auth.signOut();
        localStorage.removeItem('rememberMe')
        setIsLoggedIn(false);
        navigate('/');
    }

    return (
        <>
        <title>Profile - Hoosky Services</title>
        <meta name="description" content="Profile" />
        <div className="page-container">
            <h1> Welcome to your profile </h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
        </>
    );
};

export default Profile