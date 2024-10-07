import React, { useState } from 'react';
import '../Geräteverwaltung.css';
import '../fonts.css';
import DynamicTable from '../DynamicTable';  // Verweise auf DynamicTable
import Modal from '../Modal';  // Verweise auf das Modal
import { appendDevice } from '../googleSheets';  // Importiere die Google Sheets Funktion

function Geräteverwaltung() {
  const [searchTerm, setSearchTerm] = useState(''); // Zustand für die externe Suche
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal-Zustand
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

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);  // Suchbegriff aktualisieren
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleInputChange = (event) => {
    setNewDevice({
      ...newDevice,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = async () => {
    try {
      // Gerät zur Google Sheets Tabelle hinzufügen
      await appendDevice(Object.values(newDevice));
      alert('Gerät erfolgreich hinzugefügt!');
      handleModalClose();
    } catch (error) {
      console.error('Fehler beim Hinzufügen des Geräts:', error);
      alert('Fehler beim Hinzufügen des Geräts.');
    }
  };

  return (
    <div className='LayoutWrapper'>
      <div className='TopWrapper'>
        <div className='Top'>
          <p>Mikail Aydemir</p>
          <label className='switch'>
            <input type='checkbox' id="toggleButton" />
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
            <p>Detail</p>
          </div>
          <div className='MiddleRightProbleme'>
            <p>Probleme</p>
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
