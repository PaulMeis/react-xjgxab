import React from 'react';

export const NextPage = ({ city, peopleCount }) => {
  return (
    <div>
      <p>city: {city}</p>
      <p># of people: {peopleCount}</p>
    </div>
  );
};
