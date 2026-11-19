# Akeyless OIDC Identity Provider Example

A React app that logs in against the Akeyless OIDC identity provider using the authorization code flow with PKCE. Built with [Vite](https://vite.dev/).

Requires Node.js 22.22 or later.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Runs the [Vitest](https://vitest.dev/) test suite in watch mode. Use `npx vitest run` for a single run.

### `npm run build`

Builds the app for production to the `build` folder, which the `Dockerfile` copies into the nginx image.

### `npm run preview`

Serves the production build locally.

### `npm run deploy`

Builds the app and publishes the `build` folder with `gh-pages`.
