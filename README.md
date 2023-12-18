# NX starter boilerplate

Why use this boilerplate ?

This repo bundle hours of code for you with a fully set up API and a frontend.

### Frontend
- [x] NextJS
- [x] React

### Backend
- [x] NestJS
- [x] Prisma
- [x] Api with swagger

### Auth
- [x] Auth.js

## First run

Init env var
```bash
cp .env.example .env
```
Check .env file to edit it with your values.

Install dependencies
```bash
pnpm i
```

Launch postgresSQL to docker
```bash
docker-compose up -d
```

Generate types for prisma
```bash
nx run shared-schema:generate-types
```

Initialise DB
```bash
nx run shared-schema:migrate --name init
```

## Nx workspace commands

```bash
nx migrate latest
```

## Api commands

Run in dev mode
```bash
nx run api:serve
```
Access Swagger UI : [http://localhost:3000/api](http://localhost:3000/api)

## App commands

Run next app
```bash
nx run web-app:serve
```
Access your app front-end : [http://localhost:4200](http://localhost:4200)