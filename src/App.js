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
import OpalLogin from './components/OpalLogin';
import geraeteverwaltung from './components/geraeteverwaltung';

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
          <Route path="/opal-login" element={<OpalLogin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;