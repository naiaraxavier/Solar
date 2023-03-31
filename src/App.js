import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './css/Reset.css';
import './css/App.css';
import Footer from './components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <Footer />
      </>
    );
  }
}
