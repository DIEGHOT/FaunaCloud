function InputTexto({ tipo = "text", placeholder, valor, onChange, nombre, requerido = false }) {
  return (
    <input
      type={tipo}
      name={nombre}
      className="form-control"
      placeholder={placeholder}
      value={valor}
      onChange={onChange}
      required={requerido}
    />
  );
}

export default InputTexto;