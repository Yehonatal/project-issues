import { Suspense } from 'react';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import NewWorkspace from '@/app/components/NewWorkspace';
import IssueFormSkeleton from '@/app/components/IssueFormSkeleton'; // Reusing skeleton for now

const NewWorkspacePage = () => {
    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8">
            <Link
                href="/workspaces"
                className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary mb-6 transition-colors"
            >
                <ArrowLeftIcon size={16} className="mr-1" />
                Back to Workspaces
            </Link>

            <h1 className="text-2xl font-bold text-text-primary mb-6">
                Create New Workspace
            </h1>

            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 backdrop-blur-xl shadow-elevated">
                <Suspense fallback={<IssueFormSkeleton />}>
                    <NewWorkspace />
                </Suspense>
            </div>
        </div>
    );
};

export default NewWorkspacePage;
