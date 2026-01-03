import { Card } from '@/app/components/ui/Card';
import { ArrowRight, CheckCircle2, Clock, Layout, Zap } from 'lucide-react';
import Link from 'next/link';

export default function DashboardStats() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <StatCard
                icon={<CheckCircle2 className="text-primary-500" />}
                title="My Issues"
                value="12"
                link="/issues?assignee=me"
                linkText="View assigned"
            />
            <StatCard
                icon={<Clock className="text-blue-400" />}
                title="Current Sprint"
                value="Sprint 4"
                subtext="Ends in 3 days"
                link="/sprints/current"
                linkText="View board"
            />
            <StatCard
                icon={<Layout className="text-purple-400" />}
                title="Active Projects"
                value="3"
                link="/projects"
                linkText="View all"
            />
            <StatCard
                icon={<Zap className="text-yellow-400" />}
                title="Team Velocity"
                value="24pts"
                subtext="+12% vs last sprint"
            />
        </div>
    );
}

function StatCard({
    icon,
    title,
    value,
    link,
    linkText,
    subtext,
}: {
    icon: React.ReactNode;
    title: string;
    value: string;
    link?: string;
    linkText?: string;
    subtext?: string;
}) {
    return (
        <Card className="p-5 bg-surface-elevated/50 border-border-subtle hover:border-border-muted transition-all duration-200 group">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 rounded-lg bg-surface-subtle border border-border-subtle group-hover:border-primary-500/20 group-hover:bg-primary-500/5 transition-colors">
                    {icon}
                </div>
                {link && (
                    <Link
                        href={link}
                        className="text-xs text-text-secondary hover:text-primary-400 flex items-center gap-1 transition-colors"
                    >
                        {linkText} <ArrowRight size={12} />
                    </Link>
                )}
            </div>
            <div>
                <h3 className="text-sm font-medium text-text-secondary mb-1">
                    {title}
                </h3>
                <div className="flex items-end gap-2">
                    <span className="text-2xl font-bold text-text-primary">
                        {value}
                    </span>
                    {subtext && (
                        <span className="text-xs text-green-500 mb-1">
                            {subtext}
                        </span>
                    )}
                </div>
            </div>
        </Card>
    );
}
