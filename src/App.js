import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './Main/Main';
import About from './About/About';
import Activity from './Activity/Activity';
import Apply from './Apply/Apply';
import Dev from './Members/dev';
import Term from './Members/term';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/about" element={<About />} />
      <Route path="/activity" element={<Activity />} />
      <Route path="/members" element={<Dev />} />
      <Route path="/apply" element={<Apply />} />
      <Route path="/dev" element={<Dev />} />
      <Route path="/term" element={<Term />} />
    </Routes>
  );
}

export default App; 