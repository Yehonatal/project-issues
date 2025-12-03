import Link from 'next/link';
import { Suspense } from 'react';
import {
    HomeIcon,
    PlusIcon,
    Layers,
    Users,
    Calendar,
    BarChart2,
    Settings,
    CheckSquare,
} from 'lucide-react';
import UserEmail from './UserEmail';
import NavLink from './NavLink';
import NavCollapseToggle from './NavCollapseToggle';
import UserEmailSkeleton from './UserEmailSkeleton';

export default function Navigation() {
    return (
        <aside
            id="site-sidebar"
            className={`fixed inset-y-0 left-0 flex flex-col border-r border-border-subtle bg-surface-elevated/95 px-2 py-6 backdrop-blur transition-all duration-200 w-64`}
        >
            <div className="mb-6 flex items-center justify-between px-1">
                <Link
                    href="/"
                    className="rounded-md px-2 py-1 text-lg font-semibold tracking-tight text-text-primary transition-colors hover:text-green-600 flex items-center gap-2"
                >
                    <CheckSquare
                        className="h-5 w-5 text-green-600"
                        strokeWidth={2.5}
                    />
                    <span className="nav-label hidden md:inline">Issues</span>
                </Link>

                <NavCollapseToggle targetId="site-sidebar" />
            </div>

            <nav className="flex flex-1 flex-col gap-1">
                <NavLink
                    href="/dashboard"
                    icon={<HomeIcon size={20} />}
                    label="Dashboard"
                />
                <NavLink
                    href="/issues"
                    icon={<Layers size={20} />}
                    label="Issues"
                    disabled={true}
                />
                <NavLink
                    href="/issues/new"
                    icon={<PlusIcon size={20} />}
                    label="New Issue"
                />
                <NavLink
                    href="/projects"
                    icon={<Layers size={20} />}
                    label="Projects"
                    disabled={true}
                />
                <NavLink
                    href="/workspaces"
                    icon={<Users size={20} />}
                    label="Workspaces"
                    disabled={true}
                />
                <NavLink
                    href="/sprints"
                    icon={<Calendar size={20} />}
                    label="Sprints"
                    disabled={true}
                />
                <NavLink
                    href="/analytics"
                    icon={<BarChart2 size={20} />}
                    label="Analytics"
                    disabled={true}
                />
                <NavLink
                    href="/settings"
                    icon={<Settings size={20} />}
                    label="Settings"
                    disabled={true}
                />
            </nav>

            <div className="border-t border-border-subtle pt-4 mt-4">
                <Suspense fallback={<UserEmailSkeleton />}>
                    <UserEmail />
                </Suspense>
            </div>
        </aside>
    );
}
