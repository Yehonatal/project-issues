import { getIssue } from '@/lib/dal';
import IssueForm from '@/app/components/IssueForm';
import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
export default async function EditIssuePage({
    params,
}: {
    params: Promise<{ id: string }>;
}) {
    const { id } = await params;

    const issue = await getIssue(parseInt(id));

    if (!issue) {
        notFound();
    }

    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8">
            <Link
                href={`/issues/${id}`}
                className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary mb-6 transition-colors"
            >
                <ArrowLeftIcon size={16} className="mr-1" />
                Back to Issue
            </Link>

            <h1 className="text-2xl font-bold text-text-primary mb-6">
                Edit Issue
            </h1>

            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 backdrop-blur-xl shadow-elevated">
                <IssueForm userId={issue.userId} issue={issue} isEditing />
            </div>
        </div>
    );
}
