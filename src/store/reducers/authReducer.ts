import {
  AuthenticationActionsType,
  EnumAuthenticationAction,
} from "../actions/authAction";
import {
  AuthenticationStateInterface,
  EnumAuthenticationStatus,
} from "../contexts/authContext";

export default function authReducer(
  state: AuthenticationStateInterface,
  action: AuthenticationActionsType
): AuthenticationStateInterface {
  switch (action.type) {
    case EnumAuthenticationAction.SignIn:
      return {
        ...state,
        isAuthenticated: EnumAuthenticationStatus.Authenticated,
        token: action.payload,
      };
    case EnumAuthenticationAction.SignOff:
      return {
        ...state,
        isAuthenticated: EnumAuthenticationStatus.Anonymous,
        token: null,
      };
    default:
      return state;
  }
}
