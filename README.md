# Sistema de Gestión de Servicios Veterinarios

Aplicación web desarrollada con **React + Vite** y **Bootstrap** para consultar el catálogo de servicios de una clínica veterinaria, solicitar citas y administrar los servicios mediante un CRUD.

> **Alcance del Parcial 2:** los datos son simulados dentro del propio proyecto (archivo JSON + `localStorage`). El backend y la base de datos corresponden al Parcial 3, por lo que en esta etapa **no se utiliza AWS ni ningún servicio en la nube**.

---

## Funcionalidades

- **Catálogo de servicios:** listado de servicios con nombre, precio, especie y observaciones.
- **Detalle de servicio:** vista individual de cada servicio.
- **Solicitar cita:** flujo principal para que el usuario agende una atención.
- **Panel de administración:** CRUD completo (crear, leer, actualizar y eliminar servicios).
- **Regla de negocio:** recargo de \$10.000 para consultas de urgencia fuera de horario.
- **Diseño responsivo:** adaptado a celular, tablet y escritorio con Bootstrap.

---

## Tecnologías

| Área | Herramienta |
| --- | --- |
| Framework | React |
| Bundler | Vite |
| Estilos | Bootstrap |
| Estado global | Context API |
| Persistencia simulada | `localStorage` + `servicios.json` |
| Testing | Vitest + Testing Library |
| Linter | Oxlint |

---

## Arquitectura del proyecto

El proyecto sigue **Atomic Design** y separa responsabilidades en datos, servicios, contexto e interfaz.

```
src/
├── data/
│   └── servicios.json          # Datos iniciales simulados
├── services/
│   └── servicioService.js      # CRUD con localStorage (JavaScript puro, fácil de testear)
├── context/
│   └── ServiciosContext.jsx    # Provee los servicios a toda la app
├── utils/
│   └── formatoMoneda.js        # Formato CLP y regla de recargo por urgencia
├── components/
│   ├── atoms/                  # Elementos básicos (botones, inputs, etc.)
│   ├── molecules/              # Combinaciones simples (ej. TarjetaServicio)
│   └── organisms/              # Secciones completas (ej. Navbar, FormularioSolicitudCita)
├── pages/                      # Catálogo, Detalle, Solicitar Cita, Panel Admin
├── App.jsx
└── main.jsx                    # App envuelta con <ServiciosProvider>
```

### Capas principales

- **`servicioService.js`**: funciones `listarServicios`, `obtenerServicio`, `crearServicio`, `actualizarServicio` y `eliminarServicio`. Si `localStorage` está vacío, se carga `servicios.json` como datos iniciales.
- **`ServiciosContext.jsx`**: expone `servicios`, `crear`, `actualizar` y `eliminar` mediante el hook `useServicios()`, que debe usarse dentro de un `ServiciosProvider`.
- **`formatoMoneda.js`**: `formatearCLP(valor)` da formato de pesos chilenos y `calcularPrecioUrgencia(precioBase, esFueraDeHorario)` aplica el recargo de \$10.000.

---

## Instalación y ejecución

```bash
# 1. Instalar dependencias
npm install

# 2. Levantar el servidor de desarrollo
npm run dev

# 3. Generar el build de producción
npm run build
```

---

## Testing (Vitest)

Instalación de las dependencias de pruebas (si aún no están):

```bash
npm install -D vitest jsdom @testing-library/react @testing-library/jest-dom @testing-library/user-event @vitest/coverage-v8
```

Comandos:

```bash
# Ejecutar las pruebas
npx vitest run

# Generar el informe de cobertura
npx vitest run --coverage
```

Se busca cumplir con un mínimo de **10 pruebas unitarias exitosas**, cubriendo el servicio de datos (`servicioService.js`), las utilidades (`formatoMoneda.js`) y los componentes principales.

---

## Entregables del Parcial 2

- [x] Enlace al repositorio de GitHub
- [x] Proyecto comprimido (.zip)
- [ ] ERS actualizado a la **versión 2**
- [ ] Documento de cobertura (explicación de las pruebas realizadas)

### Checklist de desarrollo

- [ ] Páginas: Catálogo, Detalle, Solicitar Cita y Panel Admin
- [ ] Componentes en `atoms`, `molecules` y `organisms`
- [ ] Vistas responsivas (celular, tablet, escritorio)
- [ ] CRUD simulado con `localStorage` conectado a `ServiciosContext`
- [ ] Vitest y Testing Library configurados
- [ ] Mínimo 10 pruebas unitarias pasando
- [ ] Informe de cobertura generado

---

## Documentación

Carpeta de Google Drive con la documentación del proyecto (ERS y documento de cobertura):

[Ver documentación en Google Drive](https://drive.google.com/drive/folders/1CLCxx-GLsm_UA7XmG71Pfqn7-V34J19U?usp=drive_link)

---

## Próximos pasos (Parcial 3)

- Reemplazar los datos simulados por un backend real.
- Incorporar una base de datos.
- Desplegar los servicios en la nube.
