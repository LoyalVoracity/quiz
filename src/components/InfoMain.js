import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Eye1 from '../pictures/eye1.png'

function InfoMain() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoneyVisible, setIsHoneyVisible] = useState(true);
  const [showImage, setShowImage] = useState(false); // For image display

  useEffect(() => {
    let timer;
    if (isHovered) {
      // Start a 3-second timer when hovered
      timer = setTimeout(() => {
        setIsHoneyVisible(false);  // Hide the button after 3 seconds
      }, );
    }

    // Cleanup the timer when hover stops or component unmounts
    return () => clearTimeout(timer);
  }, [isHovered]);

  return (
    <div className='home-background'>
      <div className='info-text'>
        <h1>Info Main Site</h1>
      </div>
      <div className='buttons-info'>
        <Link to="/opal-info"><button className='buttonOpal'>Opal Info Seite</button></Link>
        <Link to="/opal-quiz"><button className='button2'>Opal Quiz</button></Link>
        <Link to="/opal-table"><button className='button3'>Opal Tabelle</button></Link>
        <Link to="/opal-pictures"><button className='button4'>Opal Bilder</button></Link>
        <Link to="/opal-videos"><button className='button5'>Opal Videos</button></Link>

        <Link to="/Honey">
          <button
            className='buttonHoney'
            onMouseEnter={() => setIsHovered(true)}
          >
            Honey
          </button>
        </Link>

        {isHovered && <span className='hover-text'>I love you Honey</span>}

        <Link to="/Miko"><button className='button7'>Miko</button></Link>

        {/* This text will disappear after 3 seconds */} 
        {isHoneyVisible && <span className='hover-text-honey' onMouseEnter={() => setIsHovered(true)}>hover me my love</span>}

        {/* Image appears when hovered */}
        {isHoneyVisible && <span className='love'></span>}

      </div>
    </div>
  );
}

export default InfoMain;
