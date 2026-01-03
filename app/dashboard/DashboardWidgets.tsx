import { Card } from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';
import {
    ArrowRight,
    BookOpen,
    Layout,
    Plus,
    Settings,
    Users,
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardWidgets() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <WidgetCard
                icon={<Plus size={24} />}
                title="Create New Project"
                description="Start a new project to organize your issues and sprints."
                actionText="Create Project"
                href="/projects/new"
            />
            <WidgetCard
                icon={<Layout size={24} />}
                title="View My Issues"
                description="See all issues currently assigned to you across all projects."
                actionText="View Issues"
                href="/issues?assignee=me"
            />
            <WidgetCard
                icon={<Users size={24} />}
                title="Team Settings"
                description="Manage your team members, roles, and permissions."
                actionText="Manage Team"
                href="/settings/team"
            />
            <WidgetCard
                icon={<BookOpen size={24} />}
                title="Documentation"
                description="Learn how to use the platform and keyboard shortcuts."
                actionText="Read Docs"
                href="/docs"
            />
        </div>
    );
}

function WidgetCard({
    icon,
    title,
    description,
    actionText,
    href,
}: {
    icon: React.ReactNode;
    title: string;
    description: string;
    actionText: string;
    href: string;
}) {
    return (
        <Card className="flex flex-col p-6 bg-surface-elevated border-border-subtle hover:border-border-muted transition-all duration-200 h-full group">
            <div className="flex-1 flex flex-col items-center text-center mb-6">
                <div className="mb-4 text-text-primary p-3 rounded-full bg-surface-subtle border border-border-subtle group-hover:border-primary-500/30 group-hover:bg-primary-500/10 transition-colors">
                    {icon}
                </div>
                <h3 className="text-sm font-semibold text-text-primary mb-2">
                    {title}
                </h3>
                <p className="text-xs text-text-secondary leading-relaxed">
                    {description}
                </p>
            </div>
            <Link href={href} className="w-full">
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full justify-center text-xs h-8"
                >
                    {actionText}
                </Button>
            </Link>
        </Card>
    );
}
