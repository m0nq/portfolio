# Portfolio

[![CI/CD Pipeline](https://github.com/m0nq/portfolio/actions/workflows/gh-actions.yml/badge.svg)](https://github.com/m0nq/portfolio/actions/workflows/gh-actions.yml)
[![MIT License](https://img.shields.io/github/license/m0nq/portfolio.svg?style=for-the-badge)](./LICENSE)

Professional portfolio and blog built with Next.js, React, and Tailwind CSS.

## Stack

- Next.js 16.2.1
- React 19.2.4
- Tailwind CSS 4.2.2
- TypeScript 5.9.3
- Node.js 24.14.1 LTS
- pnpm 10.30.2 via `packageManager`

## Local Development

### Prerequisites

- Node.js `24.14.1`
- Corepack enabled so the pinned pnpm version is used automatically

### Setup

1. Clone the repository.
   ```sh
   git clone https://github.com/m0nq/portfolio.git
   cd portfolio
   ```
2. Select the pinned Node version.
   ```sh
   nvm use
   ```
3. Enable Corepack and install dependencies.
   ```sh
   corepack enable
   pnpm install
   ```
4. Copy environment variables if needed.
   ```sh
   cp .env.example .env
   ```

### Commands

- Start the development server:
  ```sh
  pnpm dev
  ```
- Run the production build:
  ```sh
  pnpm build
  ```
- Run lint checks:
  ```sh
  pnpm lint
  ```
- Run unit tests:
  ```sh
  pnpm test --runInBand
  ```
- Open Cypress locally:
  ```sh
  pnpm e2e:cypress
  ```

## Deployment

- Pushes to `main` trigger the GitHub Actions workflow in [.github/workflows/gh-actions.yml](.github/workflows/gh-actions.yml).
- CI builds and tests on Node `24.14.1`.
- Production deployment is performed from GitHub Actions with the Vercel CLI using prebuilt artifacts.
- The project is pinned to Node `24.14.1` in [.nvmrc](.nvmrc) and in `package.json#engines.node`.

## Vercel Access

- The current production deployment is behind Vercel Authentication.
- Unauthenticated requests to the deployment URL return `401 Authentication Required`.
- This is a deployment protection setting, not a failed build.

## Repository Notes

- `docs/requirements.md` contains the product requirements.
- `docs/problemstatements.md` captures the original portfolio problems this project is meant to solve.

## License

Distributed under the MIT License. See [LICENSE](./LICENSE) for details.
