"use client";
import { useEffect, useReducer } from "react";
import authReducer from "../reducers/authReducer";
import {
  AuthenticationContext,
  EnumAuthenticationStatus,
  authenticationInitState,
} from "../contexts/authContext";
import { SignInAction, SignOffAction } from "../actions/authAction";
import { checkAuthentication } from "@/services/authentication";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [auth, authDispatch] = useReducer(authReducer, authenticationInitState);

  // Check authentication on mount
  useEffect(() => {
    (async () => {
      if (auth.isAuthenticated != EnumAuthenticationStatus.Authenticated) {
        const result = await checkAuthentication();
        if (result.status) {
          authDispatch(SignInAction(result.data));
        } else {
          authDispatch(SignOffAction());
        }
      }
    })();
  }, [auth.isAuthenticated]);
  return (
    <AuthenticationContext.Provider value={{ auth, authDispatch }}>
      {children}
    </AuthenticationContext.Provider>
  );
}
