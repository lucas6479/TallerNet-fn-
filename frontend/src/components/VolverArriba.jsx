function VolverArriba() {
  return (
    <button
      className="volver-arriba btn btn-dark rounded-circle d-flex align-items-center justify-content-center"
      aria-label="Volver al inicio"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <i className="bi bi-arrow-up"></i>
    </button>
  )
}

export default VolverArriba
