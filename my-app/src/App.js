
import React,{useState, useEffect} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Kuda from './components/Kuda';
import Hero from './components/Hero';
import UncommonImpact from './components/UncommonImpact';
import HowItWorks from './components/HowItWorks';
import BecomingAmentor from './components/BecomingAmentor';
import JoinOurCommunity from './components/JoinOurCommunity';
import Sustainability from './components/Sustainability';
import StayEngaged from './components/StayEngaged';
import Footer from './components/Footer';
import Blue from './components/Blue';
import Donate from './Pages/Donate';
import OurStory from './Pages/OurStory';
import InnovationHubs from './Pages/InnovationHubs';
import HireUs from './Pages/HireUs';
import Blog from './components/Blog';
import axios from 'axios'


function App() {



    
  return (
    <Router>
          <Kuda />
          <Routes>
            <Route element={<Hero />} path="/" />
            <Route element={<InnovationHubs />} path="/innovationhubs" />
            <Route element={<OurStory />} path="/our-story" />
            <Route element={<HireUs />} path="/hire-us" />
            <Route element={<Donate />} path="/donate" />
            </Routes>
<Blog/>
          <UncommonImpact />
          <HowItWorks />
          <BecomingAmentor />
          <JoinOurCommunity />
          <Sustainability />
          <StayEngaged />
          <Blue />
          <Footer/>
        {/* <InnovationHubs/>
        <OurStory/>
        <HireUs/>
        <Donate/>   */}
      </Router>
  );
}

export default App;

