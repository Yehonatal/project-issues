import { getWorkspace } from '@/lib/dal';
import { notFound } from 'next/navigation';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/app/components/ui/Card';
import { Users, Layers, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import Badge from '@/app/components/ui/Badge';

export default async function WorkspaceDetailPage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;
    const workspaceId = parseInt(id);

    if (isNaN(workspaceId)) {
        notFound();
    }

    const workspace = await getWorkspace(workspaceId);

    if (!workspace) {
        notFound();
    }

    return (
        <div className="flex h-full flex-col gap-8 p-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div>
                    <div className="flex items-center gap-3 mb-2">
                        <h1 className="text-3xl font-bold text-text-primary tracking-tight">
                            {workspace.name}
                        </h1>
                        <Badge
                            variant="outline"
                            className="text-xs uppercase tracking-wider"
                        >
                            Workspace
                        </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-text-secondary">
                        <Users size={16} className="text-green-500" />
                        <span>
                            Owned by{' '}
                            {workspace.user.name || workspace.user.email}
                        </span>
                    </div>
                </div>

                <Link
                    href="/projects/new"
                    className="inline-flex items-center justify-center rounded-md bg-green-500 px-4 py-2 text-sm font-medium text-black shadow-[0_0_20px_rgba(0,229,153,0.3)] transition-all hover:bg-green-400 hover:shadow-[0_0_30px_rgba(0,229,153,0.5)]"
                >
                    New Project
                </Link>
            </div>

            <div className="h-px w-full bg-border-subtle" />

            <div>
                <h2 className="text-xl font-semibold text-text-primary mb-6 flex items-center gap-2">
                    <Layers className="text-green-500" size={20} />
                    Projects
                </h2>

                {workspace.projects.length > 0 ? (
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {workspace.projects.map((project: any) => (
                            <Link
                                key={project.id}
                                href={`/projects/${project.id}`}
                            >
                                <Card
                                    hoverable
                                    className="h-full flex flex-col group"
                                >
                                    <CardHeader>
                                        <CardTitle className="group-hover:text-green-400 transition-colors">
                                            {project.name}
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex-1">
                                        <p className="text-sm text-text-secondary line-clamp-3">
                                            {project.description ||
                                                'No description provided.'}
                                        </p>
                                    </CardContent>
                                    <CardFooter className="border-t border-border-subtle pt-4 mt-auto flex justify-between items-center text-xs text-text-muted">
                                        <div className="flex items-center gap-1">
                                            <Calendar size={12} />
                                            {new Date(
                                                project.createdAt
                                            ).toLocaleDateString()}
                                        </div>
                                        <ArrowRight
                                            size={14}
                                            className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-500"
                                        />
                                    </CardFooter>
                                </Card>
                            </Link>
                        ))}
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center rounded-xl border border-dashed border-border-muted bg-surface-subtle/30 py-16 text-center">
                        <Layers className="mx-auto h-12 w-12 text-text-muted opacity-50 mb-4" />
                        <h3 className="text-lg font-medium text-text-primary">
                            No projects yet
                        </h3>
                        <p className="mt-2 text-sm text-text-secondary max-w-sm">
                            Get started by creating a new project in this
                            workspace.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
