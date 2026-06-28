// src/types/index.ts

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: "admin" | "editor" | "viewer";
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  accessToken: string | null;
}

export interface AuthContextValue extends AuthState {
  login: () => void;
  logout: () => void;
}

// ── Data table types ──────────────────────────────────────────────

export interface TableRow {
  id: string;
  name: string;
  email: string;
  role: User["role"];
  status: "active" | "inactive" | "pending";
  lastLogin: string;
}

export interface PaginationState {
  pageIndex: number;
  pageSize: number;
}
