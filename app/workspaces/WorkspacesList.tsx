import { getWorkspaces } from '@/lib/dal';
import Link from 'next/link';
import { formatRelativeTime } from '@/lib/utils';
import { Users } from 'lucide-react';

export default async function WorkspacesList() {
    const workspaces = await getWorkspaces();

    if (!workspaces || workspaces.length === 0) {
        return (
            <div className="rounded-lg border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-8 backdrop-blur-xl shadow-elevated text-center">
                <h3 className="text-lg font-medium mb-2 text-text-primary">
                    No workspaces found
                </h3>
                <p className="text-text-secondary mb-6">
                    Get started by creating your first workspace.
                </p>
                <Link href="/workspaces/new">
                    <button className="btn-3d">Create Workspace</button>
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
                    className="block group"
                >
                    <div className="h-full rounded-xl border border-border-subtle bg-surface-elevated p-6 transition-all duration-200 hover:border-border-muted hover:shadow-md">
                        <div className="flex items-center justify-between mb-4">
                            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-subtle border border-border-subtle text-text-primary">
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
                            <span className="text-xs text-text-secondary">
                                {formatRelativeTime(
                                    new Date(workspace.createdAt)
                                )}
                            </span>
                        </div>
                        <h3 className="text-lg font-semibold text-text-primary mb-2 group-hover:text-green-600 transition-colors">
                            {workspace.name}
                        </h3>
                    </div>
                </Link>
            ))}
        </div>
    );
}
