import { Issue } from '@/db/schema';
import { formatRelativeTime } from '@/lib/utils';
import Link from 'next/link';
import Badge from './ui/Badge';
import { AlertCircle, CheckCircle2, Circle, Clock } from 'lucide-react';

interface IssueCardProps {
    issue: Issue;
}

export default function IssueCard({ issue }: IssueCardProps) {
    const { id, title, description, status, priority, createdAt } = issue;

    const getPriorityIcon = (priority: string) => {
        switch (priority) {
            case 'high':
                return <AlertCircle size={14} className="text-red-400" />;
            case 'medium':
                return <Circle size={14} className="text-yellow-400" />;
            case 'low':
                return <Circle size={14} className="text-blue-400" />;
            default:
                return <Circle size={14} className="text-text-muted" />;
        }
    };

    return (
        <Link href={`/issues/${id}`}>
            <div className="group relative flex flex-col gap-2 rounded-lg border border-border-subtle bg-surface-elevated p-3 shadow-sm transition-all hover:border-primary-500/50 hover:shadow-md hover:shadow-primary-500/5">
                <div className="flex items-start justify-between gap-2">
                    <h4 className="line-clamp-2 text-sm font-medium text-text-primary group-hover:text-primary-400 transition-colors">
                        {title}
                    </h4>
                </div>

                {description && (
                    <p className="line-clamp-2 text-xs text-text-secondary">
                        {description}
                    </p>
                )}

                <div className="mt-1 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 rounded bg-surface-subtle px-1.5 py-0.5 text-[10px] font-medium text-text-secondary border border-border-subtle">
                            {getPriorityIcon(priority)}
                            <span className="capitalize">{priority}</span>
                        </div>
                    </div>
                    <span className="text-[10px] text-text-muted">
                        {formatRelativeTime(new Date(createdAt))}
                    </span>
                </div>
            </div>
        </Link>
    );
}
