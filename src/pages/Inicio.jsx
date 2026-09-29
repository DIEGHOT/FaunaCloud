import { useServicios } from '../context/ServiciosContext';
import { formatoMoneda } from '../utils/formatoMoneda';

export const Inicio = () => {
  const { servicios } = useServicios(); // Usamos el nuevo hook

  return (
    <main className="container py-4">
      <h1 className="mb-4">Nuestros Servicios</h1>
      <div className="row g-4">
        {servicios.map((item) => (
          <div key={item.id} className="col-12 col-md-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <div className="card-body">
                <h3 className="card-title h5 text-primary">{item.nombre}</h3>
                <p className="card-text text-muted">{item.descripcion}</p>
                <strong className="fs-5">{formatoMoneda(item.precio)}</strong>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default Inicio;