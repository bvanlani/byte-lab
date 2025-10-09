
//Importing the react packages for routing.
import React from 'react';
import {HashRouter, Routes, Route} from 'react-router-dom';

//Importing all of the components to form a cohesive website.
import ScrollToTop from './componenets/effects/ScrollToTop.jsx';
import HomePage from './pages/HomePage';
import TheLab from './pages/TheLab';
import NoPage from './pages/NoPage';
import TermsOfUse from './pages/TermsOfUse';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import LearnPage from './pages/LearnPage.jsx';

//Compiling the cohesive website and guiding the user to each page.
export default function App() {  

  return (
    <HashRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/the-lab" element={<TheLab />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/learn-page" element={<LearnPage />}/>
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
  )
}
