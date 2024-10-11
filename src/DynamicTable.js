import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SPREADSHEET_ID = '1SN4ltXJItwNMKmxBx9qjOEPMD0C1gTaQpki8rCt7a1c';
const RANGE = 'Gerateliste!A1:M20';

function DynamicTable({ searchTerm }) {
  const [data, setData] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.values) {
          setData(data.values);
        } else {
          console.error('No data found:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Funktion, um Checkbox zu handhaben
  const handleCheckboxChange = (rowIndex) => {
    if (selectedDevices.includes(rowIndex)) {
      setSelectedDevices(selectedDevices.filter((index) => index !== rowIndex));
    } else {
      setSelectedDevices([...selectedDevices, rowIndex]);
    }
  };

  // Funktion, um ausgewählte Geräte lokal und in Google Sheets zu löschen
  const handleDeleteDevices = async () => {
    const updatedData = data.filter((_, rowIndex) => !selectedDevices.includes(rowIndex + 1)); // Nur die Gerätezeilen (nicht die Kopfzeile) filtern
    setData(updatedData);
    setSelectedDevices([]);

    // Batch-Update für Google Sheets
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}:batchUpdate?key=${API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            requests: selectedDevices.map((rowIndex) => ({
              deleteDimension: {
                range: {
                  sheetId: 0, // Das ist in der Regel das erste Arbeitsblatt
                  dimension: 'ROWS',
                  startIndex: rowIndex, // Index der zu löschenden Zeile
                  endIndex: rowIndex + 1, // Bis eine Zeile weiter
                },
              },
            })),
          }),
        }
      );

      if (!response.ok) {
        throw new Error('Error deleting rows from Google Sheets');
      }

      const result = await response.json();
      console.log('Rows deleted:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div>
      {selectedDevices.length > 0 && (
        <button onClick={handleDeleteDevices} className="delete-btn">
          Löschen
        </button>
      )}
      <table border="1">
        <thead>
          <tr>
            <th>
              {/* Leere Kopfzeile für Checkboxen */}
              {selectedDevices.length > 0 && <span>Löschen</span>}
            </th>
            {data[0] && data[0].map((header, index) => (
              <th key={index} className="tableHeadline">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice(1).map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedDevices.includes(rowIndex + 1)} // Zeilenindex anpassen
                  onChange={() => handleCheckboxChange(rowIndex + 1)} // Zeilenindex anpassen
                />
              </td>
              {row.map((cell, cellIndex) => (
                <td key={cellIndex} className="table-data">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DynamicTable;
