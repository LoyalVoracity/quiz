import React, { useEffect, useState } from 'react';

const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const SPREADSHEET_ID = '1SN4ltXJItwNMKmxBx9qjOEPMD0C1gTaQpki8rCt7a1c';
const RANGE = 'Gerateliste!A1:M20';

function DynamicTable({ searchTerm }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [selectedDevices, setSelectedDevices] = useState([]);

  useEffect(() => {
    fetch(
      `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}?key=${API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.values) {
          setData(data.values);
          setFilteredData(data.values.slice(1)); // Set the initial filtered data without the header
        } else {
          console.error('No data found:', data);
        }
      })
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  // Filter the table data based on the search term
  useEffect(() => {
    if (searchTerm) {
      const lowerCaseTerm = searchTerm.toLowerCase();
      const filtered = data.slice(1).filter((row) => // Only filter rows (excluding header)
        row.some((cell) => cell.toLowerCase().includes(lowerCaseTerm))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(data.slice(1)); // Show all rows if no search term is present
    }
  }, [searchTerm, data]);

  // Function to handle checkbox selection
  const handleCheckboxChange = (rowIndex) => {
    if (selectedDevices.includes(rowIndex)) {
      setSelectedDevices(selectedDevices.filter((index) => index !== rowIndex));
    } else {
      setSelectedDevices([...selectedDevices, rowIndex]);
    }
  };

  // Function to delete selected devices locally and in Google Sheets
  const handleDeleteDevices = async () => {
    const updatedData = filteredData.filter((_, rowIndex) => !selectedDevices.includes(rowIndex + 1)); // Only filter device rows (not header)
    setFilteredData(updatedData);
    setSelectedDevices([]);

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
                  sheetId: 0, // Typically the first sheet
                  dimension: 'ROWS',
                  startIndex: rowIndex, // Index of the row to delete
                  endIndex: rowIndex + 1, // Up to one row
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
              {/* Empty header for checkboxes */}
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
          {filteredData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>
                <input
                  type="checkbox"
                  checked={selectedDevices.includes(rowIndex + 1)} // Adjust row index
                  onChange={() => handleCheckboxChange(rowIndex + 1)} // Adjust row index
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
