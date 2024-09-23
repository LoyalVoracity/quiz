import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css'; // Gehe eine Ebene hoch, dann importiere App.css


function Home() {
  console.log('Home-Komponente wird gerendert')
  return (
    <div className='home-background'>
      <div>
      <h1>Willkommen auf der Startseite!</h1>
      <p>Dies ist die Home-Seite deiner App.</p>
      <Link to="/info-main">
        <button>Nächste Seite</button>
      </Link>
      </div>
    </div>
  );
}

export default Home;
