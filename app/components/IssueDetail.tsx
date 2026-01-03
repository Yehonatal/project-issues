import { formatRelativeTime } from '@/lib/utils';
import { Priority, Status } from '@/lib/types';
import Badge from '@/app/components/ui/Badge';
import {
    Calendar,
    Clock,
    User,
    Tag,
    AlertCircle,
    CheckCircle2,
    Circle,
} from 'lucide-react';

interface IssueDetailProps {
    issue: {
        id: number;
        title: string;
        description: string | null;
        status: string;
        priority: string;
        createdAt: Date;
        updatedAt: Date;
        user: {
            email: string;
        };
    };
}

export default function IssueDetail({ issue }: IssueDetailProps) {
    const { title, description, status, priority, createdAt, updatedAt, user } =
        issue;

    const getStatusLabel = (status: string) => {
        switch (status) {
            case 'backlog':
                return 'Backlog';
            case 'todo':
                return 'Todo';
            case 'in_progress':
                return 'In Progress';
            case 'done':
                return 'Done';
            default:
                return status;
        }
    };

    const getPriorityLabel = (priority: string) => {
        switch (priority) {
            case 'low':
                return 'Low';
            case 'medium':
                return 'Medium';
            case 'high':
                return 'High';
            default:
                return priority;
        }
    };

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
                <div className="rounded-lg border border-border-subtle bg-surface-canvas p-6 shadow-sm">
                    <div className="flex items-center gap-3 mb-4 text-sm text-text-muted">
                        <span className="font-mono text-primary-500">
                            ISSUE-{issue.id}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                            <Clock size={14} />
                            {formatRelativeTime(new Date(createdAt))}
                        </span>
                    </div>

                    <h1 className="text-2xl font-bold text-text-primary mb-6 tracking-tight">
                        {title}
                    </h1>

                    <div className="prose prose-invert max-w-none text-text-secondary">
                        {description ? (
                            <p className="whitespace-pre-line leading-relaxed">
                                {description}
                            </p>
                        ) : (
                            <p className="italic text-text-muted">
                                No description provided.
                            </p>
                        )}
                    </div>
                </div>

                {/* Activity / Comments Placeholder */}
                <div className="rounded-lg border border-border-subtle bg-surface-canvas p-6 shadow-sm opacity-50">
                    <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-4">
                        Activity
                    </h3>
                    <div className="text-sm text-text-muted italic">
                        No recent activity
                    </div>
                </div>
            </div>

            {/* Sidebar Metadata */}
            <div className="space-y-4">
                <div className="rounded-lg border border-border-subtle bg-surface-subtle/50 p-4 space-y-4">
                    <div>
                        <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">
                            Status
                        </label>
                        <Badge
                            status={status as Status}
                            className="w-full justify-center py-1.5"
                        >
                            {getStatusLabel(status)}
                        </Badge>
                    </div>

                    <div>
                        <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">
                            Priority
                        </label>
                        <Badge
                            priority={priority as Priority}
                            className="w-full justify-center py-1.5"
                        >
                            {getPriorityLabel(priority)}
                        </Badge>
                    </div>

                    <div className="pt-4 border-t border-border-muted">
                        <label className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2 block">
                            Assignee
                        </label>
                        <div className="flex items-center gap-2 p-2 rounded bg-surface-elevated border border-border-subtle">
                            <div className="h-6 w-6 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                                <User size={14} />
                            </div>
                            <span className="text-sm text-text-primary truncate">
                                {user.email}
                            </span>
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border-muted">
                        <div className="flex justify-between items-center text-sm mb-2">
                            <span className="text-text-muted">Created</span>
                            <span className="text-text-secondary">
                                {new Date(createdAt).toLocaleDateString()}
                            </span>
                        </div>
                        {updatedAt !== createdAt && (
                            <div className="flex justify-between items-center text-sm">
                                <span className="text-text-muted">Updated</span>
                                <span className="text-text-secondary">
                                    {new Date(updatedAt).toLocaleDateString()}
                                </span>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
