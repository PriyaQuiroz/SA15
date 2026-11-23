import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { obtenerDestinos } from "../services/DestinoService";

export default function Destinos() {
  const [destinos, setDestinos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [formEdit, setFormEdit] = useState({ nombre: "", ciudad: "", categoria: "" });

  useEffect(() => {
    obtenerDestinos().then((data) => setDestinos(data));
  }, []);

  function activarEdicion(destino) {
    setEditandoId(destino.id);
    setFormEdit({
      nombre: destino.nombre,
      ciudad: destino.ciudad,
      categoria: destino.categoria,
    });
  }

  function manejarCambio(e) {
    setFormEdit({ ...formEdit, [e.target.name]: e.target.value });
  }

  function guardarCambios(e, id) {
    e.preventDefault();
    const actualizados = destinos.map((item) =>
      item.id === id ? { ...item, ...formEdit } : item
    );
    setDestinos(actualizados);
    setEditandoId(null);
  }

  return (
    <section>
      <h2>Catálogo de Destinos</h2>
      <section className="contenedor-tarjetas">
        {destinos.map((destino) => (
          <article key={destino.id} className="tarjeta">

            <img
              src={destino.imagen}
              alt={`Vista turística de ${destino.nombre} en ${destino.ciudad}`}
              loading="lazy"
              width="300"
              height="185" 
            />
            
            {editandoId === destino.id ? (
              <form onSubmit={(e) => guardarCambios(e, destino.id)}>
                <input
                  type="text"
                  name="nombre"
                  value={formEdit.nombre}
                  onChange={manejarCambio}
                  required
                />
                <input
                  type="text"
                  name="ciudad"
                  value={formEdit.ciudad}
                  onChange={manejarCambio}
                  required
                />
                <input
                  type="text"
                  name="categoria"
                  value={formEdit.categoria}
                  onChange={manejarCambio}
                  required
                />
                <button type="submit">Guardar</button>
                <button type="button" onClick={() => setEditandoId(null)}>
                  Cancelar
                </button>
              </form>
            ) : (
              <>
                <h3>{destino.nombre}</h3>
                <p>Ciudad: {destino.ciudad}</p>
                <p>Categoría: {destino.categoria}</p>
                <nav className="acciones-tarjeta">
                  <Link to={`/destinos/${destino.id}`}>Ver destino</Link>
                  <button onClick={() => activarEdicion(destino)}>Modificar</button>
                </nav>
              </>
            )}
          </article>
        ))}
      </section>
    </section>
  )
}
