import Link from 'next/link';
import { Button } from '../components/ui/Button';
import {
    PlusIcon,
    LayoutDashboard,
    Share2,
    Link as LinkIcon,
} from 'lucide-react';
import IssuesList from './IssuesList';
import DashboardStats from './DashboardStats';
import DashboardWidgets from './DashboardWidgets';

export default function DashboardPage() {
    return (
        <div className="space-y-8">
            {/* Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-border-subtle pb-6">
                <div className="space-y-1">
                    <h1 className="text-2xl font-semibold text-text-primary tracking-tight">
                        Project dashboard
                    </h1>
                    <p className="text-sm text-text-secondary">
                        Overview of your team's progress and active items
                    </p>
                </div>
                <div className="flex items-center gap-3">
                    <Button variant="outline" size="sm" className="h-8 text-xs">
                        <Share2 size={14} className="mr-2" />
                        Invite Team
                    </Button>
                    <Link href="/issues/new">
                        <Button
                            size="sm"
                            className="h-8 text-xs shadow-[0_0_10px_rgba(34,197,94,0.3)]"
                        >
                            <PlusIcon size={14} className="mr-2" />
                            New Issue
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Widgets Grid (Neon Style) */}
            <DashboardWidgets />

            {/* Stats Grid */}
            <div className="rounded-xl border border-border-subtle bg-surface-elevated/30 p-6">
                <div className="flex items-center justify-between mb-6">
                    <h3 className="text-sm font-medium text-text-secondary uppercase tracking-wider">
                        Overview
                    </h3>
                    <span className="text-xs text-text-muted">
                        Last updated: Just now
                    </span>
                </div>
                <DashboardStats />
            </div>

            {/* Recent Activity / Monitoring */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-4">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-semibold text-text-primary">
                            Recent Issues
                        </h2>
                        <Link
                            href="/issues"
                            className="text-xs text-primary-400 hover:text-primary-300 transition-colors"
                        >
                            View all issues
                        </Link>
                    </div>
                    <IssuesList />
                </div>

                <div className="space-y-4">
                    <h2 className="text-lg font-semibold text-text-primary">
                        Neon Auth
                    </h2>
                    <div className="rounded-xl border border-border-subtle bg-surface-elevated p-6 flex flex-col items-center text-center h-full justify-center min-h-[300px]">
                        <div className="mb-4 p-4 rounded-full bg-surface-subtle border border-border-subtle">
                            <LayoutDashboard
                                className="text-text-secondary"
                                size={32}
                            />
                        </div>
                        <h3 className="text-base font-semibold text-text-primary mb-2">
                            Manage your app&apos;s users with Neon
                        </h3>
                        <p className="text-sm text-text-secondary mb-6 max-w-[250px]">
                            Embed ready-made auth UI components into your app in
                            minutes.
                        </p>
                        <div className="flex gap-3">
                            <Button variant="outline" size="sm">
                                Enable Neon Auth
                            </Button>
                            <Button variant="ghost" size="sm">
                                Learn more
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
