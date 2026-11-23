import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <section className="hero-inicio">
      <h2>Bienvenido a Destinos Turísticos</h2>
      <p>Explora los mejores lugares turísticos del Perú.</p>
      <Link to="/destinos" className="btn-explorar">Explorar destinos</Link>
    </section>
  )
}
