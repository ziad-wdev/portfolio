# 🗂️ ziad.dev — Personal Portfolio

A clean, performant, and fully responsive personal portfolio website built with **React 19** and **Vite 8**. It showcases projects fetched live from the GitHub API, includes a working contact form powered by EmailJS, and supports a persistent dark/light mode.

**Live site → [ziad-wdev.github.io/portfolio](https://ziad-wdev.github.io/portfolio/)**

---

## ✨ Features

- **Live GitHub Projects** — Fetches project metadata and auto-generated screenshots via the GitHub & Microlink APIs — no manual updates needed
- **Working Contact Form** — Sends emails directly via EmailJS with client-side validation powered by TanStack Form
- **Dark / Light Mode** — Manually toggleable theme that persists across sessions via `localStorage`
- **Smooth Scroll Navigation** — Responsive sticky navbar with a mobile drawer and anchor-based single-page routing
- **Toast Notifications** — Real-time success/error feedback on form submission via Sonner
- **React Compiler** — Babel-powered React Compiler for automatic memoization and optimized re-renders
- **GitHub Pages Deployment** — One-command build and publish with `gh-pages`

---

## 🛠️ Tech Stack

| Category               | Technologies                                |
| ---------------------- | ------------------------------------------- |
| **Framework**          | React 19, Vite 8                            |
| **Styling**            | Tailwind CSS v4, Motion (Framer Motion v12) |
| **Forms & Validation** | TanStack Form, EmailJS                      |
| **Data Fetching**      | Axios (GitHub API, Microlink API)           |
| **UI Utilities**       | Iconify, Sonner, clsx-for-tailwind          |
| **Tooling**            | ESLint, Babel + React Compiler, gh-pages    |

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Installation

```sh
# 1. Clone the repository
git clone https://github.com/ziad-wdev/portfolio.git
cd portfolio

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.example .env.local
# Then open .env.local and fill in your EmailJS credentials (see below)

# 4. Start the development server
npm run dev
```

The dev server runs on **http://localhost:3000** and is also accessible on your local network.

### Environment Variables

The contact form requires an [EmailJS](https://www.emailjs.com/) account. Add the following to your `.env.local`:

```sh
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

> **Note:** All three variables are required for the contact form to work. The rest of the site (including the Projects section) functions without them.

---

## 📜 Available Scripts

| Command           | Description                                                |
| ----------------- | ---------------------------------------------------------- |
| `npm run dev`     | Start the development server on port 3000 (LAN-accessible) |
| `npm run build`   | Build the project for production into `dist/`              |
| `npm run preview` | Preview the production build locally                       |
| `npm run lint`    | Run ESLint across all source files                         |
| `npm run deploy`  | Build and publish to GitHub Pages                          |

---

## 🗂️ Project Structure

```
portfolio/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/             # Static assets (images)
│   ├── components/
│   │   ├── Header.jsx      # Sticky navbar with dark mode toggle
│   │   ├── Nav.jsx         # Desktop & mobile (drawer) navigation
│   │   ├── Home.jsx        # Hero section with tech stack card
│   │   ├── About.jsx       # Journey narrative & categorised skill badges
│   │   ├── Projects.jsx    # GitHub API-powered project cards
│   │   ├── Contact.jsx     # Contact details & form
│   │   ├── Form.jsx        # EmailJS form with TanStack Form validation
│   │   ├── StackIcon.jsx   # Reusable tech icon component
│   │   └── Footer.jsx      # Social links
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css           # Tailwind v4 theme tokens & global styles
├── .env.example            # Environment variable template
├── index.html
├── vite.config.js
└── package.json
```

---

## 🌍 Deployment

The project is pre-configured for **GitHub Pages**. The Vite `base` is set to `/portfolio/` to match the repository name.

```sh
npm run deploy
```

This runs `vite build` and pushes the `dist/` folder to the `gh-pages` branch automatically. No additional configuration is needed.

---

## 📬 Contact

**Ziad** — [@ziad-wdev](https://github.com/ziad-wdev)

- 📧 [ziadahmed2371@gmail.com](mailto:ziadahmed2371@gmail.com)
- 💼 [linkedin.com/in/ziad2371](https://www.linkedin.com/in/ziad2371/)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
