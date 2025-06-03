import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './pages/Home';
import ResumeGenerator from './pages/ResumeGenerator';
import ResumeUpdate from './pages/ResumeUpdate';
import JobReview from './pages/JobReview';

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<ResumeGenerator />} />
        <Route path="/update" element={<ResumeUpdate />} />
        <Route path="/review" element={<JobReview />} />
      </Routes>
    </Router>
  );
}

export default App;
