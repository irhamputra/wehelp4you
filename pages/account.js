import React from "react";
import { useRouter } from "next/router";
import Login from "../components/LoginForm";
import image from "../public/image3.png";

const Account = () => {
  const { push } = useRouter();

  return (
    <div className="mt-5">
      <h3 className='text-center'>Account</h3>
      <div className='d-flex justify-content-center'>
        <img className='img-fluid pt-3' src={image} width='70%' alt='img' />
      </div>

      <Login />

      <hr />
      <p className='text-center small'>Don't have an account?</p>
      <button
        className='btn mb-2 text-white btn-block'
        style={{ backgroundColor: "#6067a0", border: "1px solid #6067a0" }}
        onClick={async () => await push("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Account;
