# React + TypeScript + Tailwind — SSO Starter

A production-ready architecture with a two-column layout, data table, and SSO authentication.

## Stack

- **React 18** + **TypeScript**
- **Tailwind CSS v3**
- **React Router v6** — page routing + protected routes
- **@tanstack/react-table** — headless data table
- **MSAL (Microsoft)** or **Auth0** — SSO provider (swappable)

## Project Structure

```
src/
├── components/
│   ├── auth/
│   │   ├── AuthProvider.tsx       # SSO context + token management
│   │   ├── ProtectedRoute.tsx     # Route guard
│   │   └── LoginPage.tsx          # SSO redirect entry point
│   ├── layout/
│   │   ├── AppShell.tsx           # Root layout (sidebar + main)
│   │   ├── Sidebar.tsx            # Left column navigation
│   │   └── Header.tsx             # Top bar with user avatar/logout
│   ├── table/
│   │   ├── DataTable.tsx          # Generic reusable table
│   │   ├── TableToolbar.tsx       # Search, filters, export
│   │   └── columns.tsx            # Column definitions (typed)
│   └── ui/
│       ├── Badge.tsx
│       ├── Button.tsx
│       └── Spinner.tsx
├── hooks/
│   ├── useAuth.ts                 # Auth state accessor
│   └── useTableData.ts            # Data fetching + pagination hook
├── pages/
│   ├── DashboardPage.tsx          # Example two-column page
│   └── UsersPage.tsx              # Full data table page
├── types/
│   └── index.ts                   # Shared TypeScript types
├── utils/
│   └── auth.ts                    # Token helpers
├── App.tsx
└── main.tsx
```

## Getting Started

```bash
npm create vite@latest react-sso-app -- --template react-ts
cd react-sso-app
npm install
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
npm install @tanstack/react-table react-router-dom
# pick ONE auth provider:
npm install @azure/msal-browser @azure/msal-react   # Microsoft SSO
npm install @auth0/auth0-react                       # Auth0 SSO
```

## SSO Providers

Swap the `AuthProvider` implementation to switch providers — the rest of the app is untouched.

| Provider | Package | Config needed |
|---|---|---|
| Microsoft Entra (Azure AD) | `@azure/msal-browser` | `clientId`, `tenantId` |
| Auth0 | `@auth0/auth0-react` | `domain`, `clientId` |
| Okta | `@okta/okta-react` | `issuer`, `clientId` |
| Google | `@react-oauth/google` | `clientId` |
