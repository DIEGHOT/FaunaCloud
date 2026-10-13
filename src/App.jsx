import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ServiciosProvider } from './context/ServiciosContext.jsx';
import NavbarPrincipal from './components/organisms/NavbarPrincipal.jsx';
import Inicio from './pages/Inicio.jsx';
import CatalogoServicios from './pages/CatalogoServicios.jsx';
import Login from './pages/Login.jsx'; 

export default function App() {
  return (
    <ServiciosProvider>
      <BrowserRouter>
        <NavbarPrincipal />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/catalogo" element={<CatalogoServicios />} />
          <Route path="/servicio/:id" element={<CatalogoServicios />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h2 style={{ textAlign: 'center', marginTop: '50px' }}>Página no encontrada</h2>} />
        </Routes>
      </BrowserRouter>
    </ServiciosProvider>
  );
}