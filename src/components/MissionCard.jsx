import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../css/MissionCard.css';

export default class MissionCard extends Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card" className="container__mission">
        <p className="mission__title" data-testid="mission-name">{name}</p>
        <div className="mission__moreInfos">
          <p data-testid="mission-year">{`🗓️ ${year}`}</p>
          <p data-testid="mission-country">{`📍 ${country}`}</p>
          <p data-testid="mission-destination">{`🚩 ${destination}`}</p>
        </div>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
};
