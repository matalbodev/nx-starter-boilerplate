# NX starter boilerplate

Here is a boilerplate used as starter to build a project.

### Frontend
- [x] NextJS
- [x] React
- [] React native

### Backend
- [x] NestJS
- [x] Prisma

### Auth
- [x] Auth.js
- [x] Api

## First run

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

## App commands

Run next app
```bash
nx run web-app:serve
```