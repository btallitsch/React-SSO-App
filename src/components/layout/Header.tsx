// src/components/layout/Header.tsx

import { useAuth } from "../auth/AuthProvider";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-800 bg-slate-900 px-6">
      <div /> {/* breadcrumbs or page title can go here */}

      <div className="flex items-center gap-4">
        {user && (
          <div className="flex items-center gap-3">
            {user.avatar ? (
              <img src={user.avatar} alt="" className="h-8 w-8 rounded-full object-cover" />
            ) : (
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-700 text-xs font-semibold uppercase text-white">
                {user.name.slice(0, 2)}
              </div>
            )}
            <span className="hidden text-sm text-slate-300 sm:block">{user.name}</span>
          </div>
        )}

        <button
          onClick={logout}
          className="rounded-md px-3 py-1.5 text-xs font-medium text-slate-400 transition hover:bg-slate-800 hover:text-white"
        >
          Sign out
        </button>
      </div>
    </header>
  );
}
