import { getProjects } from '@/lib/dal';
import Link from 'next/link';
import { formatRelativeTime } from '@/lib/utils';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';
import { ArrowRight } from 'lucide-react';

export default async function ProjectsList() {
    const projects = await getProjects();

    if (!projects || projects.length === 0) {
        return (
            <div className="rounded-lg border border-border-subtle bg-surface-elevated/50 p-12 backdrop-blur-xl shadow-glass text-center">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                    No projects found
                </h3>
                <p className="text-text-secondary mb-8 max-w-md mx-auto">
                    Projects help you organize your issues and sprints. Get
                    started by creating your first project.
                </p>
                <Link href="/projects/new">
                    <Button variant="primary">Create Project</Button>
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
                    className="block h-full"
                >
                    <Card hoverable className="h-full flex flex-col group">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-subtle border border-border-subtle text-green-500 font-bold shadow-[0_0_10px_rgba(0,229,153,0.1)]">
                                    {project.key}
                                </div>
                                <span className="text-xs text-text-muted">
                                    {formatRelativeTime(
                                        new Date(project.createdAt)
                                    )}
                                </span>
                            </div>
                            <CardTitle className="group-hover:text-green-400 transition-colors">
                                {project.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-text-secondary line-clamp-2">
                                {project.description ||
                                    'No description provided'}
                            </p>
                        </CardContent>
                        <CardFooter className="border-t border-border-subtle pt-4 mt-auto flex justify-between items-center text-xs text-text-muted">
                            <span>View Details</span>
                            <ArrowRight
                                size={14}
                                className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-500"
                            />
                        </CardFooter>
                    </Card>
                </Link>
            ))}
        </div>
    );
}
