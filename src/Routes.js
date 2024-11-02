import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Clientes from "./pages/Clientes";
import Leads from "./pages/Leads";
import Dashboard from "./pages/Dashboard";
import Preferencias from "./pages/Preferencias";
import Configuracoes from "./pages/Configuracoes";
import Servicos from "./pages/Servicos";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Servicos />} />
                <Route path="/clients" element={<Clientes />} />
                <Route path="/leads" element={<Leads />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/preferences" element={<Preferencias />} />
                <Route path="/configurations" element={<Configuracoes />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;