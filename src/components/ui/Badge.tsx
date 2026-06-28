// src/components/ui/Badge.tsx

type BadgeVariant = "green" | "yellow" | "gray" | "purple" | "blue" | "red";

const VARIANTS: Record<BadgeVariant, string> = {
  green: "bg-emerald-500/10 text-emerald-400 ring-emerald-500/20",
  yellow: "bg-amber-500/10 text-amber-400 ring-amber-500/20",
  gray: "bg-slate-500/10 text-slate-400 ring-slate-500/20",
  purple: "bg-violet-500/10 text-violet-400 ring-violet-500/20",
  blue: "bg-blue-500/10 text-blue-400 ring-blue-500/20",
  red: "bg-red-500/10 text-red-400 ring-red-500/20",
};

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
}

export function Badge({ variant = "gray", children }: BadgeProps) {
  return (
    <span
      className={[
        "inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium capitalize ring-1 ring-inset",
        VARIANTS[variant],
      ].join(" ")}
    >
      {children}
    </span>
  );
}
