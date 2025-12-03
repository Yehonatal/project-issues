import { getIssues } from '@/lib/dal';
import Link from 'next/link';
import Badge from '../components/ui/Badge';
import { formatRelativeTime } from '@/lib/utils';
import { Priority, Status } from '@/lib/types';
import { ISSUE_STATUS, ISSUE_PRIORITY } from '@/db/schema';

export default async function IssuesList() {
    const issues = await getIssues();

    if (!issues || issues.length === 0) {
        return (
            <div className="rounded-lg border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-8 backdrop-blur-xl shadow-elevated text-center">
                <h3 className="text-lg font-medium mb-2 text-text-primary">
                    No issues found
                </h3>
                <p className="text-text-secondary mb-6">
                    Get started by creating your first issue.
                </p>
                <Link href="/issues/new">
                    <button className="btn-3d">Create Issue</button>
                </Link>
            </div>
        );
    }

    return (
        <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-0 backdrop-blur-xl shadow-elevated overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-text-secondary bg-surface-subtle/60 border-b border-border-subtle">
                <div className="md:col-span-5">Title</div>
                <div className="md:col-span-2">Status</div>
                <div className="md:col-span-2">Priority</div>
                <div className="md:col-span-3">Created</div>
            </div>

            <div className="divide-y divide-border-subtle">
                {issues.map((issue: any) => (
                    <Link
                        key={issue.id}
                        href={`/issues/${issue.id}`}
                        className="block transition-colors"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-4 items-center hover:shadow-sm group">
                            <div className="md:col-span-5 font-medium truncate text-text-primary">
                                {issue.title}
                            </div>
                            <div className="md:col-span-2 mt-2 md:mt-0">
                                <Badge status={issue.status as Status}>
                                    {ISSUE_STATUS[issue.status as Status].label}
                                </Badge>
                            </div>
                            <div className="md:col-span-2 mt-2 md:mt-0">
                                <Badge priority={issue.priority as Priority}>
                                    {
                                        ISSUE_PRIORITY[
                                            issue.priority as Priority
                                        ].label
                                    }
                                </Badge>
                            </div>
                            <div className="md:col-span-3 text-sm text-text-secondary mt-2 md:mt-0">
                                {formatRelativeTime(new Date(issue.createdAt))}
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
