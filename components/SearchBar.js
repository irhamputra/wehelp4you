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
    <div className='mt-3'>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <div className='input-group'>
            <input
              name='search'
              className='form-control h-100'
              ref={register}
              type='text'
              placeholder='Search your location..'
            />
            <div className='input-group-append'>
              <button type='submit' className='btn btn-outline-secondary'>
                Search
              </button>
            </div>
          </div>
          <small className='text-danger'>
            <ErrorMessage name='search' errors={errors} />
          </small>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
