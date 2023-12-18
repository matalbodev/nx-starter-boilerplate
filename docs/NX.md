# Nx workspace commands

## React

Create a component

```bash
nx g @nx/next:component libs/shared/ui/src/lib/Component/Component --export=false --nameAndDirectoryFormat=as-provided --style=scss
```

*Note : to be compatible with NextJS you can export client/server component from client.ts/server.ts have a look in libs/shared/ui

Generate a story

```bash
nx g @nx/react:component-story --componentPath=lib/Component/Component.tsx --project=shared-ui
```
