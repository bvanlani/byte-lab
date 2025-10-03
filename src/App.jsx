import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

import ScrollToTop from './componenets/ScrollToTop.jsx';

import HomePage from './pages/HomePage';
import TheLab from './pages/TheLab';
import NoPage from './pages/NoPage';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';

function App() {  

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-lab" element={<TheLab />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  )
}

export default App
