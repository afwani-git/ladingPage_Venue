import React from 'react';
import './resoursces/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo';
import Highlights from './components/Highlights';
import Pricing from './components/pricing';
import Location from './components/location';
import Footer from './components/header_footer/Footer';
import { Element } from 'react-scroll';

function App() {
  return (
    <div className="App" style={{backgroundColor:'yellow',height:'1300px'}}>

      <Element name="Event">
        <Header/>
        <Featured/>
      </Element>

      <Element name="Vunue">
        <VunueNfo/>
      </Element>

      <Element name="Highlights">
        <Highlights/>
      </Element>

      <Element name="Pricing">
        <Pricing/>
      </Element>

      <Element name="Location">
        <Location/>
      </Element>

      <Element name="Footer">
        <Footer/>
      </Element>
    </div>
  );
}

export default App;
