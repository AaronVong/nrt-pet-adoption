import {
  AccessTokenInterface,
  AuthenticationStateInterface,
} from "../contexts/authContext.ts";

enum EnumAuthenticationAction {
  SignIn = "Sign In",
  SignOff = "Sign Off",
}

interface SignInActionInterface {
  type: EnumAuthenticationAction.SignIn;
  payload: AccessTokenInterface;
}

interface SignOffActionInterface {
  type: EnumAuthenticationAction.SignOff;
}

/** ====
 * Actions function (pure function)
 *  ====
 */

function SignInAction(payload: AccessTokenInterface): SignInActionInterface {
  return {
    type: EnumAuthenticationAction.SignIn,
    payload,
  };
}

function SignOffAction(): SignOffActionInterface {
  return {
    type: EnumAuthenticationAction.SignOff,
  };
}

type AuthenticationActionsType = SignInActionInterface | SignOffActionInterface;

export type {
  AuthenticationActionsType,
  SignOffActionInterface,
  SignInActionInterface,
};
export { EnumAuthenticationAction, SignInAction, SignOffAction };
