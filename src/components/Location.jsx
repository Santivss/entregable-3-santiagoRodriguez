import React from "react";
import "./styles/location.css";

const Location = ({ location }) => {
  console.log(location);
  return (
    <div className="sup">
      <h1>Nombre {location?.name} </h1>
      <ul>
        <li>
          <span>Type: {location?.type}</span>
        </li>
        <li>
          <span>Dimension: {location?.dimension}</span>
        </li>
        <li>
          <span>Population: {location?.residents.length}</span>
        </li>
      </ul>
    </div>
  );
};

export default Location;
