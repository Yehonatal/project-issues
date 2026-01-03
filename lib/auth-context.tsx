'use client';

import { createContext, useContext, ReactNode } from 'react';

interface AuthContextType {
    userId: string | null;
    email: string | null;
}

const AuthContext = createContext<AuthContextType>({
    userId: null,
    email: null,
});

export function AuthProvider({
    children,
    userId,
    email,
}: {
    children: ReactNode;
    userId: string | null;
    email: string | null;
}) {
    return (
        <AuthContext.Provider value={{ userId, email }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth() {
    return useContext(AuthContext);
}
