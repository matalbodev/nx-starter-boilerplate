# Nx workspace commands

## Next/React

Create a client component

```bash
nx g @nx-starter/custom-react-next:component libs/shared/ui/src/lib/CSRComponent/CSRComponent
```

Create a server component

```bash
nx g @nx-starter/custom-react-next:component libs/shared/ui/src/lib/SSRComponent/SSRComponent --client=false
```

*Note:
`libs/shared/ui/src/lib` is the path of your library
`SSRComponent/SSRComponent` is the folder/name of your component

Generate a story

```bash
nx g @nx/react:component-story --componentPath=lib/Component/Component.tsx --project=shared-ui
```
