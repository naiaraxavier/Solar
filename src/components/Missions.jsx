import React, { Component } from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import '../css/Missions.css';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions" className="container__missions">
        <Title headline="Missões" />
        <div className="container__missions--card">
          {missions.map(({ name, year, country, destination }) => (
            <MissionCard
              key={ name }
              name={ name }
              year={ year }
              country={ country }
              destination={ destination }
            />
          ))}
        </div>
      </div>
    );
  }
}
