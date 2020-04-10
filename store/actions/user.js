import { db } from "../../firebase/config";

export const getSingleUser = (id) => {
  return async (dispatch) => {
    const res = await db().collection("helpers").doc(id).get();

    dispatch({ type: "GET_SINGLE_USER", payload: res.data() });
  };
};
