import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Gehe eine Ebene hoch, dann importiere App.css


function Home() {
  console.log('Home-Komponente wird gerendert')
  return (
    <div className='home-background'>
      <div className='startcontainer'>
        <div className='starttext'>
      <h1>Willkommen auf der Startseite!</h1>
      <p>Diese Seite ist an Opal gerichtet</p>
      </div>
      <Link to="/info-main">
        <button>Navigations Seite</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
