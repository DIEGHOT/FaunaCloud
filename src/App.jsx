import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarPrincipal from './components/organisms/NavbarPrincipal.jsx';
import Login from './pages/Login.jsx';
import CatalogoServicios from './pages/CatalogoServicios.jsx';
import DetalleServicio from './pages/DetalleServicio.jsx';
import CrearServicio from './pages/CrearServicio.jsx';
import EditarServicio from './pages/EditarServicio.jsx';
import RutaAdmin from './components/RutaAdmin.jsx';
import { ServiciosProvider } from './context/ServiciosContext.jsx';

function App() {
  return (
    <ServiciosProvider>
      <BrowserRouter>
        <NavbarPrincipal />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogo" element={<CatalogoServicios />} />
          <Route path="/servicio/:id" element={<DetalleServicio />} />
          {/* Rutas protegidas solo para administradores */}
          <Route 
            path="/crear-servicio" 
            element={
              <RutaAdmin>
                <CrearServicio />
              </RutaAdmin>
            } 
          />
          <Route 
            path="/editar-servicio/:id" 
            element={
              <RutaAdmin>
                <EditarServicio />
              </RutaAdmin>
            } 
          />
        </Routes>
      </BrowserRouter>
    </ServiciosProvider>
  );
}

export default App;