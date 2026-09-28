import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home/index'
import Filme from './pages/filme/index'


function RouteApp() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/filme/:id" element={<Filme />} />
            </Routes>
        </BrowserRouter>
    )
}