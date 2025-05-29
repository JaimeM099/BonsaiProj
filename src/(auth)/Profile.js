import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"
import './Profile.css';

const Profile = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUserData = async () => {
            const token = localStorage.getItem('authToken');
            if (!token) return;

            try {
                const response = await axios.get("http://localhost:5000/api/auth/profile", {
                    headers: { Authorization: `Bearer ${token}` },
                });
                setUser(response.data);
            } catch (error) {
                console.error("Profile fetching user data.", error);
            }
        };

        fetchUserData();
    }, []);

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("user");
        navigate("/login");
    }

    return (
         <div>
        <h1 className="Welcome">Welcome!</h1>
        {user && (
            <>
                <p>{user.name}</p>
                <p>{user.email}</p>
                <button onClick={handleLogout}>Log Out</button>
            </>
        )}
    </div>
    );
};

export default Profile;