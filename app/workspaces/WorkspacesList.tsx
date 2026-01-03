import { getWorkspaces } from '@/lib/dal';
import Link from 'next/link';
import { formatRelativeTime } from '@/lib/utils';
import { Users, ArrowRight } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';

export default async function WorkspacesList() {
    const workspaces = await getWorkspaces();

    if (!workspaces || workspaces.length === 0) {
        return (
            <div className="rounded-lg border border-border-subtle bg-surface-elevated/50 p-12 backdrop-blur-xl shadow-glass text-center">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                    No workspaces found
                </h3>
                <p className="text-text-secondary mb-8 max-w-md mx-auto">
                    Workspaces allow you to collaborate with your team. Get
                    started by creating your first workspace.
                </p>
                <Link href="/workspaces/new">
                    <Button variant="primary">Create Workspace</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workspaces.map((workspace: any) => (
                <Link
                    key={workspace.id}
                    href={`/workspaces/${workspace.id}`}
                    className="block h-full"
                >
                    <Card hoverable className="h-full flex flex-col group">
                        <CardHeader className="pb-2">
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-subtle border border-border-subtle text-green-500 shadow-[0_0_10px_rgba(0,229,153,0.1)]">
                                    {workspace.imageUrl ? (
                                        <img
                                            src={workspace.imageUrl}
                                            alt={workspace.name}
                                            className="w-full h-full object-cover rounded-lg"
                                        />
                                    ) : (
                                        <Users size={20} />
                                    )}
                                </div>
                                <span className="text-xs text-text-muted">
                                    {formatRelativeTime(
                                        new Date(workspace.createdAt)
                                    )}
                                </span>
                            </div>
                            <CardTitle className="group-hover:text-green-400 transition-colors">
                                {workspace.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex-1">
                            <p className="text-sm text-text-secondary">
                                Owned by{' '}
                                {workspace.user?.name ||
                                    workspace.user?.email ||
                                    'Unknown'}
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
