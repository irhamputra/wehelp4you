export const search = (state = [], action) => {
  switch (action.type) {
    case "RESULT_CITY":
      return action.payload;
    default:
      return state;
  }
};
