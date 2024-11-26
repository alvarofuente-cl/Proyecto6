# Proyecto 6: Backend con Autenticación

## Descripción
Este proyecto es una API RESTful desarrollada con Node.js y Express, que está diseñada para gestionar la autenticación y la administración de usuarios mediante JWT (JSON Web Tokens). La aplicación permite el registro de usuarios, inicio de sesión y acceso a rutas protegidas solo para usuarios autenticados. Está integrada con MongoDB para almacenar los datos de los usuarios.

El propósito de este proyecto es aprender y aplicar las mejores prácticas en seguridad y autenticación en aplicaciones backend.

## Características principales

- **Registro de usuarios**: Permite la creación de nuevos usuarios almacenando sus credenciales de manera segura.
- **Inicio de sesión**: Valida las credenciales y genera un token JWT para el acceso a rutas protegidas.
- **Protección de rutas**: Las rutas que requieren autenticación están protegidas por middleware que verifica el token JWT.
- **Actualización de perfil**: Los usuarios autenticados pueden ver y actualizar su perfil.
- **Manejo de errores**: Validación de errores comunes como usuarios duplicados, credenciales incorrectas o tokens inválidos/expirados.
- **Roles de usuario**: Posibilidad de definir roles (usuario, administrador) con diferentes niveles de acceso.
- **CRUD de usuarios (opcional)**: Funcionalidad para crear, leer, actualizar y eliminar usuarios (si se ha habilitado).
- **Seguridad mejorada**: Las contraseñas se almacenan de manera segura utilizando hashing (bcrypt).

## Tecnologías utilizadas

- **Node.js**: Para ejecutar JavaScript en el servidor.
- **Express**: Framework para construir la API de manera eficiente y modular.
- **MongoDB**: Base de datos NoSQL para almacenar los datos de los usuarios.
- **Mongoose**: ODM para interactuar con MongoDB.
- **JWT (JSON Web Tokens)**: Para la autenticación segura de usuarios.
- **bcrypt.js**: Para el hash seguro de las contraseñas.
- **dotenv**: Para gestionar variables de entorno.
- **Postman**: Para probar las rutas de la API durante el desarrollo.

## Requisitos previos

- **Node.js** (versión 14 o superior)
- **MongoDB** (instancia local o en la nube, como MongoDB Atlas)

# Gracias
