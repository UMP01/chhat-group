# CLAUDE.md

This file guides Claude Code (claude.ai/code) when working in this repository.

## Project

Website and admin panel for Chhat Group (chhatgroup.com). The repo holds two separate apps:

- **Repo root**: a Laravel 11 (PHP ^8.2) JSON API with Sanctum token auth. `routes/web.php` only returns the Laravel version. The real routes are in `routes/api.php`.
- **`frontend/`**: a React 18 SPA built with Vite 5, Tailwind 3 and react-router-dom 6. It has its own `package.json`. The root `package.json` holds only a stray `@heroicons/react` dependency and is not the frontend.

## Commands

Backend (repo root):
```bash
composer install
cp .env.example .env && php artisan key:generate   # .env.example defaults to sqlite
php artisan migrate
php artisan storage:link        # blog and user images are served from the public disk
php artisan serve               # http://127.0.0.1:8000
php artisan test                # PHPUnit (tests/Feature, tests/Unit)
php artisan test --filter=Name  # single test
./vendor/bin/pint               # code style
```

Frontend (`cd frontend`):
```bash
npm install
npm run dev      # Vite dev server
npm run build    # outputs frontend/dist
npm run lint
```

## Architecture

- **API base URL**: `frontend/src/api/axios.js` builds `axiosClient` from `VITE_BACKEND_URL`. The tracked `frontend/.env` sets it to the production URL, so `npm run dev` talks to prod unless you override it with `frontend/.env.local` (for example `VITE_BACKEND_URL=http://127.0.0.1:8000/api`). The value is baked into the bundle at build time.
- **Auth**: `POST /api/login` returns a Sanctum token. The frontend stores it in `localStorage` as `authToken`, along with `permission`. `ProtectedRoute.js` guards `/admin/*`, and users whose `permission` is `"user"` cannot open `/admin/user`. This check is client-side only. On the server, every write route is behind `auth:sanctum`, and there are no role checks.
- **Resources**: Blog, Career, Contact and User (models in `app/Models`, controllers in `app/Http/Controllers`). Public routes are GET for blogs and careers, plus POST for contacts. Everything else requires auth.
- **Images**: images are stored on the `public` disk under `images/` with a timestamp filename. Their URLs come from `Storage::url()`, so `APP_URL` and `storage:link` must be correct on the server.
- **Frontend layout**: `src/Pages/Website/*` holds the public pages and `src/Pages/Admin/*` holds the admin panel. Reusable sections live in `src/Components/*`, and routes are declared in `src/App.jsx`. Most company or team content (members, expertise, banners) is hardcoded in components and images under `src/assets/Images`, not stored in the database.

## Deployment notes

- Production is `https://chhatgroup.com`, served by nginx on Ubuntu (host `139.162.62.222`). The SPA's unknown paths, including `/api/*`, fall back to `index.html`.
- The bundle deployed as of 2026-11-17 calls the API at `http://139.162.62.222:8000/api`. That is plain HTTP on the bare IP, and it does not match the `:9443` URL in `frontend/.env`. Check which URL is correct before rebuilding.
- Never commit secrets or server credentials to this repo.
