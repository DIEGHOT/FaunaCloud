import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ServiciosProvider } from './context/ServiciosContext';
import CatalogoServicios from './pages/CatalogoServicios';

export default function App() {
  return (
    <ServiciosProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CatalogoServicios />} />
          <Route path="/servicios" element={<CatalogoServicios />} />
        </Routes>
      </BrowserRouter>
    </ServiciosProvider>
  );
}
