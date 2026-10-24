import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import QrCode from './components/QrCode';
import BlogCard from './components/BlogCard';
import SocialLink from './components/SocialLink';


function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/qr-code' element={<QrCode/>}/>
        <Route path='/blog-card' element={<BlogCard/>}/>
        <Route path='/social-link' element={<SocialLink/>}/>
      </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App;