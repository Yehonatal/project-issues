import { getIssue } from '@/lib/dal';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Button from '@/app/components/ui/Button';
import { ArrowLeftIcon, Edit2Icon } from 'lucide-react';
import DeleteIssueButton from '../../components/DeleteIssueButton';
import IssueDetail from '@/app/components/IssueDetail';

export default async function IssuePage({
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
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="mb-8">
                <Link
                    href="/dashboard"
                    className="inline-flex items-center text-sm text-text-secondary hover:text-text-primary mb-4 transition-colors"
                >
                    <ArrowLeftIcon size={16} className="mr-1" />
                    Back to Issues
                </Link>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <h1 className="text-3xl font-bold text-text-primary">
                        {issue.title}
                    </h1>
                    <div className="flex items-center space-x-2">
                        <Link href={`/issues/${id}/edit`}>
                            <Button variant="outline" size="sm">
                                <span className="flex items-center">
                                    <Edit2Icon size={16} className="mr-1" />
                                    Edit
                                </span>
                            </Button>
                        </Link>
                        <DeleteIssueButton id={parseInt(id)} />
                    </div>
                </div>
            </div>

            <IssueDetail issue={issue} />
        </div>
    );
}
