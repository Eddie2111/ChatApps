import React from 'react';

/**
 * @typedef {object} EventsProps
 * @param {object} props
 * @param {string[]} props.events
 * @returns {JSX.Element}
 */
export function Events({events}) {
  return (
    <ul>
      {events.map((event, index) => (
        <li key={index}>{event}</li>
      ))}
    </ul>
  );
}
