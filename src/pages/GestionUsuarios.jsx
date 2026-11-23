import React, { useState, useEffect } from 'react';

const API_URL = `http://${window.location.hostname}:3000/api/usuarios`;
const REGISTRO_URL = `http://${window.location.hostname}:3000/api/auth/register`;

function GestionUsuarios() {
  const [usuarios, setUsuarios] = useState([]);
  const [mensaje, setMensaje] = useState('');
  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [usuarioEditandoId, setUsuarioEditandoId] = useState(null);

  // Estados del formulario (Crear / Editar)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rol, setRol] = useState('cliente');

  const obtenerToken = () => {
    const tokenRaw = localStorage.getItem('token');
    return tokenRaw ? tokenRaw.replace(/^"|"$/g, '') : '';
  };

  // 1. LEER (GET)
  const cargarUsuarios = async () => {
    const token = obtenerToken();
    try {
      const respuesta = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      const data = await respuesta.json();
      if (respuesta.ok) {
        const lista = Array.isArray(data) ? data : (data.usuarios || data.data || []);
        setUsuarios(lista);
      } else {
        setMensaje(data.mensaje || data.message || `Error ${respuesta.status}: No autorizado.`);
      }
    } catch (error) {
      console.error('Error de red:', error);
      setMensaje('Error de conexión con el servidor.');
    }
  };

  useEffect(() => {
    cargarUsuarios();
  }, []);

  // Preparar formulario para CREAR
  const abrirCrear = () => {
    setUsuarioEditandoId(null);
    setEmail('');
    setPassword('');
    setRol('cliente');
    setMostrarFormulario(true);
  };

  // Preparar formulario para EDITAR
  const abrirEditar = (user) => {
    setUsuarioEditandoId(user.id);
    setEmail(user.email || '');
    setPassword('');
    setRol(user.rol || 'cliente');
    setMostrarFormulario(true);
  };

  const cerrarFormulario = () => {
    setMostrarFormulario(false);
    setUsuarioEditandoId(null);
    setEmail('');
    setPassword('');
    setRol('cliente');
  };

  // 2. CREAR (POST) y 3. EDITAR (PUT)
  const guardarUsuario = async (e) => {
    e.preventDefault();
    const token = obtenerToken();

    const esEdicion = usuarioEditandoId !== null;
    const url = esEdicion ? `${API_URL}/${usuarioEditandoId}` : REGISTRO_URL;
    const metodo = esEdicion ? 'PUT' : 'POST';

    const bodyData = { email, rol };
    if (password.trim() !== '') {
      bodyData.password = password;
    }

    try {
      const respuesta = await fetch(url, {
        method: metodo,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(bodyData)
      });

      const data = await respuesta.json().catch(() => ({}));

      if (respuesta.ok) {
        setMensaje(esEdicion ? 'Usuario actualizado con éxito.' : 'Usuario creado con éxito.');
        cerrarFormulario();
        cargarUsuarios();
      } else {
        setMensaje(data.mensaje || data.message || data.error || `Error ${respuesta.status} al guardar el usuario.`);
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Error de red al guardar el usuario.');
    }
  };

  // 4. ELIMINAR (DELETE)
  const eliminarUsuario = async (id) => {
    const confirmar = window.confirm('¿Estás seguro de eliminar este usuario?');
    if (!confirmar) return;

    const token = obtenerToken();
    try {
      const respuesta = await fetch(`${API_URL}/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });

      if (respuesta.ok) {
        setMensaje('Usuario eliminado con éxito.');
        cargarUsuarios();
      } else {
        const data = await respuesta.json().catch(() => ({}));
        setMensaje(data.mensaje || data.message || 'No tienes permiso para eliminar usuarios.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMensaje('Error de red al eliminar el usuario.');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-dark mb-4">Gestión de Usuarios (Admin)</h2>

      {mensaje && (
        <div className="alert alert-info alert-dismissible fade show" role="alert">
          {mensaje}
          <button type="button" className="btn-close" onClick={() => setMensaje('')}></button>
        </div>
      )}

      {!mostrarFormulario && (
        <button className="btn btn-primary mb-3" onClick={abrirCrear}>
          Crear Nuevo Usuario
        </button>
      )}

      {mostrarFormulario && (
        <div className="card mb-4 shadow-sm">
          <div className="card-header bg-dark text-white fw-bold">
            {usuarioEditandoId ? `Editar Usuario #${usuarioEditandoId}` : 'Crear Nuevo Usuario'}
          </div>
          <div className="card-body">
            <form onSubmit={guardarUsuario}>
              <div className="row g-3">
                <div className="col-md-4">
                  <label className="form-label fw-semibold">Correo electrónico</label>
                  <input
                    type="email"
                    className="form-control"
                    placeholder="usuario@faunacloud.cl"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">
                    Contraseña {usuarioEditandoId && <small className="text-muted">(opcional)</small>}
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    placeholder={usuarioEditandoId ? 'Dejar vacío para no cambiar' : '••••••••'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required={!usuarioEditandoId}
                  />
                </div>

                <div className="col-md-4">
                  <label className="form-label fw-semibold">Rol</label>
                  <select
                    className="form-select"
                    value={rol}
                    onChange={(e) => setRol(e.target.value)}
                  >
                    <option value="cliente">cliente</option>
                    <option value="admin">admin</option>
                  </select>
                </div>
              </div>

              <div className="mt-3 d-flex gap-2">
                <button type="submit" className="btn btn-success">
                  {usuarioEditandoId ? 'Guardar Cambios' : 'Registrar Usuario'}
                </button>
                <button type="button" className="btn btn-secondary" onClick={cerrarFormulario}>
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Email</th>
            <th>Rol</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.length > 0 ? (
            usuarios.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.email}</td>
                <td>{user.rol}</td>
                <td>
                  <button
                    className="btn btn-warning btn-sm me-2"
                    onClick={() => abrirEditar(user)}
                  >
                    Editar
                  </button>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => eliminarUsuario(user.id)}
                  >
                    Eliminar
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" className="text-center text-muted">
                No hay usuarios para mostrar.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default GestionUsuarios;