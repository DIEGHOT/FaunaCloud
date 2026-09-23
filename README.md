# FaunaCloud 🐾

Proyecto Semestral — DSY1104 Desarrollo FullStack II

## 👥 Nombre del Equipo
FaunaCloud

## Integrantes
| Nombre completo | 
|---|---|
| Benjamin Rojas |
| Diego Sanzana |

## Caso
**Veterinaria San Marcos** (Forma A) — contexto de negocio asignado por la asignatura DSY1104.

## Descripción del caso
Veterinaria San Marcos es una clínica veterinaria de Rancagua que hoy agenda citas y administra fichas clínicas en papel, lo que provoca fichas perdidas, choques de horario y un 20% de inasistencia por falta de recordatorios. FaunaCloud digitaliza este flujo: permite a los dueños de mascotas solicitar y revisar sus citas en línea, a la recepcionista confirmar/reagendar solicitudes y gestionar fichas, y a los veterinarios consultar el historial clínico (diagnósticos, vacunas y medicamentos) desde cualquier dispositivo. Un panel de administración gestiona usuarios y roles, y un mapa integrado muestra la ubicación de la clínica.

## Estructura del proyecto
Organización de `src` bajo la metodología **Atomic Design**:

```text
src/
├── assets/
├── components/
│   ├── atoms/
│   │   ├── Boton.jsx
│   │   ├── Etiqueta.jsx
│   │   └── InputTexto.jsx
│   ├── molecules/
│   │   └── CampoFormulario.jsx
│   ├── organisms/
│   │   ├── FormularioLogin.jsx
│   │   └── NavbarPrincipal.jsx
│   ├── templates/
│   │   └── AuthLayout.jsx
│   └── pages/            # (pendiente de mover aquí las páginas de nivel superior)
├── pages/
│   ├── Inicio.jsx
│   └── Login.jsx
├── App.jsx
├── App.css
├── main.jsx
└── index.css
```

## Tecnologías utilizadas
- **React 19** (SPA, componentización)
- **Vite** (bundler y entorno de desarrollo)
- **React Bootstrap** + **Bootstrap 5** (UI responsive)
- **React Router DOM** (enrutamiento de páginas)
- **oxlint** (linting)

## Cómo ejecutar el proyecto
```bash
# 1. Instalar dependencias
npm install

# 2. Levantar entorno de desarrollo
npm run dev

# 3. (Opcional) Generar build de producción
npm run build

# 4. (Opcional) Previsualizar el build de producción
npm run preview
```

## Material complementario
Documentos del semestre (ERS y otros entregables): 
[Carpeta de Google Drive](https://drive.google.com/drive/folders/1IT02-hOnyh-8oSXoujCFhEJP4lu7KrCz?usp=sharing)
