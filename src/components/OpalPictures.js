import React, { useState } from 'react';
import '../Islamic.css';

function OpalPictures() {
  const [isArabic, setIsArabic] = useState(true);
  const [displayTime, setTimeDisplay] = useState('');
  const [currentText, setCurrentText] = useState(''); // Für den Tipp-Effekt
  const [typingIntervalId, setTypingIntervalId] = useState(null); // Timeout ID für das Typen
  const [referenceText, setReferenceText] = useState(''); // Für den Referenz-Tipp-Effekt
  const [typingRefIntervalId, setTypingRefIntervalId] = useState(null); // Timeout ID für das Tippen der Referenz

  const handleClick = () => {
    setIsArabic(!isArabic);
  };

  // Funktion zum Buchstaben-für-Buchstaben Anzeigen mit setTimeout (für den Haupttext)
  const typeText = (text, callback) => {
    if (typingIntervalId) {
      clearTimeout(typingIntervalId); // Vorherigen Timeout löschen, falls vorhanden
    }
    setCurrentText(''); // Setzt den aktuellen Text zurück
    let i = -1;

    const typeNextCharacter = () => {
      if (i < text.length) {
        setCurrentText((prev) => prev + text.charAt(i)); // charAt für sicheres Zeichenlesen
        i++;
        setTypingIntervalId(setTimeout(typeNextCharacter, 40)); // Typ-Effekt alle 100ms
      } else if (callback) {
        setTimeout(callback, 200); // Warte 200ms nach dem letzten Buchstaben und starte die Referenz
      }
    };

    setTypingIntervalId(setTimeout(typeNextCharacter, 100)); // Starte den Typ-Effekt
  };

  // Funktion für den Referenz-Tipp-Effekt
  const typeReference = (refText) => {
    if (typingRefIntervalId) {
      clearTimeout(typingRefIntervalId); // Vorherigen Timeout löschen, falls vorhanden
    }
    setReferenceText(''); // Setzt den Referenz-Text zurück
    let i = -1;

    const typeNextRefCharacter = () => {
      if (i < refText.length) {
        setReferenceText((prev) => prev + refText.charAt(i)); // charAt für sicheres Zeichenlesen
        i++;
        setTypingRefIntervalId(setTimeout(typeNextRefCharacter, 40)); // Typ-Effekt für Referenz alle 100ms
      }
    };

    setTypingRefIntervalId(setTimeout(typeNextRefCharacter, 70)); // Starte den Tipp-Effekt für die Referenz
  };

  const fajrtext = () => {
    setReferenceText(''); // Reset the reference before starting the new one
    setTimeDisplay('Fajr in 87629 Füssen. 06:45');
    typeText('Aishah (May Allah be pleased with her) reported: The Prophet ﷺ said, The two Rakah before the dawn Fajr prayer are better than this world and all it contains.', () => {
      typeReference('📖 Sahih Muslim 725');
    });
  };
  
  const dhuhrtext = () => {
    setReferenceText(''); // Reset the reference before starting the new one
    setTimeDisplay('Dhuhr in 87629 Füssen. 12:30');
    typeText('Abu Hurairah reported that the Prophet ﷺ said: When the heat is severe, delay the prayer until it becomes cooler, for the severity of heat is from the raging of Hell.', () => {
      typeReference('📖 Sahih al-Bukhari 536');
    });
  };
  
  const asrtext = () => {
    setReferenceText(''); // Reset the reference before starting the new one
    setTimeDisplay('Asr in 87629 Füssen. 15:45');
    typeText("Allah's Messenger ﷺ said, Whoever misses the `Asr prayer intentionally then it is as if he lost his family and wealth.", () => {
      typeReference('📖 Sahih al-Bukhari 552');
    });
  };
  
  const maghribtext = () => {
    setReferenceText(''); // Reset the reference before starting the new one
    setTimeDisplay('Maghrib in 87629 Füssen. 18:15');
    typeText('Abdullah bin Mughaffal (May Allah be pleased with him) reported: The Prophet ﷺ said, "Perform two Rak`ah before Maghrib prayer.', () => {
      typeReference('📖 Sahih al-Bukhari 1183');
    });
  };
  
  const ishatext = () => {
    setReferenceText(''); // Reset the reference before starting the new one
    setTimeDisplay('Isha in 87629 Füssen. 20:00');
    typeText('Ibn Umar reported that the Prophet ﷺ said: Do not be negligent about the two Rak’ah before Fajr and the Witr prayer after Isha.', () => {
      typeReference('📖 Sahih al-Bukhari 990');
    });
  };
  


  return (
    <div className='islamic-background'>
      <div className='start-head'>
        <a href='#' onClick={handleClick}>
          <h1>{isArabic ? 'حَيَّ عَلَى الْفَلَاح' : 'come to success'}</h1>
        </a>
      </div>
      <div className='floating-wrapper'>
        <div className='container-times'>
          <div className='Fajr'>
            <button onClick={fajrtext}>Fajr</button>
          </div>
          <div className='Dhuhr'>
            <button onClick={dhuhrtext}>Dhuhr</button>
          </div>
          <div className='Asr'>
            <button onClick={asrtext}>Asr</button>
          </div>
          <div className='Maghrib'>
            <button onClick={maghribtext}>Maghrib</button>
          </div>
          <div className='Isha'>
            <button onClick={ishatext}>Isha</button>
          </div>
        </div>

        {/* Display the selected reminder text inside this div */}
        <div className='container-click'>
          <p id='dTime'>{displayTime}</p>
          <p id='cText'>{currentText}</p> {/* Tipp-Effekt Text */}
          <p id='rText'>{referenceText}</p> {/* Tipp-Effekt Referenz mit Buch-Emoji */}
        </div>
      </div>
    </div>
  );
}

export default OpalPictures;
