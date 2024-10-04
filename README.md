# frontend

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

### Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Project Setup

```sh
pnpm install --frozen-lockfile # recommended
```

### Compile and Hot-Reload for Development

```sh
pnpm run dev --host # LAN access
```

### Type-Check, Compile and Minify for Production

```sh
pnpm run build
```
