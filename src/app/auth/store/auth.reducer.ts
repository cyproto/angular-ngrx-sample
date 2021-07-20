import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
  user: User;
}

const initialState = {
  user: null,
};

export function authReducer(
  state = initialState,
  action: AuthActions.AuthActions
) {
  switch (action.type) {
    case AuthActions.LOGIN:
      const user = new User(
        action.payload.email,
        action.payload.userId,
        action.payload.token,
        action.payload.expirationDate
      );

      return {
        ...state,
        user,
      };
      break;
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null,
      };
      break;
    default:
      break;
  }
  return state;
}
