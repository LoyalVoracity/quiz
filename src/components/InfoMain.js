import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function InfoMain() {
  return (
      <div className='home-background'>
      <div className='info-text'>
      <h1>Info Main Seite</h1>
      </div>
      <div className='buttons-info'>
      <Link to="/opal-info"><button className='buttonopal'>Opal Info Seite</button></Link>
      <Link to="/opal-quiz"><button>Opal Quiz</button></Link>
      <Link to="/opal-table"><button>Opal Tabelle</button></Link>
      <Link to="/opal-pictures"><button>Opal Bilder</button></Link>
      <Link to="/opal-videos"><button>Opal Videos</button></Link>
      <Link to="/opal-login"><button>Opal Login</button></Link>
      </div>
    </div>
  );
}

export default InfoMain;
