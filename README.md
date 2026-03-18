# Ziad's Developer Portfolio

A personal portfolio website built with React and Vite, showcasing projects, skills, and a way to get in touch.

## Features

- **Responsive Design** — Mobile-first layout with an adaptive navigation menu
- **Dark / Light Mode** — System-aware theme with manual toggle, persisted in `localStorage`
- **Dynamic Projects** — Fetches live project data (metadata + screenshots) from the GitHub API and Microlink API
- **Contact Form** — Functional email form powered by EmailJS with client-side validation
- **Smooth Scrolling** — Anchor-based single-page navigation with smooth scroll behavior
- **Toast Notifications** — Real-time feedback for form submissions via Sonner
- **GitHub Pages Deployment** — One-command deploy with `gh-pages`

## Tech Stack

| Layer           | Technology             |
| --------------- | ---------------------- |
| UI Framework    | React 19               |
| Build Tool      | Vite 8                 |
| Styling         | Tailwind CSS v4        |
| Animations      | Motion (Framer Motion) |
| Form Management | TanStack Form          |
| Email Service   | EmailJS                |
| HTTP Client     | Axios                  |
| Icons           | Iconify                |
| Notifications   | Sonner                 |
| Deployment      | GitHub Pages           |

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or later
- npm v9 or later

### Installation

1. **Clone the repository**

   ```sh
   git clone https://github.com/ziad-wdev/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**

   ```sh
   npm install
   ```

3. **Set up environment variables**

   Create a `.env` file in the project root. The contact form requires an [EmailJS](https://www.emailjs.com/) account:

   ```sh
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

   > The Projects section fetches data from the public GitHub API and [Microlink](https://microlink.io/) — no API keys are needed for those.

4. **Start the development server**

   ```sh
   npm run dev
   ```

   The site is served at `http://localhost:3000`.

## Available Scripts

| Script            | Description                                         |
| ----------------- | --------------------------------------------------- |
| `npm run dev`     | Start the local development server (LAN-accessible) |
| `npm run build`   | Create a production build in `dist/`                |
| `npm run preview` | Preview the production build locally                |
| `npm run lint`    | Run ESLint across all source files                  |
| `npm run deploy`  | Build and publish to GitHub Pages                   |

## Project Structure

```
portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/          # Static assets (images, etc.)
│   ├── components/
│   │   ├── Header.jsx   # Sticky header with dark mode toggle
│   │   ├── Nav.jsx      # Responsive navigation (mobile + desktop)
│   │   ├── Home.jsx     # Hero section with tech stack card
│   │   ├── About.jsx    # Bio and categorised skill badges
│   │   ├── Projects.jsx # GitHub-powered project cards
│   │   ├── Contact.jsx  # Contact details + form
│   │   ├── Form.jsx     # Validated EmailJS contact form
│   │   ├── Footer.jsx   # Social links footer
│   │   └── StackIcon.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
└── package.json
```

## Deployment

The project is configured for GitHub Pages. After setting your `homepage` field in `package.json` (if needed), a single command builds and publishes the site:

```sh
npm run deploy
```

This runs `vite build` and then pushes the `dist/` folder to the `gh-pages` branch.

## Contact & Support

| Channel  | Link                                                              |
| -------- | ----------------------------------------------------------------- |
| Email    | [ziadahmed2371@gmail.com](mailto:ziadahmed2371@gmail.com)         |
| LinkedIn | [linkedin.com/in/ziad2371](https://www.linkedin.com/in/ziad2371/) |
| GitHub   | [github.com/ziad-wdev](https://github.com/ziad-wdev)              |

Feel free to open an issue for bugs or suggestions, or reach out directly via email or LinkedIn.

## License

This project is open source. See the [LICENSE](LICENSE) file for details.
