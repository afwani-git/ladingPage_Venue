import React from 'react';
import './resoursces/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';

function App() {
  return (
    <div className="App" style={{backgroundColor:'yellow',height:'1300px'}}>
      <Header/>
      <Featured/>
      <VunueNfo/>
      <Highlights/>
      <Pricing/>
      <Location/>
      <Footer/>
    </div>
  );
}

export default App;
