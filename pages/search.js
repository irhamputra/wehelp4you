import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import HelperList from "../components/HelperList";
import { getAllLists, searchCity } from "../store/actions/search";

const Search = () => {
  const dispatch = useDispatch();
  const { query } = useRouter();

  useEffect(() => {
    if (query?.city) {
      dispatch(searchCity(query?.city));
    } else {
      dispatch(getAllLists());
    }
  }, []);

  return (
    <div className="mt-5">
      <h1>Helpers list here</h1>
      <HelperList city={query?.city} />
    </div>
  );
};

export default Search;
