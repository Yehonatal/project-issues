import { getProject, getProjectIssues } from '@/lib/dal';
import { notFound } from 'next/navigation';
import KanbanBoard from '@/app/components/KanbanBoard';
import { Calendar, Users, Layers } from 'lucide-react';
import Badge from '@/app/components/ui/Badge';

export default async function ProjectDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const projectId = parseInt(id);

    if (isNaN(projectId)) {
        notFound();
    }

    const [project, issues] = await Promise.all([
        getProject(projectId),
        getProjectIssues(projectId),
    ]);

    if (!project) {
        notFound();
    }

    return (
        <div className="flex h-full flex-col gap-6 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-text-primary tracking-tight">
                            {project.name}
                        </h1>
                        <Badge
                            variant="outline"
                            className="text-xs uppercase tracking-wider"
                        >
                            Project
                        </Badge>
                    </div>
                    <p className="text-text-secondary max-w-2xl">
                        {project.description || 'No description provided.'}
                    </p>
                </div>

                <div className="flex items-center gap-4 text-sm text-text-secondary">
                    <div className="flex items-center gap-1.5">
                        <Calendar size={16} className="text-green-500" />
                        <span>
                            Created{' '}
                            {new Date(project.createdAt).toLocaleDateString()}
                        </span>
                    </div>
                    {project.workspace && (
                        <div className="flex items-center gap-1.5">
                            <Users size={16} className="text-amber-400" />
                            <span>{project.workspace.name}</span>
                        </div>
                    )}
                </div>
            </div>

            <div className="h-px w-full bg-border-subtle" />

            <div className="flex-1 min-h-0">
                <KanbanBoard issues={issues} projectId={projectId} />
            </div>
        </div>
    );
}
