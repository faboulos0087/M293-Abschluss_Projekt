// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Header';
import CalendarPage from './Calenderpage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

const HomePage = () => (
  <div>
    <h2>Home Page</h2>
    <p>Willkommen auf der Startseite!</p>
  </div>
);

export default App;