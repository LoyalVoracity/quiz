import React, { useState, useEffect } from "react";

function Honey() {
  const [loveMessage, setLoveMessage] = useState("I love you");

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
      <h1>Filler für Wifeys Seite</h1>
      <p>{loveMessage}</p>
    </div>
  );
}

export default Honey;
