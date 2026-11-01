# ORVANTIS Website — Starter Project

An early, education-first website concept for ORVANTIS, a planned US-market digital-asset education and market-intelligence platform.

## Important status notes

- This is a frontend starter, not a live financial service.
- Market cards intentionally show placeholders; no live prices are represented.
- Authentication, databases, portfolio persistence, wallet connectivity and transactions are not implemented yet.
- Do not enter real customer information or cryptocurrency credentials.
- The brand name and domain/trademark availability have not been verified.

## Requirements

- Windows 10
- Node.js LTS (use the current LTS release from https://nodejs.org/)
- Visual Studio Code (https://code.visualstudio.com/)

## Run locally

1. Open this project folder in Visual Studio Code.
2. Open **Terminal → New Terminal**.
3. Run:

   ```powershell
   npm install
   ```

4. When installation completes, run:

   ```powershell
   npm run dev
   ```

5. Open http://localhost:3000 in your browser.

Stop the local server with `Ctrl + C` in the terminal.

## Project structure

```text
ORVANTIS-website/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── public/
├── .gitignore
├── eslint.config.mjs
├── next.config.ts
├── package.json
└── tsconfig.json
```

## Next development milestones

1. Confirm local installation and run the first preview.
2. Refine logo and visual identity.
3. Build real navigation and individual pages.
4. Integrate a market-data provider under its current terms.
5. Add backend, authentication and database.
6. Add portfolio tracking and user settings.
7. Conduct security, accessibility and compliance reviews.
8. Plan regulated third-party integrations separately before enabling transactions.
