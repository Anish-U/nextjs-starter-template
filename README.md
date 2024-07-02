
<div align="center">
  <h2>✨ nextjs-starter-template</h2>
  <p>Next.js + Tailwind CSS + TypeScript + ShadCN/UI starter packed with useful development features.</p>
  <p>Made by <a href="https://uanish.me">Anish Ummenthala</a></p>

</div>

## Features

This repository is packed with:

- ⚡️ Next.js 14 with App Router
- ⚛️ React 18
- ✨ TypeScript
- 💨 Tailwind CSS 3 — Configured with CSS Variables
- 🎨 ShadCN UI Components — Components that can be imported from shadcn ui
- 📈 Absolute Import and Path Alias — Import components using `@/` prefix
- 📏 ESLint — Find and fix problems in your code, also will **auto sort** your imports
- 💖 Prettier — Format your code consistently
- 🐶 Husky & Lint Staged — Run scripts on your staged files before they are committed
- 🤖 Conventional Commit Lint — Make sure you follow conventional commit

## Getting Started

### 1. Clone this template using one of the two ways

1. Use this repository as template

   **Disclosure:** by using this repository as a template, there will be an attribution on your repository.

   I'll appreciate if you do, so this template can be known by others too 😄
2. Using `create-next-app`

   ```bash
   pnpm create next-app  -e https://github.com/Anish-U/nextjs-starter-template ts-pnpm
   ```

### 2. Install dependencies

It is encouraged to use **pnpm** so the husky hooks can work properly.

```bash
pnpm install
```

### 3. Run the development server

You can start the server using this command:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result. You can start editing the page by modifying `app/page.tsx`.

### 4. Change defaults

There are some things you need to change including title, urls, favicons, etc.

Don't forget to change the package name in package.json

### 5. Commit Message Convention

This starter is using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/), it is mandatory to use it to commit changes.
