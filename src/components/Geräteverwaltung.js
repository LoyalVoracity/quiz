import React from 'react';
import '../App.css';

function Geräteverwaltung() {
    return (
      <div className='home-background'>
        <div className='info-text'>
        <h1>Opal Info Seite</h1>
        </div>
        <div className='opal-info'>
          <table className='table1'>
            <tr>
            <th>Gewicht</th>
            <th>Alter</th>
            <th>Farbe</th>
            </tr>
            <th>5.7KG</th>
            <th>3.5 Jahre</th>
            <th>smoked black</th>
          </table>
        </div>
      </div>
    );
  }
  
  export default Geräteverwaltung;
  