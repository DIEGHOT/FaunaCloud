import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

// Agregamos la extensión .jsx a los archivos locales
import { ServiciosProvider } from './context/ServiciosContext.jsx';
import NavbarPrincipal from './components/organisms/NavbarPrincipal.jsx';
import Login from './pages/Login.jsx'; 
import CatalogoServicios from './pages/CatalogoServicios.jsx';

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
