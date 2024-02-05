## Dar de alta la base de datos

Para hacer funcionar este proyecto necesitarás una base de datos. 

El proyecto está pensado para trabajar con Postgres, pero con unos pequeños ajustes puedes usar otro tipo de base de datos.

Puedes obtener una base de datos Postgres gratuita en uno de los siguientes sitios:

- [Vercel](https://vercel.com/docs/storage/vercel-postgres)
- [Supabase](https://supabase.com/)
  

## Configurar aplicación

> **IMPORTANTE**: Para que la aplicación funcione correctamente, deberás configuar también el archivo `.env` situado en la carpeta raíz del proyecto, es decir en la carpeta donde tenemos el `README.md`

Sigue los siguientes pasos, esta vez en la carpeta raíz del proyecto:

1. Crear archivo `.env`:

```sh
mv .env.example  .env
nano  .env
```

2. Editar la variable de entorno correspondiente a la URL de tu base de datos en Vercel o Supabase:

```
DATABASE_URL="postgres://..."
```

El formato de la URL es el siguiente `DATABASE_URL="postgres://usuario:password@host:5432/basedatos"`


## Paquetes usados para Prisma

- `prisma`
- `@prisma/client`

## Usado en este ejemplo
- Se han instalado los anteriores paquetes.
- Se han eliminado las migraciones
- Se ha cambiado el cliente de schema.prisma y escrito la database_url en .env
- Se ha vuelto a generar el prisma 
```sh 
npx prisma generate
```
- Se han subido las tablas a la base de datos
```sh 
npx prisma db push
```
- Se ha ejecutado la semilla para incluir filas a las tablas 
```sh 
npm run seed
```
