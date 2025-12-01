import { getCurrentUser, getIssues } from '@/lib/dal';
import Link from 'next/link';
import Button from '../components/ui/Button';
import { PlusIcon } from 'lucide-react';
import Badge from '../components/ui/Badge';
import { formatRelativeTime } from '@/lib/utils';
import { Priority, Status } from '@/lib/types';
import { ISSUE_STATUS, ISSUE_PRIORITY } from '@/db/schema';

export default async function DashboardPage() {
    await getCurrentUser();
    const issues = await getIssues();

    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-text-primary"></h1>
                <Link href="/issues/new">
                    <Button>
                        <span className="flex items-center">
                            <PlusIcon size={18} className="mr-2" />
                            New Issue
                        </span>
                    </Button>
                </Link>
            </div>

            {issues.length > 0 ? (
                <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-0 backdrop-blur-xl shadow-elevated overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 px-6 py-3 text-sm font-medium text-text-secondary bg-surface-subtle/60 border-b border-border-subtle">
                        <div className="md:col-span-5">Title</div>
                        <div className="md:col-span-2">Status</div>
                        <div className="md:col-span-2">Priority</div>
                        <div className="md:col-span-3">Created</div>
                    </div>

                    <div className="divide-y divide-border-subtle">
                        {issues.map((issue) => (
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
                                            {
                                                ISSUE_STATUS[
                                                    issue.status as Status
                                                ].label
                                            }
                                        </Badge>
                                    </div>
                                    <div className="md:col-span-2 mt-2 md:mt-0">
                                        <Badge
                                            priority={
                                                issue.priority as Priority
                                            }
                                        >
                                            {
                                                ISSUE_PRIORITY[
                                                    issue.priority as Priority
                                                ].label
                                            }
                                        </Badge>
                                    </div>
                                    <div className="md:col-span-3 text-sm text-text-secondary mt-2 md:mt-0">
                                        {formatRelativeTime(
                                            new Date(issue.createdAt)
                                        )}
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="rounded-lg border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-8 backdrop-blur-xl shadow-elevated text-center">
                    <h3 className="text-lg font-medium mb-2 text-text-primary">
                        No issues found
                    </h3>
                    <p className="text-text-secondary mb-6">
                        Get started by creating your first issue.
                    </p>
                    <Link href="/issues/new">
                        <Button>
                            <span className="flex items-center">
                                <PlusIcon size={18} className="mr-2" />
                                Create Issue
                            </span>
                        </Button>
                    </Link>
                </div>
            )}
        </div>
    );
}
