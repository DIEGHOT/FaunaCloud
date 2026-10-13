import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavbarPrincipal from './components/organisms/NavbarPrincipal.jsx';
import Login from './pages/Login.jsx';
import CatalogoServicios from './pages/CatalogoServicios.jsx';
import DetalleServicio from './pages/DetalleServicio.jsx';

import { ServiciosProvider } from './context/ServiciosContext.jsx';

function App() {
  return (
    // 2. Envolvemos toda la aplicación con el Proveedor
    <ServiciosProvider>
      <BrowserRouter>
        <NavbarPrincipal />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalogo" element={<CatalogoServicios />} />
          <Route path="/servicio/:id" element={<DetalleServicio />} />
        </Routes>
      </BrowserRouter>
    </ServiciosProvider>
  );
}

export default App;
