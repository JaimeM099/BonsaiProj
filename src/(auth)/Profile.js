import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) {
                navigate('/login'); //redirect to login if there is not token
                return;
            }

            try {
                const response = await axios.get("http://localhost:5000/api/auth/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setUser(response.data);
                localStorage.setItem('user', JSON.stringify(response.data)); //Update the localStorage with user data
            } catch (error) {
                console.error("Profile fetch error.", error);
                setError('Failed to fetch profile. Please try again.');
                localStorage.removeItem('authToken');
                localStorage.removeItem('user');
                navigate('/login'); //Will redirect to login on error
            }
        };

        fetchProfile();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        localStorage.removeItem('user');
        navigate('/login');
    }

    return (
        <div>
            <h1>Profile page yay</h1>
            {error && <p>{error}</p>}
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout}>Log Out</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Profile;