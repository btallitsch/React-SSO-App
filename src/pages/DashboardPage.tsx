// src/pages/DashboardPage.tsx

import { useAuth } from "../components/auth/AuthProvider";

const STATS = [
  { label: "Total Users", value: "1,284", change: "+12%", up: true },
  { label: "Active Sessions", value: "48", change: "+3", up: true },
  { label: "Pending Invites", value: "7", change: "-2", up: false },
  { label: "Avg. Login / Week", value: "3.2×", change: "+0.4×", up: true },
];

export function DashboardPage() {
  const { user } = useAuth();

  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h1 className="text-xl font-semibold text-white">
          Good morning{user ? `, ${user.name.split(" ")[0]}` : ""} 👋
        </h1>
        <p className="mt-0.5 text-sm text-slate-400">Here's what's happening today.</p>
      </div>

      {/* Stat grid — 2-column on mobile, 4-column on md+ */}
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-900 p-4">
            <p className="text-xs font-medium uppercase tracking-wider text-slate-500">{s.label}</p>
            <p className="mt-2 text-2xl font-semibold tabular-nums text-white">{s.value}</p>
            <p className={["mt-1 text-xs font-medium", s.up ? "text-emerald-400" : "text-red-400"].join(" ")}>
              {s.change} vs last week
            </p>
          </div>
        ))}
      </div>

      {/* Two-column lower section */}
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-medium text-slate-300">Recent Activity</h2>
          <p className="mt-6 text-center text-sm text-slate-600">Connect your activity feed here</p>
        </div>
        <div className="rounded-xl border border-slate-800 bg-slate-900 p-5">
          <h2 className="text-sm font-medium text-slate-300">Quick Actions</h2>
          <p className="mt-6 text-center text-sm text-slate-600">Add shortcuts for your team</p>
        </div>
      </div>
    </div>
  );
}
