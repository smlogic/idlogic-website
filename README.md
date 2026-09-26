# IDLogic — Astro website

Bilingual (Polish + English) static website for a smart home / smart office business in Warsaw. The Polish homepage lives at `/`, and the English version at `/en/`.

The hero keeps `Twój` and `dom.` fixed while the middle word rotates vertically through `smart`, `prywatny`, `bezpieczny`, and `_______`. The English version works the same way.

## 1. Change the questionnaire URL

Open `src/config.ts` and replace:

```ts
export const QUESTIONNAIRE_URL = 'https://example.com/ANKIETA';
```

with the URL of your existing questionnaire. All CTA buttons use this one value.

You can also change the public contact email in the same file.

## 2. Run locally

```bash
npm install
npm run dev
```

Astro will print the local address, normally `http://localhost:4321/`.

## 3. Build

```bash
npm run build
npm run preview
```

The static build is created in `dist/`.

Astro also generates `sitemap-index.xml`. For the current project URL, submit
`https://smlogic.github.io/idlogic-website/sitemap-index.xml` in Google Search Console
after deployment. The favicon SVG is accompanied by PNG and Apple touch icons.
Google uses one search-result favicon per hostname; a dedicated domain is needed
for IDLogic's own search-result icon instead of sharing `smlogic.github.io`.

## 4. Publish for free on GitHub Pages

1. Create a GitHub repository and push this project to the `main` branch.
2. In the repository, open **Settings → Pages**.
3. Set **Source** to **GitHub Actions**.
4. Push a commit. `.github/workflows/deploy.yml` will build and deploy the site automatically.

The deployment workflow reads the final Pages origin/base path from GitHub and passes it into Astro. The config also has repository-name detection as a fallback, so it supports both:

- `https://username.github.io/` repositories named `username.github.io`
- project sites such as `https://username.github.io/repository-name/`

For a custom domain later, configure the domain in GitHub Pages. The workflow reads the Pages origin/base path automatically. Add `public/CNAME` only if your GitHub Pages setup requires it.

## Structure

- `src/pages/index.astro` — Polish home page
- `src/pages/en/index.astro` — English home page
- `src/i18n.ts` — all PL/EN copy
- `src/config.ts` — questionnaire URL and contact email
- `src/components/HomePage.astro` — shared page markup
- `src/styles/global.css` — all styling
- `public/gradient-about-header.jpg` — supplied hero background
- `public/noise.png` — supplied noise overlay

## Design note

The page uses the supplied gradient/noise assets and an original layout inspired by the broad typographic idea of the Open Home Foundation reference. It does not copy its text or page design one-to-one.
