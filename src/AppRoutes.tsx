import { BrowserRouter, Routes, Route } from "react-router-dom";

import BasePage from "./pages/BasePage";
import Home from "./pages/Home";
import Stock from "./pages/Stock";
import Sell from "./pages/Sell";
import Location from "./pages/Location";
import Contact from "./pages/Contact";

import AdminBasePage from "./pages/AdminBasePage";
import Dashboard from "./pages/Dashboard";
import Manufacturers from "./pages/Manufacturers";
import Vehicles from "./pages/Vehicles";
import PrivateRoute from "./utils/PrivateRoute";
import Login from "./pages/Login";

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
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<AdminBasePage />}>
                        <Route path="/dashboard" element={<Dashboard />} />
                        <Route path="/fabricantes" element={<Manufacturers />} />
                        <Route path="/veiculos" element={<Vehicles />} />
                    </Route>
                </Route>
                
                <Route path="/login" element={<Login />} />
                   
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;
