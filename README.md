# TallerNet

TallerNet es un sistema web de gestión para talleres mecánicos. Reemplaza el manejo tradicional mediante papeles, cuadernos, órdenes escritas y planillas separadas, centralizando toda la información del taller en una sola plataforma accesible desde el navegador.

El sistema está pensado tanto para talleres con una sola sucursal como para empresas con múltiples puntos de atención. Permite gestionar vehículos, órdenes de trabajo, repuestos, stock y sucursales desde un mismo lugar.

---

## Objetivos principales

- Digitalizar la operación diaria del taller.
- Centralizar vehículos y órdenes de trabajo.
- Gestionar repuestos y control de stock.
- Conectar múltiples sucursales.
- Permitir transferencias de stock entre sucursales.
- Mantener historial y trazabilidad de vehículos y trabajos realizados.

---

## Estado actual del proyecto

El proyecto cuenta con una landing pública completa y un sistema administrativo funcional con las siguientes capacidades:

- Landing pública con todas sus secciones.
- Sistema de login con autenticación por localStorage.
- Panel de administración (Dashboard).
- Gestión de vehículos, órdenes de trabajo, repuestos y sucursales.
- API simulada con JSON Server.
- Navegación con React Router y protección de rutas.
- Animaciones con Motion y diseño responsive.
- Interfaz oscura con verde como color principal.

---

## Tecnologías utilizadas

### Frontend

- React 19
- Vite 8
- JavaScript (ES Modules)
- React Router 8

### Diseño / UI

- Bootstrap 5
- React-Bootstrap
- Bootstrap Icons
- Motion (animaciones)
- react-live-avatar (personaje interactivo)
- Fuentes: Manrope + Geist Mono (Google Fonts)

### Funcionalidad

- Axios (peticiones HTTP)
- SweetAlert2 (alertas y confirmaciones)
- JSON Server (API simulada)

### Herramientas

- Git + GitHub
- ESLint

---

## Estructura del proyecto

```text
tallerNet-fn-/
├── db.json                        # Base de datos de JSON Server
├── db.example.json                # Ejemplo de estructura de datos
├── frontend/
│   ├── public/
│   │   └── favicon.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/
│   │   │   │   └── Reveal.jsx     # Animación de entrada con Motion
│   │   │   ├── AsistenteHero.jsx
│   │   │   ├── Chatbot.jsx
│   │   │   ├── Demo.jsx
│   │   │   ├── Equipo.jsx
│   │   │   ├── FlujoDeTrabajo.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Navbar.jsx
│   │   │   ├── ProblemaCotidiano.jsx
│   │   │   ├── RedDeSucursales.jsx
│   │   │   └── VolverArriba.jsx
│   │   ├── data/
│   │   │   ├── equipoData.js
│   │   │   ├── flujoDeTrabajoData.js
│   │   │   └── problemaCotidianoData.js
│   │   ├── pages/
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Inicio.jsx
│   │   │   ├── Login.jsx
│   │   │   ├── NotFound.jsx
│   │   │   ├── Ordenes.jsx
│   │   │   ├── Repuestos.jsx
│   │   │   ├── Sucursales.jsx
│   │   │   └── Vehiculos.jsx
│   │   ├── routes/
│   │   │   └── Rutas.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── styles/
│   │   │   └── styles.css
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
```

- `components/` — secciones de la landing pública y componentes reutilizables.
- `components/ui/` — componentes de utilidad (animaciones, wrappers).
- `data/` — datos separados de los componentes para facilitar el mantenimiento.
- `pages/` — páginas de la aplicación (landing, login y panel administrativo).
- `routes/` — configuración de React Router y protección de rutas.
- `services/` — configuración de Axios y llamadas a la API.
- `styles/` — CSS personalizado con prefijo `pub-` para la landing pública.

---

## Componentes y páginas

