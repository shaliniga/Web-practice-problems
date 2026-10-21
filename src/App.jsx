import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import QrCode from './components/QrCode';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/qr-code' element={<QrCode/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;