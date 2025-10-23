import Link from 'next/link';
import { HomeIcon, PlusIcon } from 'lucide-react';
import UserEmail from './UserEmail';
import { Suspense } from 'react';
import NavLink from './NavLink';

export default function Navigation() {
    return (
        <aside className="fixed inset-y-0 left-0 flex w-16 flex-col border-r border-border-subtle bg-surface-elevated/95 px-2 py-6 backdrop-blur md:w-64 md:px-4">
            <div className="mb-10 flex items-center justify-center px-2 md:justify-start">
                <Link
                    href="/"
                    className="rounded-md px-2 py-1 text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-brand-500"
                >
                    <span className="hidden md:inline">Mode</span>
                    <span className="md:hidden">M</span>
                </Link>
            </div>

            <nav className="flex flex-1 flex-col gap-1">
                <NavLink
                    href="/dashboard"
                    icon={<HomeIcon size={20} />}
                    label="Dashboard"
                />
                <NavLink
                    href="/issues/new"
                    icon={<PlusIcon size={20} />}
                    label="New Issue"
                />
            </nav>

            <div className="border-t border-border-subtle pt-4">
                <Suspense
                    fallback={
                        <div className="text-sm text-text-muted">loading…</div>
                    }
                >
                    <UserEmail />
                </Suspense>
            </div>
        </aside>
    );
}
