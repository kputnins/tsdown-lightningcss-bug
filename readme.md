# Issue reproduction steps

**Note** - I've committed the build artifacts under `dist` so the issue can be spotted without cloning and building the project

- clone repo
- install dependencies `pnpm install`
- build project `pnpm build`
- inspect the tsdown config file `./tsdown.config.ts` and confirm the `animation: false` setting
- compare the source style file in `src/MyButtonStyle.module.css` and the built style file under `./dist/style.css`
- expected:
  - the animation keyframes are not renamed - `fade-out`
- actual:
  - the animation keyframes are renamed - `eRYWUa_fade-out`
