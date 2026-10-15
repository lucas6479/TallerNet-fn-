import { Routes, Route, Navigate } from 'react-router'
import Inicio from '../pages/Inicio'
import Login from '../pages/Login'
import Dashboard from '../pages/Dashboard'
import Ordenes from '../pages/Ordenes'
import Vehiculos from '../pages/Vehiculos'
import Repuestos from '../pages/Repuestos'
import Sucursales from '../pages/Sucursales'
import NotFound from '../pages/NotFound'

function RutaProtegida({ children }) {
  if (!localStorage.getItem('tallernet_usuario')) {
    return <Navigate to="/login" />
  }

  return children
}

function Rutas() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sistema/dashboard" element={<RutaProtegida><Dashboard /></RutaProtegida>} />
      <Route path="/sistema/ordenes" element={<RutaProtegida><Ordenes /></RutaProtegida>} />
      <Route path="/sistema/vehiculos" element={<RutaProtegida><Vehiculos /></RutaProtegida>} />
      <Route path="/sistema/repuestos" element={<RutaProtegida><Repuestos /></RutaProtegida>} />
      <Route path="/sistema/sucursales" element={<RutaProtegida><Sucursales /></RutaProtegida>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default Rutas