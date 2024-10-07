import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


// Importiere die Seitenkomponenten
import Home from './components/Home';
import InfoMain from './components/InfoMain';
import OpalInfo from './components/OpalInfo';
import OpalQuiz from './components/OpalQuiz';
import OpalTable from './components/OpalTable';
import OpalPictures from './components/OpalPictures';
import OpalVideos from './components/OpalVideos';
import Honey from './components/Honey';
import Miko from './components/Miko';
import Geräteverwaltung from './components/Geräteverwaltung';


function App() {
  return (
    <Router basename='/quiz'>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info-main" element={<InfoMain />} />
          <Route path="/opal-info" element={<OpalInfo />} />
          <Route path="/opal-quiz" element={<OpalQuiz />} />
          <Route path="/opal-table" element={<OpalTable />} />
          <Route path="/opal-pictures" element={<OpalPictures />} />
          <Route path="/opal-videos" element={<OpalVideos />} />
          <Route path="/Honey" element={<Honey />} />
          <Route path="/Miko" element={<Miko />} />
          <Route path="/Geräteverwaltung" element={<Geräteverwaltung />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
