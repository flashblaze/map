# Map Viz

A simple map visualization app built with Astro, Preact, and MapLibre GL JS. Upon visiting the site, location data is extracted from the Cloudflare request headers and stored in a SQLite database.

## Development

1. Create a [Turso](https://turso.tech/) account and create a new database.
2. Create a `.dev.vars` file based on `.dev.vars.example` and set the `TURSO_CONNECTION_URL` and `TURSO_AUTH_TOKEN` environment variables.
3. Run `pnpm install` to install the dependencies.
4. Run `pnpm db:generate` to generate the database migrations.
5. Run `pnpm db:migrate` to apply the migrations.
6. Run `pnpm dev:all` to start the development server and the database studio.
