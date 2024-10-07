import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyACu0-vV2uvsh55hcCjNhJG-LOAgqL8ik4';
const SPREADSHEET_ID = '1SN4ltXJItwNMKmxBx9qjOEPMD0C1gTaQpki8rCt7a1c';
const RANGE = 'Gerateliste!A1:M20';

function DynamicTable({ searchTerm }) {
  const [data, setData] = useState([]);
  const [internalSearch, setInternalSearch] = useState(''); // Zustand für interne Suche

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

  // Daten gefiltert basierend auf der externen Suche
  const externallyFilteredData = data.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  // Daten gefiltert basierend auf der internen Suche
  const internallyFilteredData = externallyFilteredData.filter((row) =>
    row.some((cell) => cell.toLowerCase().includes(internalSearch.toLowerCase()))
  );

  return (
    <div>

      {/* Externe und interne Filter sind leer */}
      {externallyFilteredData.length === 0 ? (
        <p style={{ color: 'red' }}>Typo? Keine externen Ergebnisse gefunden.</p>
      ) : internallyFilteredData.length === 0 ? (
        <p style={{ color: 'red' }}>Typo? Keine internen Ergebnisse gefunden.</p>
      ) : (
<table border="1">
  <thead>
    <tr>
      {data[0] && data[0].map((header, index) => (
        <th 
          key={index} 
          className={
            header.toLowerCase().replace(/[^a-z0-9]/g, '') === 'id' ? 'id-column' : 
            header.toLowerCase().replace(/[^a-z0-9]/g, '') === 'maxlast' ? 'maxlast-column' : 
            header.toLowerCase().replace(/[^a-z0-9]/g, '') === 'gewicht' ? 'gewicht-column' : ''
          }
        >
          {header}
        </th>
      ))}
    </tr>
  </thead>
  <tbody>
    {internallyFilteredData.slice(1).map((row, rowIndex) => (
      <tr key={rowIndex}>
        {row.map((cell, cellIndex) => (
          <td 
            key={cellIndex} 
            className={
              data[0][cellIndex].toLowerCase().replace(/[^a-z0-9]/g, '') === 'id' ? 'id-column' : 
              data[0][cellIndex].toLowerCase().replace(/[^a-z0-9]/g, '') === 'maxlast' ? 'maxlast-column' : 
              data[0][cellIndex].toLowerCase().replace(/[^a-z0-9]/g, '') === 'gewicht' ? 'gewicht-column' : ''
            }
          >
            {cell}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
      )}
    </div>
  );
}

export default DynamicTable;
