import { formatRelativeTime } from '@/lib/utils';
import { Priority, Status } from '@/lib/types';
import Badge from '@/app/components/ui/Badge';

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
        <>
            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 mb-8 backdrop-blur-xl shadow-elevated">
                <div className="flex flex-wrap gap-3 mb-6">
                    <Badge status={status as Status}>
                        {getStatusLabel(status)}
                    </Badge>
                    <Badge priority={priority as Priority}>
                        {getPriorityLabel(priority)}
                    </Badge>
                    <div className="text-sm text-text-secondary">
                        Created {formatRelativeTime(new Date(createdAt))}
                    </div>
                    {updatedAt !== createdAt && (
                        <div className="text-sm text-text-secondary">
                            Updated {formatRelativeTime(new Date(updatedAt))}
                        </div>
                    )}
                </div>

                {description ? (
                    <div className="prose dark:prose-invert max-w-none">
                        <p className="whitespace-pre-line">{description}</p>
                    </div>
                ) : (
                    <p className="text-text-secondary italic">
                        No description provided.
                    </p>
                )}
            </div>

            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 backdrop-blur-xl shadow-elevated">
                <h2 className="text-lg font-medium text-text-primary mb-2">
                    Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm font-medium text-text-secondary mb-1">
                            Assigned to
                        </p>
                        <p className="text-text-primary">{user.email}</p>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-text-secondary mb-1">
                            Status
                        </p>
                        <Badge status={status as Status}>
                            {getStatusLabel(status)}
                        </Badge>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-text-secondary mb-1">
                            Priority
                        </p>
                        <Badge priority={priority as Priority}>
                            {getPriorityLabel(priority)}
                        </Badge>
                    </div>
                    <div>
                        <p className="text-sm font-medium text-text-secondary mb-1">
                            Created
                        </p>
                        <p className="text-text-primary">
                            {formatRelativeTime(new Date(createdAt))}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
