import React from 'react';
import { Link } from 'react-router-dom';

function InfoMain() {
  return (
    <div>
      <h1>Info Main Seite</h1>
      <Link to="/opal-info"><button>Opal Info Seite</button></Link>
      <Link to="/opal-quiz"><button>Opal Quiz</button></Link>
      <Link to="/opal-table"><button>Opal Tabelle</button></Link>
      <Link to="/opal-pictures"><button>Opal Bilder</button></Link>
      <Link to="/opal-videos"><button>Opal Videos</button></Link>
      <Link to="/opal-login"><button>Opal Login</button></Link>
    </div>
  );
}

export default InfoMain;
