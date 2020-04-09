import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { searchCity } from "../store/actions/search";

const validationSearch = yup.object().shape({
  search: yup.string().required(),
});

const SearchBar = () => {
  const { handleSubmit, register, errors, reset } = useForm({
    validationSchema: validationSearch,
  });
  const dispatch = useDispatch();

  const onSubmit = ({ search }) => {
    dispatch(searchCity(search));
    reset();
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
