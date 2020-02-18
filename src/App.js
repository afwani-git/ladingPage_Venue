import React from 'react';
import './resoursces/styles.css';
import Header from './components/header_footer/Header';
import Featured from './components/featured';
import VunueNfo from './components/venueNfo'

function App() {
  return (
    <div className="App" style={{backgroundColor:'yellow',height:'1300px'}}>
      <Header/>
      <Featured/>
      <VunueNfo/>
    </div>
  );
}

export default App;
