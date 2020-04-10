export const search = (state = {}, action) => {
  switch (action.type) {
    case "RESULT_CITY":
      return { ...state, city: action.payload };
    case "GET_ALL_LISTS":
      return { ...state, lists: action.payload };
    default:
      return state;
  }
};
