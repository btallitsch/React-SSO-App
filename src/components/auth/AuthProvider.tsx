// src/components/auth/AuthProvider.tsx
//
// Uses Auth0. To swap to Microsoft MSAL:
//   1. npm install @azure/msal-browser @azure/msal-react
//   2. Replace the body of this file with the MSAL variant (see AuthProvider.msal.tsx)
//   The useAuth() hook and ProtectedRoute stay identical.

import React, { createContext, useContext } from "react";
import { Auth0Provider, useAuth0 } from "@auth0/auth0-react";
import type { AuthContextValue } from "../../types";

const AuthContext = createContext<AuthContextValue | null>(null);

// ── Inner adapter — maps Auth0 shape → our AuthContextValue ──────
function Auth0Adapter({ children }: { children: React.ReactNode }) {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout, getAccessTokenSilently } =
    useAuth0();

  const [accessToken, setAccessToken] = React.useState<string | null>(null);

  React.useEffect(() => {
    if (isAuthenticated) {
      getAccessTokenSilently().then(setAccessToken).catch(console.error);
    }
  }, [isAuthenticated, getAccessTokenSilently]);

  const value: AuthContextValue = {
    user: isAuthenticated && user
      ? {
          id: user.sub ?? "",
          name: user.name ?? "",
          email: user.email ?? "",
          avatar: user.picture,
          role: (user["app_metadata"]?.role as AuthContextValue["user"] extends null ? never : AuthContextValue["user"]["role"]) ?? "viewer",
        }
      : null,
    isAuthenticated,
    isLoading,
    accessToken,
    login: () => loginWithRedirect(),
    logout: () => logout({ logoutParams: { returnTo: window.location.origin } }),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// ── Public provider (wrap your <App /> with this) ────────────────
export function AuthProvider({ children }: { children: React.ReactNode }) {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Auth0Adapter>{children}</Auth0Adapter>
    </Auth0Provider>
  );
}

// ── Hook ─────────────────────────────────────────────────────────
export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be used inside <AuthProvider>");
  return ctx;
}
