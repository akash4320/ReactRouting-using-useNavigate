// import React , {useState} from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Render1 from './components/Render1.js'
import Render2 from './components/Render2.js'
import Render3 from './components/Render3.js'
import Header from './components/Header.js';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Render1 />} />
        <Route path="/render1" element={<Render1 />} />
        <Route path="/render2" element={<Render2 />} />
        <Route path="/render3" element={<Render3 />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;