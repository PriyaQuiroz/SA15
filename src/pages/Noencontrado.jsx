import { Link } from "react-router-dom";

export default function NoEncontrado() {
  return (
    <section className="pagina-404">
      <h2>404 - Página no encontrada</h2>
      <p>La ruta que buscas no existe. Revisa la URL.</p>
      <Link to="/" className="btn-explorar">Volver al inicio</Link>
    </section>
  )
}
