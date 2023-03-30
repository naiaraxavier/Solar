import React from 'react';
import Header from './components/Header';
import PlanetCard from './components/PlanetCard';
import SolarSystem from './components/SolarSystem';
import Planets from './data/planets';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <PlanetCard planetName={ Planets[0].name } planetImage={ Planets[0].image } />
      </>
    );
  }
}

export default App;
