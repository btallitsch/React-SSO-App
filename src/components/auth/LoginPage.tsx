// src/components/auth/LoginPage.tsx

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Spinner } from "../ui/Spinner";

export function LoginPage() {
  const { isAuthenticated, isLoading, login } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) navigate("/", { replace: true });
  }, [isAuthenticated, navigate]);

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 bg-slate-950">
      <div className="text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-white">Acme Dashboard</h1>
        <p className="mt-2 text-sm text-slate-400">Sign in with your company account to continue</p>
      </div>

      {isLoading ? (
        <Spinner size="lg" />
      ) : (
        <button
          onClick={login}
          className="flex items-center gap-3 rounded-lg bg-white px-6 py-3 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          {/* Swap icon to match your IdP */}
          <svg className="h-5 w-5" viewBox="0 0 24 24" aria-hidden="true">
            <path
              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"
              fill="#4285F4"
            />
          </svg>
          Continue with SSO
        </button>
      )}
    </div>
  );
}
