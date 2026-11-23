export class ServicioDTO {
  // Transforma los datos del formulario antes de enviarlos al backend (POST/PUT)
  static paraEnviar(datosFormulario) {
    return {
      nombre: datosFormulario.nombre.trim(),
      descripcion: datosFormulario.descripcion.trim(),
      precio: Number(datosFormulario.precio),
      duracion_minutos: Number(datosFormulario.duracion_minutos)
    };
  }
}