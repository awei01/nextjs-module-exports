# Issue with `next build`

This repository will work with `next`, but cannot build with `next build`.

I'm guessing that it doesn't like the fact that there is no `default` export so older `modules` syntax does not work properly.

## How to reproduce

- clone this repo
- `yarn install` or `npm install`
- `yarn run dev` to see that next can run in dev mode
- `yarn run build` to see that next cannot build this site
