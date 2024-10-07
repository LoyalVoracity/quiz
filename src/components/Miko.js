import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Miko() {
    return (
      <div className='home-background'>
        <div className='info-text'>
        <h1>Miko's Geräteverwaltung :DD</h1>
        </div>
        <Link to="/Geräteverwaltung">
        <button className='buttonGeräte'>Geräteverwaltung</button>
      </Link>
      </div>

    );
  }
  
  export default Miko;
  