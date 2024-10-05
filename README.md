# frontend

## Contributing

Thank you to everyone that is contributing and to those who want to contribute.
Any contribution is welcomed!

**Quick guide**:

1. [Fork](https://github.com/atomclub/frontend/fork) this
   project.
2. Clone your fork (`git clone <fork-URL>`).
3. Add main repo as remote (`git remote add upstream <main-repo-URL>`).
4. Create a branch for your changes (`git switch -c feature/your-feature` or
   `git switch -c fix/your-fix`).
5. Commit your changes (`git commit -m "feat(...): ..."`).
  - follow [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)
6. Push to your fork (`git push origin <branch-name>`).
7. Open a [PR](https://github.com/atomclub/frontend/pulls).


<div align="right">
  (<a href="#readme-top">Back to top</a>)
</div>

**Remembers to always follow the [code of conduct](https://github.com/atomclub/frontend/blob/main/CODE_OF_CONDUCT.md#contributor-covenant-code-of-conduct)**.


---

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
