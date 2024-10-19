import React, { useState, useEffect } from "react";
import Eye1 from '../pictures/eye1.png';
import Eye2 from '../pictures/eye2.png';
import Eye3 from '../pictures/eye3.png';
import Eye4 from '../pictures/eye4.png';
import Eye5 from '../pictures/eye5.png';
import Eye6 from '../pictures/eye6.png';
import Eye7 from '../pictures/eye7.png';
import Eye8 from '../pictures/eye8.png';

function Honey() {
  const [loveMessage, setLoveMessage] = useState("I love you");
  const [startAnimation, setStartAnimation] = useState(false); // Animation state

  useEffect(() => {
    let count = 0;
    const loveInterval = setInterval(() => {
      console.log("I will forever love you ❤️");
      count++;
      if (count >= 5) {
        setLoveMessage("Enough love expressed for now... naturally not!");
        count = 0; // Reset counter to continue the loop
      }
    }, 1000);

    return () => clearInterval(loveInterval); // Cleanup interval on unmount
  }, []);

  return (
    <div>
      <h1>{loveMessage}</h1>
      <p>{loveMessage}</p>

      {/* Eye Animation displayed after 3 seconds */}
      <button onClick={() => setStartAnimation(true)}>Start Eye Animation</button>
      {startAnimation && <EyeAnimation />}
    </div>
  );
}

// EyeAnimation Component
function EyeAnimation() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [Eye1, Eye2, Eye3, Eye4, Eye5, Eye6, Eye7, Eye8]; // Eye images

  useEffect(() => {
    const interval = setInterval(() => {
      let randomIndex;
      do {
        randomIndex = Math.floor(Math.random() * images.length);
      } while (randomIndex === currentImage); // Ensure it's a different image
      setCurrentImage(randomIndex);
    }, 90); // Interval in milliseconds between each image

    return () => clearInterval(interval); // Cleanup the interval when unmounted
  }, [currentImage]);

  return (
    <div>
      <img 
        src={images[currentImage]} 
        alt="Eye Animation" 
        className="eye-animation" 
        style={{ width: '200px', height: '200px' }} // Adjust the image size
      />
    </div>
  );
}

export default Honey;
