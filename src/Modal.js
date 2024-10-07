import React, { useState } from 'react';
import { appendDevice } from './googleSheets'; // Füge die appendDevice Funktion hinzu

function Modal({ onClose }) {
  const [newDevice, setNewDevice] = useState({
    Gerätetyp: '',
    Hersteller: '',
    Status: '',
    Standort: '',
    ID: '',
    VerantwortlichePerson: '',
    Leistung: '',
    Spannung: '',
    Gewicht: '',
    MaxLast: '',
    Drehzahl: '',
    Schlagkraft: ''
  });

  const handleChange = (e) => {
    setNewDevice({
      ...newDevice,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    try {
      await appendDevice(Object.values(newDevice)); // Hier fügst du das neue Gerät hinzu
      alert('Gerät erfolgreich hinzugefügt');
      onClose(); // Schließt das Modal
    } catch (error) {
      console.error('Fehler beim Hinzufügen:', error);
      alert('Fehler beim Hinzufügen des Geräts');
    }
  };

  return (
    <div className="modal">
      <h2>Neues Gerät hinzufügen</h2>
      <form>
        <input
          type="text"
          name="Gerätetyp"
          placeholder="Gerätetyp"
          value={newDevice.Gerätetyp}
          onChange={handleChange}
        />
        {/* Weitere Felder für das Formular */}
        <input
          type="text"
          name="Hersteller"
          placeholder="Hersteller"
          value={newDevice.Hersteller}
          onChange={handleChange}
        />
        {/* Füge weitere Input-Felder für alle Spalten deiner Google Sheet Tabelle hinzu */}
        <button type="button" onClick={handleSubmit}>
          Gerät hinzufügen
        </button>
      </form>
      <button onClick={onClose}>Schließen</button>
    </div>
  );
}

export default Modal;
