import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  username: "",
});

export default AuthContext;
