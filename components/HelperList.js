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
    search?.lists?.map(({ id, name, city }) => {
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
          <p>{name}</p>
          <p>{city}</p>
        </div>
      );
    });

  const renderOneCity = () =>
    search?.city?.map(({ id, name, city }) => (
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
        <p>{name}</p>
        <p>{city}</p>
      </div>
    ));

  return <div>{city ? renderOneCity() : renderAllCity()}</div>;
};

export default HelperList;
