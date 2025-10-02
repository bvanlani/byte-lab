import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import HomePage from './pages/HomePage';

function App() {  

  return (
    <BrowserRouter basename="/byte-lab">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
