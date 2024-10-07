const API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;  // Verwende die Umgebungsvariable
const SPREADSHEET_ID = '1SN4ltXJItwNMKmxBx9qjOEPMD0C1gTaQpki8rCt7a1c';
const RANGE = 'Gerateliste!A1:M20';

export async function appendDevice(newDevice) {
  const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${RANGE}:append?valueInputOption=RAW&key=${API_KEY}`;

  const body = {
    values: [newDevice],
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Fehler beim Hinzufügen des Geräts');
    }

    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
