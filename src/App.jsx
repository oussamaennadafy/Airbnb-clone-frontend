import { useEffect, useState, useReducer } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Eror404 from "./pages/Error404";
import Host from "./pages/Host";
import Place from "./pages/Place";
import AuthContext from "./context/auth-context";

function App() {
  const authReducer = (state, action) => {
    switch (action.type) {
      case "login":
        console.log("login");
        return { ...state };
      case "logout":
        console.log("logout");
        return { ...state };
      case "register":
        console.log("register");
        return { ...state };
    }
  };
  const authInitialState = {
    loggedIn: false,
    username: "",
  };
  const [authState, dispatchAuth] = useReducer(authReducer, authInitialState);
  return (
    <AuthContext.Provider value={authState}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="*" element={<Eror404 />} />
          <Route path="/host" element={<Host />} />
          <Route path="/places/:id" element={<Place />} />
        </Routes>
      </BrowserRouter>
    </AuthContext.Provider>
  );
}

export default App;
