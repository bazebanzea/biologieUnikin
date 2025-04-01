import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Team from './pages/Team';
import TeamMemberDetails from './pages/TeamMember';
import News from './pages/News';
import Appointments from './pages/Appointments';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/team/:id" element={<TeamMemberDetails />} />
          <Route path="/news" element={<News />} />
          <Route path="/appointments" element={<Appointments />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;