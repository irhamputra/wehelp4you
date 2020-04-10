import { db } from "../../firebase/config";

export const searchCity = (town) => {
  return async (dispatch) => {
    let result = [];

    const snapshot = await db().collection("helpers").get();

    snapshot.forEach((res) => {
      const { city } = res.data();
      if (city.includes(town)) {
        result.push({
          id: res.id,
          ...res.data(),
        });
      }
    });

    dispatch({ type: "RESULT_CITY", payload: result });
  };
};

export const getAllLists = () => {
  return async (dispatch) => {
    let result = [];
    const snapshot = await db().collection("helpers").get();

    await snapshot.forEach((res) => {
      result.push({
        id: res.id,
        ...res.data(),
      });
    });

    dispatch({ type: "GET_ALL_LISTS", payload: result });
  };
};
