import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { PlusIcon } from 'lucide-react';
import WorkspacesList from './WorkspacesList';

export default function WorkspacesPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                    Workspaces
                </h1>
                <Link href="/workspaces/new">
                    <Button>
                        <span className="flex items-center">
                            <PlusIcon size={18} className="mr-2" />
                            New Workspace
                        </span>
                    </Button>
                </Link>
            </div>

            <WorkspacesList />
        </div>
    );
}
