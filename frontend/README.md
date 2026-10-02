# TallerNet

TallerNet es un sistema web de gestión para talleres mecánicos. Busca reemplazar el manejo tradicional mediante papeles, cuadernos, órdenes escritas y planillas separadas, centralizando toda la información del taller en una sola plataforma accesible desde el navegador.

El sistema está pensado tanto para talleres con una sola sucursal como para empresas con múltiples puntos de atención. Permite gestionar vehículos, órdenes de trabajo, repuestos, stock y sucursales desde un mismo lugar, con la posibilidad de consultar y transferir stock entre sucursales.

Actualmente el proyecto se encuentra en desarrollo. El trabajo en curso se enfoca en la landing pública, la componentización en React y la preparación de la estructura visual que servirá de base para las funcionalidades del sistema.

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

El proyecto está en desarrollo activo. En esta etapa se está trabajando en:

- Landing pública del sistema.
- Diseño responsive.
- Componentización en React.
- Migración progresiva de secciones desde la referencia terminada.
- Animaciones con Motion.
- Interfaz visual (identidad oscura con verde como color principal).
- Preparación de la estructura para las funcionalidades futuras del sistema.

---

## Tecnologías utilizadas

### Frontend

- React 19
- Vite 8
- JavaScript (ES Modules)

### Diseño / UI

- Bootstrap 5
- React-Bootstrap
- Bootstrap Icons
- Motion (animaciones)
- react-live-avatar (personaje interactivo)
- Fuentes: Manrope + Geist Mono (Google Fonts)

### Herramientas

- Git + GitHub
- ESLint

---

## Estructura del proyecto

```text
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── vistasComoFunciona/       # Sub-vistas del showcase interactivo
│   │   │   ├── VistaDashboard.jsx
│   │   │   ├── VistaOrdenes.jsx
│   │   │   ├── VistaStock.jsx
│   │   │   ├── VistaSucursales.jsx
│   │   │   ├── VistaTransferencias.jsx
│   │   │   └── VistaVehiculos.jsx
│   │   ├── AsistenteHero.jsx         # Personaje interactivo (pendiente de integrar)
│   │   ├── ComoFunciona.jsx
│   │   ├── FlujoDeTrabajo.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── ProblemaCotidiano.jsx
│   │   └── RedDeSucursales.jsx
│   ├── data/
│   │   ├── comoFuncionaData.js
│   │   ├── flujoDeTrabajoData.js
│   │   └── problemaCotidianoData.js
│   ├── styles/
│   │   └── styles.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── package.json
└── vite.config.js
```

- `components/` — componentes de cada sección de la landing, más las sub-vistas del showcase.
- `data/` — datos separados de los componentes para facilitar el mantenimiento.
- `styles/` — CSS personalizado de la landing pública (prefijo `pub-`).

---

## Seguimiento de componentes

| Componente / sección       | Archivo                                      | Estado                         |
| -------------------------- | -------------------------------------------- | ------------------------------ |
| Navbar                     | `src/components/Navbar.jsx`                  | ✅ Implementado                 |
| Hero                       | `src/components/Hero.jsx`                    | ✅ Implementado                 |
| Problema cotidiano         | `src/components/ProblemaCotidiano.jsx`       | ✅ Implementado                 |
| Cómo funciona              | `src/components/ComoFunciona.jsx`            | ✅ Implementado                 |
| Flujo de trabajo           | `src/components/FlujoDeTrabajo.jsx`          | ✅ Implementado                 |
| Red de sucursales          | `src/components/RedDeSucursales.jsx`         | ✅ Implementado                 |
| Asistente / personaje Hero | `src/components/AsistenteHero.jsx`           | 🚧 Creado / pendiente de integrar |
| Footer                     | —                                            | ⏳ Pendiente                    |
| Botón volver al inicio     | —                                            | ⏳ Pendiente                    |
| Secciones de Leandro (FAQ, Demo, Equipo, Chatbot) | —               | ⏳ Pendiente                    |

---

## Pendientes de migración / desarrollo

- ⏳ Migrar / integrar el Footer.
- ⏳ Integrar `AsistenteHero.jsx` en la sección Hero (personaje interactivo que sigue el cursor).
- ⏳ Agregar el botón de volver al inicio de la página.
- ⏳ Migrar / integrar las secciones de Leandro: FAQ, Solicitar Demo, Equipo, Chatbot.

---

## SEO y buenas prácticas

### Implementado

- `<title>` descriptivo: `TallerNet — Sistema de gestión para talleres mecánicos`.
- `<meta name="description">` con descripción del sistema.
- `<meta name="robots" content="index, follow">`.
- `<meta name="theme-color" content="#090B0A">`.
- `lang="es"` en el elemento `<html>`.

### Reglas a mantener

- Un solo `<h1>` principal por página.
- Jerarquía correcta de encabezados (`h1` → `h2` → `h3`).
- HTML semántico: uso correcto de `header`, `nav`, `main`, `section`, `article` y `footer`.
- Textos comprensibles para usuarios y motores de búsqueda.
- Imágenes con atributo `alt` descriptivo.
- Links y botones con textos claros.
- Diseño responsive.
- Accesibilidad básica.
- Evitar contenido oculto o agregado únicamente para SEO.

---

## Diseño y convenciones

- Bootstrap 5 como base del layout y la grilla.
- CSS personalizado en `styles.css` con prefijo `pub-` para estilos de la landing pública.
- Variables CSS definidas en `:root` para tokens de color, tipografía, espaciado y sombras.
- Interfaz oscura (`#090B0A`) con verde (`#22E58A`) como color principal.
- Tipografías: Manrope para texto general, Geist Mono para elementos de interfaz simulada.
- Animaciones con Motion, sutiles y funcionales.
- Componentes React simples, sin estado compartido global por ahora.
- Datos separados del componente cuando el contenido es extenso (ver `src/data/`).

---

## Cómo levantar el proyecto

```bash
git clone <URL_DEL_REPOSITORIO>
cd tallerNet-fn-/frontend
npm install
npm run dev
```

Vite mostrará en la terminal la URL local del servidor de desarrollo (por defecto `http://localhost:5173`).

Para generar el build de producción:

```bash
npm run build
```

---

## Flujo Git

- `main` → versión estable.
- `dev` → integración de desarrollo.
- `feature/*` → funcionalidades o secciones individuales.

```text
feature/* → dev → main
```

Las ramas `feature/*` siempre se abren desde `dev` y se integran mediante Pull Request hacia `dev`. Nunca directamente a `main`.

---

## Equipo de desarrollo

- Lucas Jesús Cordero
- Juan Javier Cordero
- Leandro Valdez
