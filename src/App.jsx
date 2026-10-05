import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { ServiciosProvider } from './context/ServiciosContext';

import NavbarPrincipal from './components/organisms/NavbarPrincipal';
import Login from './pages/Login'; 
import CatalogoServicios from './pages/CatalogoServicios';

export default function App() {
  return (
    <ServiciosProvider>
      <BrowserRouter>
        <NavbarPrincipal />
        
        <Routes>
          
          <Route path="/" element={<Navigate to="/login" />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogo" element={<CatalogoServicios />} />
        </Routes>
      </BrowserRouter>
    </ServiciosProvider>
  );
}
