import React, { useEffect } from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import * as yup from "yup";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { searchCity } from "../store/actions/search";

const validationSearch = yup.object().shape({
  search: yup.string().required(),
});

const SearchBar = () => {
  const { handleSubmit, register, errors, setValue } = useForm({
    validationSchema: validationSearch,
  });
  const { push, query } = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (query) {
      setValue("search", query?.city, false);
    }
  }, []);

  const onSubmit = async ({ search }) => {
    dispatch(searchCity(search));
    await push(`/search?city=${search}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          name="search"
          ref={register}
          type="text"
          placeholder="Search your location.."
        />
        <button type="submit">Search</button>
      </form>

      <ErrorMessage name="search" errors={errors} />
    </div>
  );
};

export default SearchBar;
