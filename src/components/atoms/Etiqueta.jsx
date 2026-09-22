function Etiqueta({ texto, htmlFor }) {
  return (
    <label htmlFor={htmlFor} className="form-label fw-bold small text-secondary">
      {texto}
    </label>
  );
}

export default Etiqueta;