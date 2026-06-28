// src/components/layout/AppShell.tsx
//
// Two-column layout: fixed sidebar (left) + scrollable main (right)

import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { Header } from "./Header";

export function AppShell() {
  return (
    <div className="flex h-screen overflow-hidden bg-slate-950 text-slate-100">
      {/* ── Left column ── */}
      <Sidebar />

      {/* ── Right column ── */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-y-auto p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
