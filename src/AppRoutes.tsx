import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Sell from "./pages/Sell";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

import AdminBasePage from "./pages/AdminBasePage";
import Dashboard from "./pages/Dashboard";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BasePage />}>
                    <Route index element={<Home />} />
                    <Route path="/home" element={<Home />} />   
                    <Route path="/estoque" element={<Stock />} />
                    <Route path="/vender" element={<Sell />} />
                    <Route path="/localizacao" element={<Location />} />
                    <Route path="/contato" element={<Contact />} />
                </Route>
                <Route path="/auth" element={<AdminBasePage />}>
                    <Route index element={<Dashboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
