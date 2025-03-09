# Proyecto Habitos - Programación Avanzada

Este proyecto es una API REST creada con **Node.js** y **ExpressJS**, conectada a una base de datos **MongoDB**.

## 📌 Requisitos previos

Antes de ejecutar este proyecto, asegúrate de tener instalado lo siguiente:

- [Node.js](https://nodejs.org/) (versión recomendada: 18+)
- [MongoDB](https://www.mongodb.com/) (local o en la nube con MongoDB Atlas)
- [Git](https://git-scm.com/)

## 🚀 Instalación

1. **Clona el repositorio:**
   ```sh
   git clone https://github.com/chrismendez11/proyecto-programacion-avanzada.git
   cd proyecto-programacion-avanzada
   ```

2. **Instala las dependencias:**
   ```sh
   npm install
   ```

3. **Configura las variables de entorno:**
   - Crea un archivo `.env` en la raíz del proyecto y agrega:
     ```env
     PORT=3000
     MONGO_URI=mongodb://localhost:27017/mi_base_de_datos
     ```

     Si usas MongoDB Atlas, reemplaza `MONGO_URI` con la URL de conexión proporcionada por Atlas.

## ▶️ Ejecución del proyecto

Para iniciar el servidor ejecuta:
```sh
npm start
```

