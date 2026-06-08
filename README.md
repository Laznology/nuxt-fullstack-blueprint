# Nuxt 4 Full-Stack Template

A perfectionist's Nuxt 4 starter template, made for type-safe full-stack development. This template leverages the latest Nuxt 4 features, Nuxt UI v4, and Nuxt Hub to provide a seamless developer experience from development to deployment.

## Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Nuxt 4](https://nuxt.com) |
| **UI Component Library** | [Nuxt UI v4](https://ui.nuxt.com) |
| **CSS Engine** | [UnoCSS](https://unocss.dev) |
| **Database ORM** | [Drizzle ORM](https://orm.drizzle.team) |
| **Authentication** | [Better Auth](https://better-auth.com) |
| **Fullstack Module** | [Nuxt Hub](https://hub.nuxt.com) |
| **Linter & Formatter** | [Biome](https://biomejs.dev) |


## Authentication

Authentication is handled via **Better Auth**, providing a secure and flexible framework.

- **Client side**: Managed via `app/utils/auth-client.ts`.
- **Server side**: Handled in `server/api/auth/[...all].ts` and `server/utils/auth.ts`.
- **Middleware**: Guard routes using the built-in Nuxt middleware support.

## Database Management

Use **Drizzle ORM** for a type-safe database experience.

### Seeding
Use NItro tasks for seeding data:
```bash
npx nuxi task seed
```

## Getting Started

### Prerequisites

- [Bun](https://bun.sh) or Node.js 22+
- A PostgreSQL database (or other Drizzle ORM compatible)

### Setup

1. **Clone the repository**
2. **Install dependencies**
   ```bash
   bun install
   ```
3. **Environment Variables**
   Copy `.env.example` to `.env` and fill in your database credentials and auth secrets.
4. **Run development server**
   ```bash
   bun dev
   ```

## Styling with UnoCSS

This project uses **UnoCSS** as its styling engine.

- **Config**: See `uno.config.ts`.
- **Presets**: Includes `@unocss/preset-uno` and `unocss-preset-nuxt-ui`.
- **DevTools**: Use the built-in UnoCSS inspector in Nuxt DevTools to debug your classes.
