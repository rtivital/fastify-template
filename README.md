# Fastify template

A basic fastify server template with TypeScript, ESM, ESLint and Prettier. Node.js 18+ is required.

## Getting started

1. Clone or download the repository or click "Use this template" button on GitHub.
2. Run `nvm use` – it will install the required Node.js version if it is not installed yet.
3. Install dependencies: `yarn`
4. Create `.env` file from `.env.example`: `cp .env.example .env`. Change the values if needed.
5. Run the server: `npm run dev`

## Build for production

1. Run `npm run build`
2. To start production application run `npm start`

## npm scripts

- `npm run dev` - start the server in development mode
- `npm run build` - build the server for production
- `npm start` - start the server in production mode (it is required to build the server first)
- `npm run lint` - run ESLint
- `npm run typecheck` – run TypeScript type checking
- `npm run prettier:test` – check formatting with Prettier
- `npm run prettier:write` – format files with Prettier
- `npm test` – run typechecking, linting and formatting checks

## License

MIT
