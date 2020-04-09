import React from "react";
import { useSelector } from "react-redux";

const HelperList = () => {
  const lists = useSelector((state) => state.search);

  return (
    <div>
      <h1>Lists</h1>
      <ul>
        {lists.map(({ name, city, services }, i) => {
          return (
            <li key={i}>
              {name} - {city} - {services.map((service) => service)}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default HelperList;
