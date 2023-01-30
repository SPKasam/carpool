import React from 'react';
import './Intro.css';
import Mountains from './mountains.jpeg';

const Intro = () => {
  return (
    <div className="maindiv">
      <img className = "Mountains" src={Mountains} alt="kitten looking menacing."/>
    </div>
  );
}

export default Intro;
