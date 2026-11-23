import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import LayoutPrincipal from "./Layouts/LayoutPrincipal";
import "./App.css";

const Inicio = lazy(() => import("./pages/Inicio"));
const Destinos = lazy(() => import("./pages/Destinos"));
const DetallesDestino = lazy(() => import("./pages/DetallesDestino"));
const Nosotros = lazy(() => import("./pages/Nosotros"));
const Noencontrado = lazy(() => import("./pages/Noencontrado"));

function App() {
  return (
    <Suspense fallback={<p className="cargando">Cargando página...</p>}>
      <Routes>
        <Route path="/" element={<LayoutPrincipal />}>
          <Route index element={<Inicio />} />
          <Route path="destinos" element={<Destinos />} />
          <Route path="destinos/:id" element={<DetallesDestino />} />
          <Route path="nosotros" element={<Nosotros />} />
        </Route>
        <Route path="*" element={<Noencontrado />} />
      </Routes>
    </Suspense>
  );
}

export default App
