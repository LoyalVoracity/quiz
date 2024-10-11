import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Eye1 from '../pictures/eye1.png';
import Eye2 from '../pictures/eye2.png';
import Eye3 from '../pictures/eye3.png';
import Eye4 from '../pictures/eye4.png';
import Eye5 from '../pictures/eye5.png';
import Eye6 from '../pictures/eye6.png';
import Eye7 from '../pictures/eye7.png';
import Eye8 from '../pictures/eye8.png';

function InfoMain() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHoneyVisible, setIsHoneyVisible] = useState(true);
  const [startAnimation, setStartAnimation] = useState(false); // Zustand für Animation

  useEffect(() => {
    let timer;
    if (isHovered) {
      // 3-Sekunden-Timer für das Ausblenden des Textes
      timer = setTimeout(() => {
        setIsHoneyVisible(false);
        setStartAnimation(true); // Start Animation nach 3 Sekunden
      }, 20);
    }

    return () => clearTimeout(timer); // Timer bereinigen
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
          <button className='buttonHoney' onMouseEnter={() => setIsHovered(true)}>
            Honey
          </button>
        </Link>

        {isHovered && (
          <div className="text-container">
            <span className='hover-text'>I love you Honey</span>
          </div>
        )}

        {/* Separater Container für das Auge */}
        {startAnimation && (
          <div className="eye-animation-container">
            <EyeAnimation />
          </div>
        )}





        <Link to="/Miko"><button className='button7'>Miko</button></Link>

        {isHoneyVisible && (
          <span className='hover-text-honey' onMouseEnter={() => setIsHovered(true)}>
            hover me my love
          </span>
        )}
      </div>
    </div>
  );
}

// Augen-Animation Komponente
function EyeAnimation() {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [Eye1, Eye2, Eye3, Eye4, Eye5, Eye6, Eye7, Eye8]; // Deine neuen Augenbilder

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * images.length);
      } while (randomIndex === currentImage); // Stelle sicher, dass es ein anderes Bild ist
      setCurrentImage(randomIndex);
    },90); // Zeit in Millisekunden zwischen jedem Bildwechsel

    return () => clearInterval(interval); // Bereinige das Intervall, wenn die Komponente entladen wird
  }, [currentImage]);

  return (
    <div>
      <img 
        src={images[currentImage]} 
        alt="Eye Animation" 
        className="eye-animation" 
        style={{ width: '200px', height: '200px' }} // Passe die Größe der Bilder an
      />
    </div>
  );
}



export default InfoMain;
