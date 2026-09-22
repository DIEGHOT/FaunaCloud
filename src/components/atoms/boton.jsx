function Boton({ texto, variante = "primary", tipo = "button", onClick, deshabilitado = false, className = "" }) {
  return (
    <button 
      type={tipo} 
      className={`btn btn-${variante} w-100 ${className}`} 
      onClick={onClick}
      disabled={deshabilitado}
    >
      {texto}
    </button>
  );
}

export default Boton;