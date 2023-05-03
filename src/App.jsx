import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Eror404 from "./pages/Error404";
import Host from "./pages/Host";
import Place from "./pages/Place";
import AuthContext from "./context/auth-context";

function App() {
  return (
    <AuthContext.Provider>
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
