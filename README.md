# Portfolio — Personal Developer Website

[![version](https://img.shields.io/badge/version-0.1.0-blue)](./package.json) [![license](https://img.shields.io/badge/license-MIT-lightgrey)](./LICENSE)

A responsive, modern personal portfolio built with Next.js, React and Tailwind CSS. This repository contains the source for a developer portfolio site used to showcase projects, skills, and provide a contact channel.

Table of contents

- [What this project does](#what-this-project-does)
- [Why this project is useful](#why-this-project-is-useful)
- [Quick start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Install](#install)
  - [Run (development)](#run-development)
  - [Build and run (production)](#build-and-run-production)
  - [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [Developer notes & conventions](#developer-notes--conventions)
- [How to contribute](#how-to-contribute)
- [Where to get help](#where-to-get-help)
- [Maintainers & authors](#maintainers--authors)
- [License](#license)

## What this project does

This repository contains a personal portfolio website designed to:

- Present projects and case studies.
- Show skills and technology stack.
- Provide a contact form to receive messages.
- Demonstrate modern frontend patterns (Next.js + React + Tailwind).

## Why this project is useful

Key features and benefits:

- Minimal, responsive UI tailored for portfolio content.
- Componentized React + TypeScript codebase (easy to extend).
- Integrates a contact form (EmailJS is included as a dependency).
- Built with a modern toolchain so it's easy to deploy to popular hosts (Vercel, Netlify, etc.).
- Good starting point for other developers to fork and personalize.

## Quick start

Prerequisites

- Node.js 18+ (or whatever your project's CI uses)
- npm (or yarn/pnpm) — this project uses `npm` scripts out-of-the-box

Install

```/dev/null/install_commands.sh#L1-4
# clone the repo and install
git clone <your-repo-url> portfolio
cd portfolio
npm install
```

Run (development)

```/dev/null/dev_commands.sh#L1-3
# run the development server
npm run dev
# open http://localhost:3000
```

Build and run (production)

```/dev/null/build_commands.sh#L1-4
# build
npm run build

# start production server
npm run start
```

Environment variables

- The project uses client-side EmailJS for the contact form (see dependencies in `package.json`).
- Recommended env variables (create `.env.local` at project root):

```/dev/null/.env.local.example#L1-8
# Example environment variables (do NOT commit .env.local)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes:

- Prefix public client keys with `NEXT_PUBLIC_` so they are available to browser code.
- Do not store private secrets in client-side env variables.

## Project structure

Top-level layout (key files and folders):

- `package.json` — scripts and dependencies
- `next.config.ts` — Next.js configuration
- `src/` — application source
  - `src/app/` — Next.js app routes and global layout
  - `src/components/` — UI components and sections
    - `src/components/sections/` — Page sections (Home, Projects, About, Contact, Footer, ...)
    - `src/components/ui/` — Reusable UI elements (Nav, DarkModeBtn, Form, ProjectCard, ...)
  - `src/data/` — project / content data used by components
  - `src/utils/` — utility helpers
- `public/` — static assets (icons, images, favicons)
- `.github/` — GitHub config, workflows (if present)

You can open and inspect components in `src/components` to see how sections are composed and how the contact form is wired to EmailJS.

## Developer notes & conventions

- TypeScript is enabled — prefer typed components and props.
- Tailwind CSS is used for styling — utility-first classes.
- Next.js version in `package.json` may have breaking changes for newer Next APIs. Before changing app-level code, see:
  - `AGENTS.md` (contains project-specific guidance): [AGENTS.md](./AGENTS.md)
- Keep components small and focused. Create presentational components in `src/components/ui/` and page/section composition in `src/components/sections/`.

Common tasks

- Linting: `npm run lint` (config uses `eslint`)
- Add a new project card:
  - Add project metadata into `src/data/projects` (or the existing data file)
  - Add a thumbnail to `public/` and reference it from the data entry
  - Ensure `ProjectCard` receives the new fields and renders them

## How to contribute

Contributions are welcome. For small fixes or improvements:

1. Fork the repository
2. Create a branch: `git checkout -b feature/short-description`
3. Make changes and add tests where appropriate
4. Commit and push your branch
5. Open a pull request describing the change

If you plan larger changes, open an issue first to discuss the design and scope.

For a formal contribution guide (if present), check `CONTRIBUTING.md`. If you don't find that file, follow the steps above and open an issue to discuss larger changes.

## Where to get help

- Open an issue in this repository for bugs or feature requests.
- For quick questions, contact the project maintainer (details below).
- Consult `AGENTS.md` for notes about the project's Next.js setup and conventions.

## Maintainers & authors

- Maintainer: Ziad (Ziad Ahmed)
  - GitHub: [ziad-wdev](https://github.com/ziad-wdev)
  - Email: ziadahmed2371@gmail.com
  - LinkedIn: https://www.linkedin.com/in/ziad2371/

## License

This project is distributed under the MIT License. See the `LICENSE` file for details.

Additional resources and links

- Project source: `src/`
- Component examples: `src/components/`
- Next.js / Tailwind setup reference: inspect `postcss.config.mjs`, `tailwind.config.*` (if present) and `next.config.ts`.

## Final notes

This README focuses on getting developers up and running quickly and points to the most relevant files and conventions. For full documentation (api-level docs, deployment nuances, troubleshooting), maintain a `docs/` folder or GitHub Wiki and link it from this README.

If you'd like, I can:

- Add a concise `CONTRIBUTING.md` file with PR checklist and coding standards.
- Add CI badges and example GitHub Actions workflow for testing and linting.
- Generate a `docs/` skeleton with deployment steps for Vercel/Netlify.
