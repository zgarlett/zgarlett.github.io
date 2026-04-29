# Retro-Futures Portfolio

A multi-page React portfolio with floating navigation, built with Vite and React Router. Designed to deploy cleanly to GitHub Pages.

## Pages

- `/` — Home / Index
- `/resume` — Resume
- `/experience` — Work Experience
- `/projects` — Project archive (uses the reusable `<ProjectCard>`)
- `/projects/:id` — Project detail page (any card on `/projects` links here)

## Setup

```bash
npm install
npm run dev
```

## Customizing

- **Add a project**: append a new entry to `src/data/projects.js`. It shows up automatically on `/projects` and gets its own `/projects/:id` route.
- **Edit copy**: each page is self-contained in `src/pages/`. Resume skills live in `Resume.jsx`, work history in `Experience.jsx`.
- **Theme**: design tokens (colors, fonts, motion) live at the top of `src/styles/global.css`.

## Deploying to GitHub Pages

1. In `vite.config.js`, change `base: '/your-repo-name/'` to match your actual repo name (or `'/'` for a user/org page).
2. In `package.json`, change the `homepage` if you want — Vite handles the base path itself, so this is informational.
3. Push the repo to GitHub.
4. Run:

   ```bash
   npm run deploy
   ```

   This builds the site and pushes the `dist` folder to a `gh-pages` branch.

5. In GitHub repo settings → Pages, set the source to the `gh-pages` branch.

### React Router on GH Pages

Because GitHub Pages doesn't support SPA fallbacks natively, deep links like `/projects/orbital-os` will 404 on hard refresh. Two options:

- **Easy**: add a `404.html` that redirects to `index.html` (the trick is well-documented).
- **Easier**: switch `BrowserRouter` to `HashRouter` in `src/main.jsx` — URLs become `/#/projects/orbital-os` but refreshing always works.

I left it as `BrowserRouter` because the URLs are cleaner; flip it if you hit refresh issues.
