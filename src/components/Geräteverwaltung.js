import React, { useState, useEffect } from 'react';
import '../Geräteverwaltung.css';
import '../fonts.css';
import DynamicTable from '../DynamicTable';  // Verweise auf DynamicTable
import Modal from '../Modal';  // Verweise auf das Modal
import Geiger from '../pictures/geigerpng.png';
import GeigerBlack from '../pictures/geigerblack.png';  // Importiere das andere Bild
import { appendDevice } from '../googleSheets';  // Stelle sicher, dass der Pfad und der Export korrekt sind

function Geräteverwaltung() {
  const [searchTerm, setSearchTerm] = useState(''); // Zustand für die externe Suche
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal-Zustand
  const [isGeigerVisible, setIsGeigerVisible] = useState(true); 
  const [isHiButtonVisible, setIsHiButtonVisible] = useState(true);  // Zustand für "Hi"-Button
  const [newDevice, setNewDevice] = useState({
    typ: '',
    hersteller: '',
    status: '',
    standort: '',
    id: '',
    person: '',
    maxLast: '',
    gewicht: ''
  });

  const [logo, setLogo] = useState(Geiger);  // Zustand für das Logo

  // Suche nach "geigerblack" tauscht das Logo aus
  useEffect(() => {
    if (searchTerm.toLowerCase() === 'geigerblack') {
      setLogo(GeigerBlack);  // Logo zu geigerblack ändern
    } else {
      setLogo(Geiger);  // Standardlogo setzen
    }
  }, [searchTerm]);

  // Funktion zur Änderung des Suchbegriffs
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);  // Suchbegriff aktualisieren
  };

  // Öffne und schließe das Modal
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  // Eingabe-Handler für neue Geräte
  const handleInputChange = (event) => {
    setNewDevice({
      ...newDevice,
      [event.target.name]: event.target.value
    });
  };

  // Submittet ein neues Gerät zu Google Sheets
  const handleSubmit = async () => {
    try {
      await appendDevice(Object.values(newDevice));  // Gerät zur Google Sheets Tabelle hinzufügen
      alert('Gerät erfolgreich hinzugefügt!');
      handleModalClose();
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Geräts:', error);
      alert('Fehler beim Hinzufügen des Geräts.');
    }
  };

  // Funktion zum Umschalten der Sichtbarkeit des Geiger-Logos
  const toggleGeigerVisibility = () => {
    setIsGeigerVisible(!isGeigerVisible);
  };

  // Funktion zum Umschalten der Sichtbarkeit des "Hi"-Buttons
  const toggleHiButtonVisibility = () => {
    setIsHiButtonVisible(!isHiButtonVisible);
  };

  return (
    <div className='LayoutWrapper'>
      <div className='TopWrapper'>
        <div className='Top'>
          <p>Mikail Aydemir</p>
          <img src={logo} className='geigerlogo' id='geigerlogo' alt="Geiger Logo" onClick={toggleGeigerVisibility} style={{ visibility: isGeigerVisible ? 'visible' : 'hidden' }} />
          <label className='switch'>
            <input type='checkbox' id="toggleButton" onChange={toggleGeigerVisibility} />
            <span className='slider-round'></span>
          </label>
        </div>
      </div>
      <div className='MiddleWrapper'>
        <div className='MiddleHeaderTable'>
          <div className='MiddleHeader'>
            <input
              type='search'
              className='SearchInput'
              placeholder='Suchen...'
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className='ButtonNewDevice' onClick={handleModalOpen}>+</button>
          </div>
          <div className='MiddleTable'>
            <DynamicTable searchTerm={searchTerm} /> {/* Suchbegriff an DynamicTable übergeben */}
          </div>
        </div>
        <div className='MiddleRightWrapper'>
          <div className='MiddleRightDetail'>
            <p>Detailansicht</p>
            {/* Der "Hi"-Button wird nur angezeigt, wenn `isHiButtonVisible` true ist */}
            {isHiButtonVisible && <button onClick={toggleGeigerVisibility}>Hi</button>}
          </div>
          <div className='MiddleRightProbleme'>
            <p>Probleme</p>
            {/* Dieser Button schaltet den "Hi"-Button sichtbar/unsichtbar */}
            <button onClick={toggleHiButtonVisibility}>magic!</button>
          </div>
          <div className='MiddleRightDokumente'>
            <p>Dokumente</p>
          </div>
          <div className='MiddleRightStandorte'>
            <p>Standort</p>
          </div>
          <div className='MiddleRightSicherheitsinformationen'>
            <p>Sicherheitsinformationen</p>
          </div>
        </div>
      </div>

      {/* Modal für das Hinzufügen eines neuen Geräts */}
      {isModalOpen && (
        <Modal onClose={handleModalClose}>
          <h2>Neues Gerät hinzufügen</h2>
          <form>
            <label>Gerätetyp:</label>
            <input type="text" name="typ" value={newDevice.typ} onChange={handleInputChange} />

            <label>Hersteller:</label>
            <input type="text" name="hersteller" value={newDevice.hersteller} onChange={handleInputChange} />

            <label>Status:</label>
            <input type="text" name="status" value={newDevice.status} onChange={handleInputChange} />

            <label>Standort:</label>
            <input type="text" name="standort" value={newDevice.standort} onChange={handleInputChange} />

            <label>ID:</label>
            <input type="text" name="id" value={newDevice.id} onChange={handleInputChange} />

            <label>Verantwortliche Person:</label>
            <input type="text" name="person" value={newDevice.person} onChange={handleInputChange} />

            <label>Max. Last:</label>
            <input type="text" name="maxLast" value={newDevice.maxLast} onChange={handleInputChange} />

            <label>Gewicht:</label>
            <input type="text" name="gewicht" value={newDevice.gewicht} onChange={handleInputChange} />

            <button type="button" onClick={handleSubmit}>Hinzufügen</button>
          </form>
        </Modal>
      )}
    </div>
  );
}

export default Geräteverwaltung;