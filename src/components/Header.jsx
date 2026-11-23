import { NavLink } from "react-router-dom";

export default function Header() {
  function claseactiva({ isActive, isPending }) {
    return isPending ? "pending" : isActive ? "active" : "";
  }

  return (
    <header>
      <h1>DESTINOS TURÍSTICOS</h1>
      <nav>
        <NavLink to="/" className={claseactiva}>Inicio</NavLink>
        <NavLink to="/destinos" className={claseactiva}>Destinos</NavLink>
        <NavLink to="/nosotros" className={claseactiva}>Nosotros</NavLink>
      </nav>
    </header>
  )
}
