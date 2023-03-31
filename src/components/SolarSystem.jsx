import React, { Component } from 'react';
import planets from '../data/planets';
import PlanetCard from './PlanetCard';
import Title from './Title';
import '../css/SolarSystem.css';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system" className="container__solarSystem">
        <Title headline="Planetas" />
        <div className="container__solarSystem--planets">
          {planets.map(({ name, image }) => (
            <PlanetCard key={ name } planetName={ name } planetImage={ image } />))}
        </div>
      </div>
    );
  }
}
