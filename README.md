# Proyecto ReactJS con Bootstrap - PWA

Este es un proyecto de front-end construido con **ReactJS** y **Bootstrap**, configurado como una **Progressive Web App (PWA)** y desplegado en **Netlify**.

## Características

-   **ReactJS**: Utilizado para el desarrollo de la interfaz de usuario de una sola página (SPA).
-   **Bootstrap**: Se utiliza para los estilos y la creación de una interfaz visualmente atractiva y responsive.
-   **PWA**: La aplicación está configurada como una Progressive Web App, lo que permite el acceso fuera de línea y la instalación en dispositivos móviles.
-   **Despliegue en Netlify**: La aplicación está desplegada y alojada en Netlify para una entrega continua y fácil integración con Git.

## Consideraciones sobre el Tiempo de Carga

Ten en cuenta que la primera vez que accedes a la aplicación en Netlify puede haber una demora en la carga. Esto se debe a que tanto el backend como la base de datos están alojados en servidores gratuitos, los cuales pueden entrar en estado de hibernación si no han sido utilizados recientemente. La respuesta inicial puede tardar unos segundos mientras el servidor se reactiva.

## Instalación

### Prerrequisitos

Asegúrate de tener instalados los siguientes programas:

-   [Node.js](https://nodejs.org/) (versión 18 o superior)
-   [npm](https://www.npmjs.com/)

### Clonar el repositorio

`git clone https://github.com/lucianoPrz/TP-front.git
cd TP-front` 

### Instalación de dependencias

Ejecuta el siguiente comando para instalar las dependencias necesarias del proyecto:

`npm install` 

### Ejecutar en entorno local

Para iniciar el servidor de desarrollo, ejecuta:

`npm run dev` 

El proyecto estará disponible en `http://localhost:5173`.

## Scripts Disponibles

-   **`npm run dev`**: Inicia el servidor de desarrollo.
-   **`npm run build`**: Genera los archivos optimizados para producción.
-   **`npm run preview`**: Previsualiza la aplicación en modo producción.

## Configuración de PWA

Este proyecto está configurado como una PWA con las siguientes características:

-   **Manifest.json**: Definición de la aplicación, íconos y colores.
-   **Service Worker**: Cacheo de los archivos estáticos para que la aplicación funcione offline.

## Despliegue en Netlify

Este proyecto está desplegado automáticamente en Netlify. Cada vez que se realiza un push a la rama principal (o la rama configurada), Netlify construye y despliega automáticamente el proyecto.

URL del proyecto en Netlify: https://gestionstock-tplabo.netlify.app/
