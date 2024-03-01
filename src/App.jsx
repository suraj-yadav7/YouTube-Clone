import React from 'react';
import Navbar from './components/navbar/Navbar';
import Home from "./pages/home/Home"
import Video from "./pages/video/Video"
import { BrowserRouter as Router , Routes, Route } from 'react-router-dom';
import './App.css'

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/video/:categoryId/:videoId' element={<Video />} />
          <Route path="*" element={<div>Error 404 : Page Not Found</div>} />
        </Routes>
      </Router>
    </>
  )
}

export default App;
