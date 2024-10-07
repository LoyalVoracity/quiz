import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function InfoMain() {
  return (
      <div className='home-background'>
      <div className='info-text'>
      <h1>Das hier ist die Info Main Seite. Klick dich durch.</h1>
      </div>
      <div className='buttons-info'>
      <Link to="/opal-info"><button className='buttonOpal'>Opal Info Seite</button></Link>
      <Link to="/opal-quiz"><button className='buttonCustom'>Opal Quiz</button></Link>
      <Link to="/opal-table"><button className='buttonCustom'>Opal Tabelle</button></Link>
      <Link to="/opal-pictures"><button className='buttonCustom'>Opal Bilder</button></Link>
      <Link to="/opal-videos"><button className='buttonCustom'>Opal Videos</button></Link>
      <Link to="/Honey"><button className='buttonCustom'>Honey</button></Link>
      <Link to="/Miko"><button className='buttonCustom'>Miko</button></Link>
      </div>
    </div>
  );
}

export default InfoMain;
