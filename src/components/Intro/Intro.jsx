import React from 'react';
import './Intro.css';
import Mountains from './blurredmountains.png';

const Intro = () => {
  return (
    <div className="bodydiv">
      <div className='introTitle'>
        <h1 className="textformat">Welcome to Pooly,</h1>
        <h1 className="textformat">the inter-city carpool platform for students</h1>
      </div>
    </div>

    // <div 
    //   style={{ 
    //     backgroundImage:`url(${Mountains})`,
    //     backgroundRepeat:"no-repeat",
        
    //     backgroundAttachment: "fixed",
    //     backgroundPosition: "center center",
    //     width: '60rem',
    //     height: '30rem'
    //   }}>
      // <div className='introTitle'>
      //   <h1 className="textformat">Welcome to Pooly,</h1>
      //   <h1 className="textformat">the inter-city carpool platform for students</h1>
      // </div>

    // </div>

    // <div className="maindiv" style={{ backgroundImage:{Mountains} }}    >
        /* <img src={Mountains} alt="background" /> */
        /* <h1 className='header'>Welcome to Pooly,</h1>
        <h1 className='header2'>the inter-city carpool platform for students</h1> */
    /* </div> */
  );
}

export default Intro;
