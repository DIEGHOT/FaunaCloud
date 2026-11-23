import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { actualizarServicio } from '../services/servicioService';
import { useServicios } from '../context/ServiciosContext';

export default function EditarServicio() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { servicios, setServicios } = useServicios();

  const [formulario, setFormulario] = useState({
    nombre: '',
    descripcion: '',
    precio: '',
    duracion_minutos: ''
  });

  // Precargar los datos del servicio seleccionado desde el Contexto
  useEffect(() => {
    const servicioActual = servicios.find((s) => String(s.id) === String(id));
    if (servicioActual) {
      setFormulario({
        nombre: servicioActual.nombre || '',
        descripcion: servicioActual.descripcion || '',
        precio: servicioActual.precio || '',
        duracion_minutos: servicioActual.duracion_minutos || 30
      });
    }
  }, [id, servicios]);

  const handleChange = (e) => {
    setFormulario({ ...formulario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // 1. Enviamos el formulario directamente. El DTO en servicioService se encarga de los números.
      const respuesta = await actualizarServicio(id, formulario);

      // Adaptamos por si el backend devuelve el objeto directo o envuelto en "servicio"
      const servicioModificado = respuesta.servicio ? respuesta.servicio : respuesta;

      // 2. Actualizamos el servicio modificado en el Contexto
      const listaActualizada = servicios.map((s) =>
        String(s.id) === String(id) ? servicioModificado : s
      );
      setServicios(listaActualizada);

      alert('¡Servicio actualizado con éxito!');
      navigate('/catalogo');
    } catch (error) {
      // 3. Mostramos el mensaje de error limpio que configuramos en manejarErrorAxios
      alert(error.message);
    }
  };

  return (
    <div className="container py-5">
      <div className="card shadow border-0 mx-auto" style={{ maxWidth: '500px' }}>
        <div className="card-body p-4">
          <h2 className="card-title fw-bold mb-4 text-center">Editar Servicio</h2>

          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label fw-bold">Nombre del Servicio *</label>
              <input
                type="text"
                className="form-control"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-bold">Descripción</label>
              <textarea
                className="form-control"
                name="descripcion"
                rows="3"
                value={formulario.descripcion}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Precio ($) *</label>
                <input
                  type="number"
                  className="form-control"
                  name="precio"
                  value={formulario.precio}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="col-md-6 mb-3">
                <label className="form-label fw-bold">Duración (min)</label>
                <input
                  type="number"
                  className="form-control"
                  name="duracion_minutos"
                  value={formulario.duracion_minutos}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="d-grid gap-2 mt-4">
              <button type="submit" className="btn btn-warning fw-semibold">
                Guardar Cambios
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary"
                onClick={() => navigate('/catalogo')}
              >
                Cancelar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}