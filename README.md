# Alois Lamotte Website

---

## Documentation

This project is built with **Svelte**, powered by [`sv`](https://github.com/sveltejs/cli).

---

## Git Hooks

Husky hook runs on commit to check **Prettier**, **ESLint**, and **SvelteKit** formatting.

---

## Local Development

### Install dependencies

```bash
pnpm install
```

### Start development server

```bash
pnpm run dev
# or start with browser auto-open
pnpm run dev -- --open
```

### Generate optimized images

> You can use `install.sh` to install tools

Run the image optimization script if you add or update image assets:

```bash
sh ./static/assets/optimize-jpg-for-web.sh
```

---

## Production Deployment

Every push on `main` is deployed automatically to Cloudflare Pages:
[Production environment](https://alois-lamotte.pages.dev/)

### Upload assets to Cloudflare R2

Before or after deploying, make sure to upload all image assets:

- Drag and drop the full contents of the `painting` and `illustration` directories into the **R2 bucket** on Cloudflare for assets.

This ensures all static images are correctly served in production.
