import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/index";
import Filme from "./pages/filme/index";
import Header from "./components/header/Header";
import Erro from "./pages/erro/index";

function RouteApp() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:id" element={<Filme />} />

        <Route path="*" element={<Erro />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default RouteApp;
