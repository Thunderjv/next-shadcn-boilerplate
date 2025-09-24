# Next.js Shadcn Boilerplate

A modern Next.js boilerplate with shadcn/ui, Tailwind CSS, TypeScript, and best practices for building fast, scalable, and production-ready web applications.

## ✨ Features

- ⚛️ **Next.js** - The React Framework for Production.
- 🎨 **shadcn/ui** - Beautifully designed components that you can copy and paste into your apps.
- styling with **Tailwind CSS** - A utility-first CSS framework for rapid UI development.
- 🔷 **TypeScript** - Static type-checking for scalable applications.
- 🧪 **Jest & React Testing Library** - For robust unit and integration testing.
- 🧹 **ESLint & Prettier** - For clean, consistent, and error-free code.
- 🐶 **Husky & lint-staged** - For running scripts on git hooks to enforce code quality.
- 📄 **Commitlint** - For enforcing conventional commit messages.
- 📦 **Zustand** - Small, fast and scalable bearbones state-management solution.
- 📋 **React Hook Form & Zod** - For flexible and extensible forms with schema-based validation.
- 🚀 **Axios & React Query** - For efficient data fetching and caching.

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/en/) (v18 or newer)
- [npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) (or pnpm/yarn)

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/tim-syntax/next-shadcn-boilerplate.git
    cd next-shadcn-boilerplate
    ```

2.  Install dependencies:

    ```bash
    npm install
    ```

3.  Run the development server:

    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📜 Available Scripts

- `npm run dev`: Starts the development server.
- `npm run build`: Builds the application for production.
- `npm run start`: Starts a production server.
- `npm run lint`: Lints the codebase for errors.
- `npm run format`: Formats the code with Prettier.
- `npm run test`: Runs tests with Jest.

## 📁 Project Structure

```
next-shadcn-boilerplate/
├── src/
│   ├── app/                # Next.js App Router pages, layouts, and tests
│   │   ├── __tests__/      # Tests for pages
│   │   ├── globals.css     # Global styles
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components/         # Shared UI components
│   │   └── ui/             # Components from shadcn/ui
│   └── lib/                # Utility functions
└── ...                     # Other configuration files
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Pre-commit Hooks

This project uses `pre-commit` for managing and maintaining multi-language pre-commit hooks. To use it, you need to have Python installed.

1.  Install `pre-commit`:

    ```bash
    pip install pre-commit
    ```

2.  Install the git hooks:

    ```bash
    pre-commit install
    ```

Now, `pre-commit` will run automatically on `git commit`.

### Commit Message Conventions

This project follows the [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) specification. Your commit messages should be structured as follows:

```
<type>(<scope>): <subject>
```

**Type:** Must be one of the following: `test`, `chore`, `docs`, `refactor`, `fix`, `feat`, `build`, `ci`, `style`, `perf`, `revert`, `hotfix`.

**Scope (optional):** Must be one of the following: `ui`, `api`, `config`, `docs`, `docs-e2e`, `web`, `web-e2e`, `portal`, `portal-e2e`, `tools`.

**Subject:** A short, imperative-tense description of the change.

Example: `feat(ui): add new button component`

## 📝 License

This project is licensed under the ISC License.
