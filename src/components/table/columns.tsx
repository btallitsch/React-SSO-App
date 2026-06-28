// src/components/table/columns.tsx

import type { ColumnDef } from "@tanstack/react-table";
import type { TableRow } from "../../types";
import { Badge } from "../ui/Badge";

export const userColumns: ColumnDef<TableRow, unknown>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div>
        <p className="font-medium text-white">{row.original.name}</p>
        <p className="text-xs text-slate-500">{row.original.email}</p>
      </div>
    ),
  },
  {
    accessorKey: "role",
    header: "Role",
    cell: ({ getValue }) => (
      <Badge variant={getValue() === "admin" ? "purple" : getValue() === "editor" ? "blue" : "gray"}>
        {String(getValue())}
      </Badge>
    ),
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ getValue }) => (
      <Badge
        variant={
          getValue() === "active" ? "green" : getValue() === "pending" ? "yellow" : "gray"
        }
      >
        {String(getValue())}
      </Badge>
    ),
  },
  {
    accessorKey: "lastLogin",
    header: "Last Login",
    cell: ({ getValue }) =>
      new Date(String(getValue())).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
  },
];
