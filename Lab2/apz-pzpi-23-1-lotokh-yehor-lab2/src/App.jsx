import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MobileHeader from './components/MobileHeader';
import BottomNav from './components/BottomNav';
import MobileDashboard from './pages/MobileDashboard';
import MobilePatients from './pages/MobilePatients';
import MobileSettings from './pages/MobileSettings';

function App() {
  return (
    <Router>
      <div className="app-container">
        <MobileHeader />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<MobileDashboard />} />
            <Route path="/patients" element={<MobilePatients />} />
            <Route path="/settings" element={<MobileSettings />} />
          </Routes>
        </main>
        <BottomNav />
      </div>
    </Router>
  );
}

export default App;
