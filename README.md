# NX starter boilerplate

Here is a boilerplate used as starter to build a project.

### Frontend
- [x] NextJS
- [x] React

### Backend
- [x] NestJS
- [x] Prisma

### Auth
- [x] Auth.js
- [x] Api with swagger

## First run

Init env var
```bash
cp .env.example .env
```

Install dependencies
```bash
pnpm i
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