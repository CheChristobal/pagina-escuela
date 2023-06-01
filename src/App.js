import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';
import Cursos from './pages/Cursos';
import Eventos from './pages/Eventos';
import Contacto from './pages/Contacto';
import './App.css';
import Hero from './components/Hero';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Navigation />
        <Hero />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;