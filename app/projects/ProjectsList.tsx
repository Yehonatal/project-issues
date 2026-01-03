import { getProjects } from '@/lib/dal';
import Link from 'next/link';
import { formatRelativeTime } from '@/lib/utils';

export default async function ProjectsList() {
    const projects = await getProjects();

    if (!projects || projects.length === 0) {
        return (
            <div className="rounded-lg border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-8 backdrop-blur-xl shadow-elevated text-center">
                <h3 className="text-lg font-medium mb-2 text-text-primary">
                    No projects found
                </h3>
                <p className="text-text-secondary mb-6">
                    Get started by creating your first project.
                </p>
                <Link href="/projects/new">
                    <button className="btn-3d">Create Project</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project: any) => (
                <Link
                    key={project.id}
                    href={`/projects/${project.id}`}
                    className="block group"
                >
                    <div className="h-full rounded-xl border border-border-subtle bg-surface-elevated p-6 transition-all duration-200 hover:border-border-muted hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-subtle border border-border-subtle text-text-primary font-bold">
                                {project.key}
                            </div>
                            <span className="text-xs text-text-secondary">
                                {formatRelativeTime(
                                    new Date(project.createdAt)
                                )}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-green-600 transition-colors">
                            {project.name}
                        </h3>
                        <p className="text-sm text-text-secondary line-clamp-2">
                            {project.description || 'No description provided'}
                        </p>
                    </div>
                </Link>
            ))}
        </div>
    );
}
