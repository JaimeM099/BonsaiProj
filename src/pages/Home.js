import React from "react";
import './Home.css'

const Home = () => {
    return (
        <div>
            <div className="hero-section">
                <div className="overlay">
                    <div className="hero-content">
                        <h1>The climbing gym where any beginner becomes an expert</h1>
                        <p>Come in and have fun</p>
                        <button className="gym-btn">Join the Gym!</button>
                    </div>
                </div>
            </div>
            <div className="info-section">
                <h2>Welcome to our gym</h2>
                <p>Here we can add more information</p>
            </div>
            <div className="reachout-section">
                <h2>This is to reach out</h2>
                <p>here we can add more information</p>
            </div>
            <div className="end-section">
                <h2>This will be the end of the page</h2>
                <p>Here we can add more information</p>
            </div>
        </div>
    );
};

export default Home;