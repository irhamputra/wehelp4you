import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useForm, ErrorMessage } from "react-hook-form";
import { useGeolocation } from "react-use";
import * as yup from "yup";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/config";

const validationRegister = yup.object().shape({
  fullName: yup.string().min(3).required(),
  city: yup.string().required(),
  longitude: yup.number().required(),
  latitude: yup.number().required(),
  services: yup.string().required(),
  tel: yup
    .string()
    .matches(/^[+]?[-\s./0-9]*$/g, "Phone number must be started with + or 0 (zero)")
    .required(),
});

const Register = () => {
  const { handleSubmit, register, errors, setValue } = useForm({
    validationSchema: validationRegister,
  });
  const { push } = useRouter();

  const state = useGeolocation();

  useEffect(() => {
    setValue("longitude", state.longitude);
    setValue("latitude", state.latitude);
  }, [state]);

  const onSubmit = async (data) => {
    const userData = {
      ...data,
      services: data.services.split(",").map((word) => word.trim()),
    };

    await db().collection("helpers").doc(uuidv4()).set(userData);
    await push("/search");
  };

  return (
    <div>
      <h1>Register here</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor='fullName'>Full Name: </label>
          <input type='text' name='fullName' placeholder='Your name here...' ref={register} />
          <ErrorMessage name='fullName' errors={errors} />
        </div>

        <div>
          <label htmlFor='fullName'>City: </label>
          <input type='text' name='city' placeholder='Your location here...' ref={register} />
          <ErrorMessage name='location' errors={errors} />
        </div>

        <div>
          <label htmlFor='fullName'>Geo Location: </label>
          <input type='text' name='longitude' disabled={state.longitude} ref={register} />
          <input type='text' name='latitude' disabled={state.latitude} ref={register} />
          <ErrorMessage name='longitude' errors={errors} />
          <ErrorMessage name='latitude' errors={errors} />
        </div>

        <div>
          <label htmlFor='fullName'>Services: </label>
          <input
            type='text'
            name='services'
            placeholder='Your services here... Separated by coma! (e.g Delivery Goods, Driver)'
            ref={register}
          />
          <ErrorMessage name='services' errors={errors} />
        </div>

        <div>
          <label htmlFor='fullName'>Telephone: </label>
          <input type='tel' name='tel' placeholder='Your tel number here...' ref={register} />
          <ErrorMessage name='tel' errors={errors} />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Register;
