import React from 'react';
import { Link } from 'react-router-dom';

export const FirstPage = ({ city, setCity, peopleCount, setPeopleCount }) => {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const handlePeopleChange = (e) => {
    setPeopleCount(e.target.value);
  };

  return (
    <div className="search">
      <input
        type="text"
        placeholder="city name"
        value={city}
        onChange={handleCityChange}
      />
      <input
        type="text"
        placeholder="number of people"
        value={peopleCount}
        onChange={handlePeopleChange}
      />
      <p>
        <Link to="/nextpage">Search</Link>
      </p>
    </div>
  );
};
