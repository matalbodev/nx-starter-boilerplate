# Nx workspace commands

## React

Create a component

```bash
nx g @nx/react:component libs/shared/ui/src/lib/Component/Component --export=true
```

*Note: Don't forget to add 'use client' on top of client side component for NextJS

Generate a story

```bash
nx g @nx/react:component-story --componentPath=lib/Component/Component.tsx --project=shared-ui
```
