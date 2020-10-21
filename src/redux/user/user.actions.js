import { userActionTypes } from "./user.types";

export const setCurrentUser = (user) => {
  console.log("action hit");
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user,
  };
};
