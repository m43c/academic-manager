# Proyecto de Academic Manager

Este proyecto consta de una carpeta principal "AcademicManager" que contiene el frontend construido con React Native y el SDK de Expo en la carpeta "my-app", y el backend desarrollado con Node.js, Express y MongoDB en la carpeta "server". La aplicación de frontend interactúa con el backend para administrar información académica.

## Frontend (Client)

### Requisitos previos
Asegúrate de tener Node.js instalado en tu sistema.

### Configuración

1. Clona este repositorio:
   ```bash
   git clone https://tu-repositorio-url.com/AcademicManager
   cd AcademicManager/my-app
   ```
   
2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Inicia el cliente
    ```bash
    npx expo start
    ```
    
Te proporcionará opciones para ejecutar la aplicación en web y en dispositivos físicos o emuladores.

## Backend (Server)

### Requisitos previos

Asegúrate de tener Node.js y MongoDB instalados en tu sistema.

### Configuración

1. Clona este repositorio:
    ```bash
    git clone https://tu-repositorio-url.com/AcademicManager
    cd AcademicManager/server
    ```
    
2. Instala las dependencias:
    ```bash
    npm install
    ```
    
3. Configura la base de datos MongoDB en el archivo database.js:
    ```javascript
    mongoose.connect("mongodb://127.0.0.1:27017/academicManager");
    ```
    
4. Inicia el servidor
    ```bash
    npm run dev
    ```
    
## Dependencias del Backend

- cors: Para habilitar el intercambio de recursos entre dominios.
- express: El marco web utilizado para crear la API REST.
- mongoose: Para interactuar con la base de datos MongoDB.
- morgan: Para el registro de solicitudes HTTP.

### Dependencias de Desarrollo (solo para entorno de desarrollo)

- nodemon: Herramienta que reinicia automáticamente el servidor al realizar cambios en el código durante el desarrollo.
