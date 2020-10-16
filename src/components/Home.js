import React from "react";
import './../index.css';
import man from './../images/man.svg';

const Home = () => {
    return (
        <div className="home-container">
            <div className='content-container'>
                <h4 className='welcome-content'>WELCOME TO MY WORLD</h4><br />
                <h1 className='main-content'>Hi, I’m Junaid  👋 </h1>
                <h2 className='skill-content'>( Web Developer | Open Source Contributor )</h2>
                <h1> from Pakistan 🇵🇰</h1>
            </div>

            <div className="svg-container">
                <img className='svg' src={man} alt="" />
            </div>

        </div>
    );
};

export default Home;
