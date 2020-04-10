import React from "react";
import { useSelector } from "react-redux";

const HelperList = ({ city }) => {
  const search = useSelector((state) => state.search);

  const renderAllCity = () =>
    search?.lists?.map((list, i) => {
      return (
        <div
          key={i}
          style={{
            border: "1px solid black",
            marginBottom: "5px",
            padding: "5px",
          }}
        >
          <p>{list.name}</p>
          <p>{list.city}</p>
        </div>
      );
    });

  const renderOneCity = () =>
    search?.city?.map((town, i) => (
      <div
        key={i}
        style={{
          border: "1px solid black",
          marginBottom: "5px",
          padding: "5px",
        }}
      >
        <p>{town.name}</p>
        <p>{town.city}</p>
      </div>
    ));

  return <div>{city ? renderOneCity() : renderAllCity()}</div>;
};

export default HelperList;
