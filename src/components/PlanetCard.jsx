import PropTypes from 'prop-types';
import React, { Component } from 'react';
import '../css/PlanetCard.css';

export default class PlanetCard extends Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="container__planetCard">
        <img
          className={ `img__${planetName}` }
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
        />
        <p
          className="container__planetCard--name"
          data-testid="planet-name"
        >
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetImage: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
};
