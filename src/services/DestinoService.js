export async function obtenerDestinos() {
  const respuesta = await fetch("/data/destinos.json");
  if (!respuesta.ok) {
    throw new Error("No se pudo cargar el archivo de destinos");
  }
  return await respuesta.json();
}
