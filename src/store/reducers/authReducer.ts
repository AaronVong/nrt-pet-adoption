import {
  AuthenticationActionsType,
  EnumAuthenticationAction,
} from "@/store/actions/authAction";
import {
  AuthenticationStateInterface,
  EnumAuthenticationStatus,
} from "@/store/contexts/authContext";

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
