import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { Plus, Layers, LayoutGrid, List } from 'lucide-react';
import KanbanBoard from '@/app/components/KanbanBoard';
import { getIssues } from '@/lib/dal';

export default async function IssuesPage() {
    const issues = await getIssues();

    return (
        <div className="flex h-full flex-col gap-6">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-subtle pb-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center shadow-sm">
                        <Layers className="text-primary-500" size={20} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-text-primary tracking-tight">
                            Issues
                        </h1>
                        <p className="text-sm text-text-secondary">
                            Track and manage tasks across all projects
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex items-center rounded-lg border border-border-subtle bg-surface-subtle p-1">
                        <button className="rounded p-1.5 text-text-primary bg-surface-elevated shadow-sm">
                            <LayoutGrid size={16} />
                        </button>
                        <button className="rounded p-1.5 text-text-secondary hover:text-text-primary transition-colors">
                            <List size={16} />
                        </button>
                    </div>
                    <Link href="/issues/new">
                        <Button className="shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                            <Plus size={16} className="mr-2" />
                            New Issue
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="flex-1 min-h-0">
                <KanbanBoard issues={issues} />
            </div>
        </div>
    );
}
