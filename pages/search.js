import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
import HelperList from "../components/HelperList";
import { getAllLists, searchCity } from "../store/actions/search";

const Search = () => {
  const search = useSelector((state) => state.search);
  const dispatch = useDispatch();
  const { query } = useRouter();

  useEffect(() => {
    if (query) {
      dispatch(searchCity(query.city));
    }

    dispatch(getAllLists());
  }, []);

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

  return (
    <div>
      <h1>Helpers list here</h1>
      <HelperList city={query?.city} />
    </div>
  );
};

export default Search;
