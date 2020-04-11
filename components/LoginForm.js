import React from "react";
import { useForm, ErrorMessage } from "react-hook-form";
import * as yup from "yup";

const validationLogin = yup.object().shape({
  email: yup.string().email().required(),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/g,
      "Your password doesn't contain 8 characters, 1 capital letter, 1 number, 1 special character"
    )
    .required(),
});

const LoginForm = () => {
  const { handleSubmit, register, errors } = useForm({
    validationSchema: validationLogin,
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input
            name='email'
            type='email'
            id='email'
            placeholder='name@example.de'
            ref={register}
            className='form-control'
          />

          <small className='text-danger'>
            <ErrorMessage name='email' errors={errors} />
          </small>
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input
            name='password'
            type='password'
            id='password'
            placeholder='Password'
            ref={register}
            className='form-control'
          />

          <small className='text-danger'>
            <ErrorMessage name='password' errors={errors} />
          </small>
        </div>

        <button
          className='btn text-white btn-block'
          style={{ backgroundColor: "#6067a0", border: "1px solid #6067a0" }}
          type='submit'
        >
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
