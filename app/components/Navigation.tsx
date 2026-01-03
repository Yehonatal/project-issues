import Link from 'next/link';
import { Suspense } from 'react';
import {
    LayoutDashboard,
    Layers,
    Users,
    Calendar,
    BarChart2,
    Settings,
    CheckSquare,
    GitBranch,
    Database,
    PlusCircle,
    ChevronLeft,
} from 'lucide-react';
import UserEmail from './UserEmail';
import NavLink from './NavLink';
import NavCollapseToggle from './NavCollapseToggle';
import UserEmailSkeleton from './UserEmailSkeleton';

export default function Navigation() {
    return (
        <aside
            id="site-sidebar"
            className={`fixed inset-y-0 left-0 flex flex-col border-r border-border-subtle bg-surface-canvas px-3 py-4 transition-all duration-200 w-64 z-40`}
        >
            <div className="mb-6 px-2">
                <div className="flex items-center justify-between mb-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 group overflow-hidden"
                    >
                        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg transition-transform duration-300 group-hover:scale-105">
                            <CheckSquare
                                className="h-5 w-5 text-white"
                                strokeWidth={2.5}
                            />
                        </div>
                        <span className="font-bold text-text-primary tracking-tight nav-label whitespace-nowrap">
                            Issues
                        </span>
                    </Link>
                    <NavCollapseToggle targetId="site-sidebar" />
                </div>

                <div className="flex items-center justify-between rounded-md border border-border-subtle bg-surface-subtle px-3 py-1.5 text-sm text-text-secondary hover:border-border-muted hover:text-text-primary cursor-pointer transition-colors overflow-hidden h-9">
                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)] shrink-0"></span>
                        <span className="nav-label whitespace-nowrap">
                            production
                        </span>
                    </span>
                    <ChevronLeft
                        className="rotate-270 text-text-muted nav-label"
                        size={14}
                    />
                </div>
            </div>

            <div className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="mb-6">
                    <div className="px-3 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Project
                    </div>
                    <nav className="flex flex-col gap-0.5">
                        <NavLink
                            href="/dashboard"
                            icon={<LayoutDashboard size={18} />}
                            label="Dashboard"
                        />
                        <NavLink
                            href="/issues"
                            icon={<Layers size={18} />}
                            label="Issues"
                        />
                        <NavLink
                            href="/projects"
                            icon={<GitBranch size={18} />}
                            label="Projects"
                        />
                        <NavLink
                            href="/workspaces"
                            icon={<Database size={18} />}
                            label="Workspaces"
                        />
                    </nav>
                </div>

                <div className="mb-6">
                    <div className="px-3 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Planning
                    </div>
                    <nav className="flex flex-col gap-0.5">
                        <NavLink
                            href="/sprints"
                            icon={<Calendar size={18} />}
                            label="Sprints"
                        />
                        <NavLink
                            href="/issues/new"
                            icon={<PlusCircle size={18} />}
                            label="New Issue"
                        />
                    </nav>
                </div>

                <div>
                    <div className="px-3 mb-2 text-xs font-semibold text-text-muted uppercase tracking-wider">
                        Insights
                    </div>
                    <nav className="flex flex-col gap-0.5">
                        <NavLink
                            href="/analytics"
                            icon={<BarChart2 size={18} />}
                            label="Analytics"
                        />
                        <NavLink
                            href="/settings"
                            icon={<Settings size={18} />}
                            label="Settings"
                        />
                    </nav>
                </div>
            </div>

            {/* Footer / User Profile */}
            <div className="border-t border-border-subtle pt-4 mt-2">
                <Suspense fallback={<UserEmailSkeleton />}>
                    <UserEmail />
                </Suspense>
                <div className="mt-3 px-2 flex items-center justify-between text-xs text-text-muted">
                    <span>v2.0.0</span>
                    <Link
                        href="/feedback"
                        className="hover:text-text-primary transition-colors"
                    >
                        Feedback
                    </Link>
                </div>
            </div>
        </aside>
    );
}
