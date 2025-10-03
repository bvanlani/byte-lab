import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';
import TheLabPage from './pages/TheLabPage';
import NoPage from './pages/NoPage';
import TermsOfUse from './pages/TermsOfUse';

function App() {  

  return (
    <BrowserRouter basename="/byte-lab">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-lab" element={<TheLabPage />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
