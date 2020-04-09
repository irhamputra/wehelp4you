import { db } from "../../firebase/config";

export const searchCity = (town) => {
  return async (dispatch) => {
    let result = [];

    const snapshot = await db().collection("helpers").get();

    snapshot.forEach((res) => {
      const { city } = res.data();
      if (city.includes(town)) {
        result.push(res.data());
      }
    });

    dispatch({ type: "RESULT_CITY", payload: result });
  };
};
