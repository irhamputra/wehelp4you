export const user = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return action.payload;
    case "LOGOUT":
      return (state = {});
    case "GET_SINGLE_USER":
      return { ...state, selectedUser: action.payload };
    default:
      return state;
  }
};
