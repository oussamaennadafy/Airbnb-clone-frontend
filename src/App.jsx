import { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Eror404 from "./pages/Error404";
import Host from "./pages/Host";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="*" element={<Eror404 />} />
        <Route path="/host" element={<Host />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
