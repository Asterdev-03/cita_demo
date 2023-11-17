"use client";

import { SessionProvider } from "next-auth/react";

const AuthContextProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default AuthContextProvider;
