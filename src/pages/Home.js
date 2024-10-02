import React from "react";
import './Home.css'

const Home = () => {
    return (
            <div className="hero-section">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>The climbing gym where any beginner becomes an expert</h1>
                        <p>Come in and have fun</p>
                        <button className="gym-btn">Join the Gym!</button>
                    </div>
                </div>
            </div>
    );
};

export default Home;