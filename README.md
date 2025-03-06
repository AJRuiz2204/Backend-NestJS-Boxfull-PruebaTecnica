# Proyecto Nest Backend BoxFul

## Estructura de Carpetas
- /src
  - ...código principal...
- /prisma
  - ...archivos de configuración de Prisma...
- ...otros directorios...

## Exportar la Base de Datos
Si usas PostgreSQL, puedes emplear por ejemplo:
```bash
pg_dump -U usuario -h localhost nombre_de_base > respaldo.sql
```
Reemplaza los valores según tu configuración.

## Modificar el Archivo .env
Define tus credenciales y variables, por ejemplo:
```
DATABASE_URL=postgresql://usuario:contraseña@localhost:5432/nombre_de_base
PORT=3000
```
Ajusta los valores conforme a tu entorno.

## Ejecutar la Aplicación
1. Instala dependencias:
   ```bash
   npm install
   ```
2. Ejecuta migraciones (si corresponde):
   ```bash
   npx prisma migrate dev
   ```
3. Inicia la app:
   ```bash
   npm run start
   ```

## Documentación
La documentación Swagger se encuentra en:
```
http://localhost:3000/api-docs