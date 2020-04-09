export const user = (state = {}, action) => {
		switch (action.type) {
				case "LOGIN":
						return action.payload;
				case "REGISTER":
						return action.payload;
				case "LOGOUT":
						return (state = {});
				default:
						return state;
		}
};
