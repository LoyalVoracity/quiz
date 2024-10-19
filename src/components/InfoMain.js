import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import '../InfoMain.css';


function InfoMain() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoneyVisible, setIsHoneyVisible] = useState(true);


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
          <button className='buttonHoney' onMouseEnter={() => setIsHovered(true)}>
            Honey
          </button>
        </Link>
        <Link to="/Miko"><button className='button7'>Miko</button></Link>
      </div>
    </div>
  );
}


export default InfoMain;
