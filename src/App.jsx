import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importamos el Contexto (¡Vital para que no se rompan los datos de tu catálogo!)
import { ServiciosProvider } from './context/ServiciosContext.jsx';

// Importamos los componentes y páginas
import NavbarPrincipal from './components/organisms/NavbarPrincipal.jsx';
import Inicio from './pages/Inicio.jsx';
import CatalogoServicios from './pages/CatalogoServicios.jsx';
import Login from './pages/Login.jsx'; 

export default function App() {
  return (
    <ServiciosProvider>
      <BrowserRouter>
        {/* El encabezado es global y no cambia al navegar */}
        <NavbarPrincipal />
        
        {/* El enrutador intercambia las páginas según la URL */}
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<CatalogoServicios />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ServiciosProvider>
  );
}