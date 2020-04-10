import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { getSingleUser } from "../../store/actions/user";

const UserID = () => {
  const { query } = useRouter();
  const { selectedUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (query?.id) {
      dispatch(getSingleUser(query?.id));
    }
  }, [query?.id]);

  return (
    <div>
      <h1>User</h1>
      <p>{query?.id}</p>
      <p>{selectedUser?.fullName}</p>
      <p>{selectedUser?.city}</p>
    </div>
  );
};

export default UserID;
