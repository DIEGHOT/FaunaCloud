# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and Oxlint's TypeScript related rules in your project.

https://drive.google.com/drive/folders/1CLCxx-GLsm_UA7XmG71Pfqn7-V34J19U?usp=drive_link

# FaunaCloud - Proyecto Parcial 2

Aplicación funcional desarrollada con React + Vite, aplicando Atomic Design y diseño responsivo con Bootstrap.

## Instalación
1. Clonar el repositorio:
2. Instalar las dependencias: `npm install`

## Ejecución
Para iniciar el servidor local:
`npm run dev`

## Pruebas Unitarias
El proyecto incluye pruebas automatizadas con Vitest.
* Ejecutar las pruebas: `npm run test:run`
* Generar el reporte de cobertura: `npm run test:cov`

Actualización ERS - Versión 2
El presente documento define los requerimientos, herramientas y propuestas necesarias para el desarrollo de la aplicación web de la Veterinaria San Marcos. Corresponde a la Versión 2  El proyecto consiste en una aplicación funcional de página única (SPA) desarrollada en React, que incluye un catálogo de servicios, gestión de datos (CRUD), navegación dinámica y formularios validados, respaldado por pruebas unitarias automatizadas.

Requisitos Funcionales IDRequisitoDescripción RF-13Gestión de datos (CRUD)El sistema debe permitir la creación, lectura, actualización y eliminación (CRUD) de registros simulados utilizando el estado de la aplicación.RF-14Navegación SPAEl sistema debe permitir la navegación entre las distintas vistas (Inicio, Servicios, Contacto) sin recargar el navegador, utilizando un enrutador (React Router).

Requisitos No Funcionales IDRequisitoDescripciónRNF-02Diseño responsivoEl sitio debe adaptarse correctamente a distintos tamaños de pantalla (móvil, tablet, escritorio) utilizando el sistema de grillas y clases utilitarias del framework Bootstrap.RNF-04Arquitectura y MantenibilidadEl código debe organizarse siguiendo la metodología Atomic Design (átomos, moléculas, organismos, plantillas) mediante componentes funcionales y reutilizables.RNF-09Pruebas Unitarias y CoberturaEl proyecto debe incluir pruebas unitarias automatizadas ejecutadas con Vitest, garantizando un 100% de cobertura (coverage) en las carpetas lógicas de utilidades y hooks.RNF-10Framework y EmpaquetadoLa aplicación frontend debe estar construida nativamente con React y empaquetada utilizando Vite para optimizar los tiempos de carga y el entorno de desarrollo.

Herramientas y Tecnologías Librería base: React (Componentes funcionales, Hooks).Empaquetador y entorno: Vite y Node.js.Estilos e Interfaz: Framework CSS Bootstrap.Lenguaje de programación: JavaScript (ES6+).Pruebas Automatizadas: Vitest y React Testing Library.Control de versiones: Git y GitHub (repositorio remoto colaborativo).   Editor de código: Visual Studio Code.  

Propuesta del Proyecto (Reemplazar texto completo)
Se propone la migración y evolución del sitio web inicial hacia una Aplicación de Página Única (SPA) construida con React y Vite. El diseño de la interfaz se reestructuró bajo la arquitectura Atomic Design para garantizar la reutilización de componentes, empleando Bootstrap para asegurar un diseño responsivo ágil y consistente. Además de la validación de formularios, el sistema incorpora gestión de estado para simular operaciones CRUD. Para asegurar la calidad del código, el desarrollo se respalda con la implementación de pruebas unitarias mediante Vitest, asegurando la fiabilidad de las reglas de negocio y utilidades clave del sistema.
