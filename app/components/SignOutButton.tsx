'use client';

import { LogOut } from 'lucide-react';
import { useTransition } from 'react';
import { signOut } from '@/app/actions/auth';

export default function SignOutButton() {
    const [isPending, startTransition] = useTransition();

    const handleSignOut = () => {
        startTransition(async () => {
            await signOut();
        });
    };

    return (
        <button
            onClick={handleSignOut}
            disabled={isPending}
            title="Sign Out"
            className="p-1.5 text-text-muted hover:text-red-400 hover:bg-surface-elevated rounded-md transition-all"
        >
            <LogOut size={16} />
        </button>
    );
}
