import { getAnalytics } from '@/lib/dal';
import { ISSUE_STATUS, ISSUE_PRIORITY } from '@/db/schema';
import { Status, Priority } from '@/lib/types';

export default async function AnalyticsPage() {
    const analytics = await getAnalytics();

    if (!analytics) {
        return <div>Failed to load analytics</div>;
    }

    const { totalIssues, issuesByStatus, issuesByPriority } = analytics;

    return (
        <div>
            <h1 className="text-2xl font-bold text-text-primary mb-8">
                Analytics
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="rounded-xl border border-border-subtle bg-surface-elevated p-6">
                    <h3 className="text-sm font-medium text-text-secondary mb-2">
                        Total Issues
                    </h3>
                    <p className="text-3xl font-bold text-text-primary">
                        {totalIssues}
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="rounded-xl border border-border-subtle bg-surface-elevated p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                        Issues by Status
                    </h3>
                    <div className="space-y-4">
                        {issuesByStatus.map((item: any) => (
                            <div
                                key={item.status}
                                className="flex items-center justify-between"
                            >
                                <span className="text-text-secondary">
                                    {ISSUE_STATUS[item.status as Status].label}
                                </span>
                                <span className="font-medium text-text-primary">
                                    {item.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="rounded-xl border border-border-subtle bg-surface-elevated p-6">
                    <h3 className="text-lg font-semibold text-text-primary mb-4">
                        Issues by Priority
                    </h3>
                    <div className="space-y-4">
                        {issuesByPriority.map((item: any) => (
                            <div
                                key={item.priority}
                                className="flex items-center justify-between"
                            >
                                <span className="text-text-secondary">
                                    {
                                        ISSUE_PRIORITY[
                                            item.priority as Priority
                                        ].label
                                    }
                                </span>
                                <span className="font-medium text-text-primary">
                                    {item.count}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
