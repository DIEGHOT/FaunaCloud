import Etiqueta from "../atoms/Etiqueta";
import InputTexto from "../atoms/InputTexto";

function CampoFormulario({ etiqueta, tipo, placeholder, valor, onChange, nombre, requerido }) {
  return (
    <div className="mb-3">
      <Etiqueta texto={etiqueta} htmlFor={nombre} />
      <InputTexto
        tipo={tipo}
        placeholder={placeholder}
        valor={valor}
        onChange={onChange}
        nombre={nombre}
        requerido={requerido}
      />
    </div>
  );
}

export default CampoFormulario;