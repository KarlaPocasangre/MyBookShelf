# MyBookShelf
Aplicación fullstack para la gestión de libros personales.
Permite crear, editar, eliminar y organizar libros por estado, con una arquitectura profesional separada en frontend y backend.
# Demo

![MyBookShelf](https://github.com/user-attachments/assets/30b92518-5ebf-4be9-8f9c-7d7bc9628968)


# Tecnologías utilizadas
## Frontend
* React (Vite)
* React Router
* Bootstrap (estilos e iconos)
* SweetAlert2 (alertas modernas)
* Canvas Confetti (efectos visuales)
* Axios (consumo de API)
## Backend
* Node.js
* Express
* Prisma ORM
* PostgreSQL
* Nodemon (entorno de desarrollo)
# Arquitectura del Proyecto
El proyecto está dividido en dos carpetas principales:
```text
MyBookShelf/
├── client/          # Frontend (React + Vite)
└── server/          # Backend (Node.js + Express + Prisma)
    ├── prisma/      # Esquema de base de datos
    └── src/         # Lógica del servidor
```
## Backend Structure
```text
server/
├── prisma/
├── src/
│   ├── controllers/
│   ├── routes/
│   ├── services/
│   ├── db/
│   ├── app.js
│   └── server.js
```
Arquitectura basada en capas:
* Routes
* Controllers
* Services
* Database (Prisma)
## Frontend Structure
```text
client/src/
├── api/
├── components/
│   └── books/
├── hooks/
├── pages/
├── routes/
├── services/
└── utils/
```
Arquitectura modular:

* Separación por responsabilidades

* Hooks personalizados

* Servicios para consumo de API

# Funcionalidades

* Crear libro

* Editar libro

* Eliminar libro (con confirmación SweetAlert)

* Marcar como leído

* Marcar como favorito

* Filtros por estado

* UI moderna con Bootstrap

*  Persistencia en PostgreSQL

* Arquitectura profesional escalable
# Base de Datos

* Base de datos: **PostgreSQL**
* ORM utilizado: **Prisma**
  ## Modelo principal
  ```text
  model Book {
  id          Int      @id @default(autoincrement())
  title       String
  author      String
  description String?
  status      String
  favorite    Boolean  @default(false)
  createdAt   DateTime @default(now())
  }

# Configuración del Proyecto
1. Clonar repositorio:
```text
   https://github.com/KarlaPocasangre/MyBookShelf.git
   cd mybookshelf
```
2. Configurar variables de entorno
   * Crear archivo .env dentro de server/ basado en .env.example
   ```text
   DATABASE_URL="postgresql://usuario:password@localhost:5432/mybookshelf?schema=public"
   PORT=4000

3. Instalar dependencias
* Raiz del proyecto
```text
cd mybookshelf
npm install
```
* Backend:
```text
cd server
npm install
```
* Frontend:
```text
cd client
npm install
```
4. Ejecutar migraciones Prisma
```text
npx prisma migrate dev
```
5. Ejecutar proyecto

* Backend:
```text
npm run dev
```
* Frontend:
```text
npm run dev
```
# Endpoints API
| Método | Endpoint       | Descripción          |
| ------ | -------------- | -------------------- |
| GET    | /api/books     | Obtener libros       |
| GET    | /api/books/:id | Obtener libro por ID |
| POST   | /api/books     | Crear libro          |
| PUT    | /api/books/:id | Actualizar libro     |
| DELETE | /api/books/:id | Eliminar libro       |
#  Autora

 **Karla Estefany Hernandez Pocasangre**

> *  Estudiante de **Ingeniería en Sistemas Computacionales**
> *  Estudiante de **Técnico Superior Universitario en Ciberseguridad**
