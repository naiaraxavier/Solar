import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class Title extends Component {
  render() {
    const { headline} = this.props;
    console.log(headline);
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propTypes = {
  headline: PropTypes.string.isRequired,
};
