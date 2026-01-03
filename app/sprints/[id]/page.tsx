import { getSprint, getSprintIssues } from '@/lib/dal';
import { notFound } from 'next/navigation';
import KanbanBoard from '@/app/components/KanbanBoard';
import { Calendar, Clock, AlertCircle } from 'lucide-react';
import Badge from '@/app/components/ui/Badge';

export default async function SprintDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const sprintId = parseInt(id);

    if (isNaN(sprintId)) {
        notFound();
    }

    const [sprint, issues] = await Promise.all([
        getSprint(sprintId),
        getSprintIssues(sprintId),
    ]);

    if (!sprint) {
        notFound();
    }

    const isActive =
        new Date(sprint.startDate) <= new Date() &&
        new Date(sprint.endDate) >= new Date();
    const isPast = new Date(sprint.endDate) < new Date();

    return (
        <div className="flex h-full flex-col gap-6 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-text-primary tracking-tight">
                            {sprint.name}
                        </h1>
                        {isActive && <Badge variant="success">Active</Badge>}
                        {isPast && <Badge variant="secondary">Completed</Badge>}
                        {!isActive && !isPast && (
                            <Badge variant="warning">Upcoming</Badge>
                        )}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-text-secondary mt-2">
                        <div className="flex items-center gap-1.5">
                            <Calendar size={16} className="text-text-muted" />
                            <span>
                                {new Date(
                                    sprint.startDate
                                ).toLocaleDateString()}{' '}
                                -{' '}
                                {new Date(sprint.endDate).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="flex gap-3">
                    <div className="flex flex-col items-end">
                        <span className="text-2xl font-bold text-text-primary">
                            {issues.length}
                        </span>
                        <span className="text-xs text-text-muted uppercase tracking-wider">
                            Issues
                        </span>
                    </div>
                </div>
            </div>

            <div className="h-px w-full bg-border-subtle" />

            <div className="flex-1 min-h-0">
                <KanbanBoard issues={issues} sprintId={sprintId} />
            </div>
        </div>
    );
}