| Sección / página           | Archivo                                      | Estado          |
| -------------------------- | -------------------------------------------- | --------------- |
| Navbar                     | `src/components/Navbar.jsx`                  | ✅ Implementado  |
| Hero                       | `src/components/Hero.jsx`                    | ✅ Implementado  |
| Asistente / personaje Hero | `src/components/AsistenteHero.jsx`           | ✅ Implementado  |
| Problema cotidiano         | `src/components/ProblemaCotidiano.jsx`       | ✅ Implementado  |
| Flujo de trabajo           | `src/components/FlujoDeTrabajo.jsx`          | ✅ Implementado  |
| Red de sucursales          | `src/components/RedDeSucursales.jsx`         | ✅ Implementado  |
| Demo                       | `src/components/Demo.jsx`                    | ✅ Implementado  |
| Equipo                     | `src/components/Equipo.jsx`                  | ✅ Implementado  |
| Chatbot                    | `src/components/Chatbot.jsx`                 | ✅ Implementado  |
| Footer                     | `src/components/Footer.jsx`                  | ✅ Implementado  |
| Volver arriba              | `src/components/VolverArriba.jsx`            | ✅ Implementado  |
| Inicio (landing)           | `src/pages/Inicio.jsx`                       | ✅ Implementado  |
| Login                      | `src/pages/Login.jsx`                        | ✅ Implementado  |
| Dashboard                  | `src/pages/Dashboard.jsx`                    | ✅ Implementado  |
| Órdenes de trabajo         | `src/pages/Ordenes.jsx`                      | ✅ Implementado  |
| Vehículos                  | `src/pages/Vehiculos.jsx`                    | ✅ Implementado  |
| Repuestos                  | `src/pages/Repuestos.jsx`                    | ✅ Implementado  |
| Sucursales                 | `src/pages/Sucursales.jsx`                   | ✅ Implementado  |
| 404 Not Found              | `src/pages/NotFound.jsx`                     | ✅ Implementado  |

---

## SEO y buenas prácticas

- `<title>` descriptivo: `TallerNet — Sistema de gestión para talleres mecánicos`.
- `<meta name="description">` con descripción del sistema.
- `<meta name="robots" content="index, follow">`.
- `<meta name="theme-color" content="#090B0A">`.
- `lang="es"` en el elemento `<html>`.
- Un solo `<h1>` principal por página.
- Jerarquía correcta de encabezados (`h1` → `h2` → `h3`).
- HTML semántico: `header`, `nav`, `main`, `section`, `article`, `footer`.
- Diseño responsive.
- Accesibilidad básica.

---

## Diseño y convenciones

- Bootstrap 5 como base del layout y la grilla.
- CSS personalizado en `styles.css` con prefijo `pub-` para la landing pública.
- Variables CSS en `:root` para tokens de color, tipografía, espaciado y sombras.
- Interfaz oscura (`#090B0A`) con verde (`#22E58A`) como color principal.
- Tipografías: Manrope para texto general, Geist Mono para elementos de interfaz simulada.
- Animaciones con Motion, sutiles y funcionales.
- Datos separados del componente cuando el contenido es extenso (ver `src/data/`).

---

## Cómo levantar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd tallerNet-fn-/frontend
npm install
npm run dev
```

Vite mostrará en la terminal la URL local (por defecto `http://localhost:5173`).

Para levantar la API simulada (JSON Server) en una terminal separada:

```bash
npm run api
```

La API queda disponible en `http://localhost:3001`.

Para generar el build de producción:

```bash
npm run build
```

---

## Flujo Git

- `main` → versión estable.
- `dev` → integración de desarrollo.
- `feature/*` / `chore/*` / `style/*` → ramas de trabajo individuales.

```text
feature/* → dev → main
```

Las ramas de trabajo siempre se abren desde `dev` y se integran mediante Pull Request hacia `dev`. Nunca directamente a `main`.

---

## Equipo de desarrollo

- Lucas Jesús Cordero
- Juan Javier Cordero
- Leandro Valdez
