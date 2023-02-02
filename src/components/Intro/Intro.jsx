import React from 'react';
import './Intro.css';
import Mountains from './blurredmountains.png';

const Intro = () => {
  return (
    <div className="maindiv">
        <img src={Mountains} alt="background" />
        <h1 className='header'>Welcome to Pooly,</h1>
        <h1 className='header2'>the inter-city carpool platform for students</h1>
    </div>
  );
}

export default Intro;
