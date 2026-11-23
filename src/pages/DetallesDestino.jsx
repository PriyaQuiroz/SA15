import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { obtenerDestinos } from "../services/DestinoService";

export default function DetallesDestino() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [destino, setDestino] = useState(null);

  useEffect(() => {
    obtenerDestinos().then((data) => {
      const encontrado = data.find((item) => String(item.id) === String(id));
      setDestino(encontrado);
    });
  }, [id]);

  if (!destino) {
    return <p>Cargando información del destino...</p>;
  }

  return (
    <article className="detalle-destino">
      <img
        src={destino.imagen}
        alt={`Fotografía principal de ${destino.nombre}, ${destino.ciudad}`}
        width="600"
        height="360"
      />

      <h2>{destino.nombre}</h2>
      <p><strong>Ciudad:</strong> {destino.ciudad} ({destino.region})</p>
      <p><strong>Categoría:</strong> {destino.categoria}</p>
      <p><strong>Precio de entrada:</strong> S/ {destino.precioEntrada}</p>
      <p><strong>Duración de visita:</strong> {destino.duracionVisita}</p>
      <p>{destino.descripcion}</p>
      <button onClick={() => navigate(-1)}>Atrás</button>
    </article>
  );
}
