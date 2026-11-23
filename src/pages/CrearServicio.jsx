import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { crearServicio } from '../services/servicioService'; // Ajusta la ruta si es necesario
import { useServicios } from '../context/ServiciosContext';

export default function CrearServicio() {
  const navigate = useNavigate();
  const { servicios, setServicios } = useServicios();
  
  // Estado para guardar lo que el usuario escribe
  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    duracion_minutos: ''
  });

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evita que la página recargue
    try {
      // 1. Enviamos el formulario directamente. El DTO en servicioService se encarga de los números.
      const respuesta = await crearServicio(formulario);
      
      // Dependiendo de cómo responda tu backend, agregamos el servicio al contexto
      const nuevoServicio = respuesta.servicio ? respuesta.servicio : respuesta;
      setServicios([...servicios, nuevoServicio]);
      
      alert('¡Servicio creado con éxito!');
      navigate('/catalogo'); // Volvemos al catálogo
    } catch (error) {
      // 2. Mostramos el mensaje de error limpio que configuramos en manejarErrorAxios
      alert(error.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body p-4">
          <h2 className="card-title fw-bold mb-4 text-center">Nuevo Servicio</h2>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nombre del Servicio *</label>
              <input type="text" className="form-control" name="nombre" value={formulario.nombre} onChange={handleChange} required />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Descripción</label>
              <textarea className="form-control" name="descripcion" rows="3" value={formulario.descripcion} onChange={handleChange}></textarea>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Precio ($) *</label>
                <input type="number" className="form-control" name="precio" value={formulario.precio} onChange={handleChange} required />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Duración (min)</label>
                <input type="number" className="form-control" name="duracion_minutos" value={formulario.duracion_minutos} onChange={handleChange} />
              </div>
            </div>

            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-success">Guardar Servicio</button>
              <button type="button" className="btn btn-outline-secondary" onClick={() => navigate('/catalogo')}>Cancelar</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}