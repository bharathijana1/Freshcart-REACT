import React from 'react'
import Fruits from './Fruits'
import Vegtables from './Vegtables';
import HeroSection from './HeroSection';


const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <div id='readytoshop'>
      <Fruits />
      <Vegtables />

      </div>
      
      
      
        
      
    </div>
  )
}

export default HomePage
