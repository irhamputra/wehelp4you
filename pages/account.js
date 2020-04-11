import React from "react";
import { useRouter } from "next/router";

const Account = () => {
  const { push } = useRouter();

  return (
    <div className='text-center'>
      <h3>Account</h3>
      <p>Login form here</p>

      <hr />
      <button
        className='btn text-white'
        style={{ backgroundColor: "#6067a0", border: "1px solid #6067a0" }}
        onClick={async () => await push("/register")}
      >
        Register
      </button>
    </div>
  );
};

export default Account;
