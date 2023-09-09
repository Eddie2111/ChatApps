'use client';
import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
/**
 * Component responsible for displaying the connection state.
 * @param {Object} props Component properties.
 * @param {boolean} props.isConnected Indicates whether the socket is connected.
 * @return {JSX} Rendered component.
 */
export function ConnectionState({isConnected}:any):JSX.Element {
  return <p>State: {'' + isConnected}</p>;
}

// Add prop type validation
ConnectionState.propTypes = {
  isConnected: PropTypes.bool.isRequired,
};
