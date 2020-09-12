import React from "react";
import City from "./City";

const ListCities = () => {
  // set a scrollY
  const cities = ["London", "Barcelona", "Long Beach"];

  return (
    <ul>
      {cities.map((city, i) => (
        <City key={i} name={city} />
      ))}
    </ul>
  );
};

export default ListCities;
