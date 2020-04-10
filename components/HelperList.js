import React from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

const HelperList = ({ city }) => {
  const search = useSelector((state) => state.search);
  const { push } = useRouter();

  const goToUser = async (id) => {
    await push("/user/[id]", `/user/${id}`);
  };

  const renderAllCity = () =>
    search?.lists?.map(({ id, fullName, city, services }) => {
      return (
        <div
          key={id}
          style={{
            border: "1px solid black",
            marginBottom: "5px",
            padding: "5px",
            cursor: "pointer",
          }}
          onClick={() => goToUser(id)}
        >
          <p>{fullName}</p>
          <p>{city}</p>
          <span>Services: </span>
          <ul>
            {services?.map((service, i) => (
              <li key={i}>{service}</li>
            ))}
          </ul>
        </div>
      );
    });

  const renderOneCity = () =>
    search?.city?.map(({ id, fullName, city, services }) => (
      <div
        key={id}
        style={{
          border: "1px solid black",
          marginBottom: "5px",
          padding: "5px",
          cursor: "pointer",
        }}
        onClick={() => goToUser(id)}
      >
        <p>{fullName}</p>
        <p>{city}</p>
        <span>Services: </span>
        <ul>
          {services?.map((service, i) => (
            <li key={i}>{service}</li>
          ))}
        </ul>
      </div>
    ));

  return <div>{city ? renderOneCity() : renderAllCity()}</div>;
};

export default HelperList;
