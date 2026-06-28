// src/components/auth/ProtectedRoute.tsx

import { Navigate } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { Spinner } from "../ui/Spinner";

interface Props {
  children: React.ReactNode;
  requiredRole?: "admin" | "editor" | "viewer";
}

export function ProtectedRoute({ children, requiredRole }: Props) {
  const { isAuthenticated, isLoading, user } = useAuth();

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center bg-slate-950">
        <Spinner size="lg" />
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  // Role hierarchy: admin > editor > viewer
  const hierarchy = { admin: 3, editor: 2, viewer: 1 };
  if (requiredRole && user) {
    const userLevel = hierarchy[user.role] ?? 0;
    const required = hierarchy[requiredRole] ?? 0;
    if (userLevel < required) {
      return <Navigate to="/unauthorized" replace />;
    }
  }

  return <>{children}</>;
}
