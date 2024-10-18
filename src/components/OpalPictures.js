import React, { useState } from 'react';
import '../Islamic.css';

function OpalPictures() {
  // State to hold the text displayed in the container-click
  const [displayText, setDisplayText] = useState('');

  // Function to handle the button click and set the appropriate text
  const fajrtext = () => {
    setDisplayText('Aishah (May Allah be pleased with her) reported: The Prophet (ﷺ) said, The two Rakah before the dawn Fajr prayer are better than this world and all it contains. Another narration goes: The two Rakah before the dawn Fajr prayer are dearer to me than the whole world.');
  };

  return (
    <div>
      <div className='islamic-background'>
        <div className='start-head'>
          <h1>Islamic Reminders</h1>
        </div>
        <div className='container-times'>
          <div className='Fajr'>
            <button onClick={fajrtext}>Fajr</button>
          </div>
          <div className='Dhuhr'>
            <button onClick={() => setDisplayText('This is the Dhuhr reminder text.')}>Dhuhr</button>
          </div>
          <div className='Asr'>
            <button onClick={() => setDisplayText('This is the Asr reminder text.')}>Asr</button>
          </div>
          <div className='Maghrib'>
            <button onClick={() => setDisplayText('This is the Maghrib reminder text.')}>Maghrib</button>
          </div>
          <div className='Isha'>
            <button onClick={() => setDisplayText('This is the Isha reminder text.')}>Isha</button>
          </div>
        </div>

        {/* Display the selected reminder text inside this div */}
        <div className='container-click'>
          <p>{displayText}</p>
        </div>
      </div>
    </div>
  );
}

export default OpalPictures;
