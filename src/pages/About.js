import React from "react";
import './About.css';

const About = () => {
    return (

        <div className="about">
            <div class="container">
            <link rel="stylesheet" type="text/css" href="About.css"></link>
            <div class="background">
                <div class="overlay"></div>
                    <h1>Welcome to Bonsai </h1>
                        <div> 
                            <p class="intro-paragraph"> <br></br> Here, we break the mold of traditional climbing with our new style competition 
                        climbing that’s designed to be as fun for beginners as it is exhilarating for seasoned climbers.
                            </p>
                        </div>    
                        
                            <div class="info-section1">
                                <h2>What We Offer:</h2>
                                <div>
                                    <div class="restof-paragraph"><b> Competition Climbing </b> <br></br> Our walls are tailored to offer a variety of dynamic routes that keep everyone engaged and coming back for more. </div>
                                    <div class="background-comp"></div>
                                    <div class="restof-paragraph"><b> Gym Facilities </b> <br></br> In addition to climbing, we offer a fully equipped small gym to complement your fitness regime.</div>
                                    <div class="background-gym"></div>
                                    <div class="restof-paragraph"><b> Yoga & Studio</b> <br></br> Serene yoga studio, where tranquility and community unite to enhance your wellness journey. </div>
                                    <div class="background-yoga" ></div>
                                </div>

                                <h2> Ready to Conquer?</h2>
                                <p class="restof-paragraph"> Join our community at Bonsai Climbing Gym—where every climb is a new adventure, and every member is part of the family. </p>
                                <p class="bottom-paragraph">At Bonsai, climbing isn't just a sport, it’s an experience. </p>
                    

                            </div>
                    </div>
                
            </div>
        
        </div>


        
    
    );
};

export default About;

