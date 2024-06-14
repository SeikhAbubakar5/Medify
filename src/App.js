
import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Bookslot from './Pages/BookSlot/Bookslot';
import Mybookings from "./Pages/MyBookings/Mybookings"


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        
        <Route path="/bookslot" element={<Bookslot />} />
        
        <Route path="/mybookings" element={<Mybookings/>}/>
      </Routes>
    </Router>
  )
}

export default App;
