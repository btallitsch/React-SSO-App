// src/pages/UsersPage.tsx

import { useState } from "react";
import { DataTable } from "../components/table/DataTable";
import { userColumns } from "../components/table/columns";
import type { TableRow } from "../types";

// In production, replace with a real API call / React Query hook
const MOCK_DATA: TableRow[] = [
  { id: "1", name: "Alice Chen", email: "alice@acme.com", role: "admin", status: "active", lastLogin: "2026-06-25" },
  { id: "2", name: "Bob Martinez", email: "bob@acme.com", role: "editor", status: "active", lastLogin: "2026-06-20" },
  { id: "3", name: "Carol Singh", email: "carol@acme.com", role: "viewer", status: "inactive", lastLogin: "2026-05-01" },
  { id: "4", name: "David Kim", email: "david@acme.com", role: "editor", status: "pending", lastLogin: "2026-06-26" },
  { id: "5", name: "Eva Johansson", email: "eva@acme.com", role: "admin", status: "active", lastLogin: "2026-06-27" },
];

export function UsersPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold text-white">Users</h1>
          <p className="mt-0.5 text-sm text-slate-400">Manage team members and permissions.</p>
        </div>
        <button className="rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-indigo-500">
          + Invite user
        </button>
      </div>

      {/* Search */}
      <input
        type="search"
        placeholder="Search users…"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-sm rounded-lg border border-slate-700 bg-slate-800 px-4 py-2 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      <DataTable data={MOCK_DATA} columns={userColumns} globalFilter={search} />
    </div>
  );
}
