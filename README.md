# Nuxt Fullstack Blueprint

![CI Status](https://github.com/Laznology/nuxt-fullstack-blueprint/actions/workflows/ci.yml/badge.svg)

![Landing Page Preview](https://assets.laznology.dev/project-preview/nuxt-blueprint.png)

A perfectionist's Nuxt 4 starter template, made for type-safe full-stack development. This template leverages the latest Nuxt 4 features, Nuxt UI v4, and Nuxt Hub to provide a seamless developer experience from development to deployment.

## Tech Stack

| Layer | Technology |
| :-- | :-- |
| **Framework** | [Nuxt 4](https://nuxt.com) |
| **UI Component Library** | [Nuxt UI v4](https://ui.nuxt.com) |
| **CSS Engine** | [Tailwind CSS v4](https://tailwindcss.com) |
| **Database ORM** | [Drizzle ORM](https://orm.drizzle.team) |
| **Authentication** | [Better Auth](https://better-auth.com) |
| **Fullstack Module** | [Nuxt Hub](https://hub.nuxt.com) |
| **Linter & Formatter** | [Ultracite / Oxlint](https://oxc-project.github.io) |

## Authentication

Authentication is handled via **Better Auth**, providing a secure and flexible framework.

- **Client side**: Managed via `app/utils/auth-client.ts`.
- **Server side**: Handled in `server/api/auth/[...all].ts` and `server/utils/auth.ts`.
- **Middleware**: Guard routes using the built-in Nuxt middleware support.

## Database Management

Use **Drizzle ORM** for a type-safe database experience.

### Seeding

Use Nitro tasks for seeding data:

```bash
npx nuxi task db:seed
```

This will run the script located at `server/tasks/seed.ts` and create initial user data.

## Getting Started

### Prerequisites

- Node.js 22+ or `nvm`
- `pnpm` v9+
- A PostgreSQL database (or other Drizzle ORM compatible)

### Setup

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   pnpm install
   ```
3. **Environment Variables** Copy `.env.example` to `.env` and fill in your database credentials and auth secrets.
4. **Seed the database**
   ```bash
   npx nuxi task db:seed
   ```
5. **Run development server**
   ```bash
   pnpm dev
   ```

## Styling with Tailwind CSS v4

This project uses **Tailwind CSS v4** as its styling engine, provided directly via Nuxt UI v4.

- **Config**: Config is handled natively through CSS variables in `app/assets/css/main.css`.
- **Components**: Utilizes the Nuxt UI components heavily.

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for details on how to contribute to this project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
