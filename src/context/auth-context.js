import { createContext } from "react";

const AuthContext = createContext({
  username: null,
});

export default AuthContext;
