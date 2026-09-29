function Boton({ texto, onClick, tipo = 'button', variante = 'primary', className = '' }) {
  return (
    <button 
      type={tipo} 
      onClick={onClick} 
      className={`btn btn-${variante} ${className}`}
    >
      {texto}
    </button>
  );
}

export default Boton;