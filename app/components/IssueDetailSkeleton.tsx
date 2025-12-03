'use client';

export default function IssueDetailSkeleton() {
    return (
        <div className="max-w-4xl mx-auto p-4 md:p-8">
            <div className="mb-8">
                <div className="h-4 w-32 rounded shimmer bg-surface-elevated mb-4" />
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="h-8 w-64 rounded shimmer bg-surface-elevated" />
                    <div className="flex items-center space-x-2">
                        <div className="h-8 w-16 rounded shimmer bg-surface-elevated" />
                        <div className="h-8 w-20 rounded shimmer bg-surface-elevated" />
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 mb-8 backdrop-blur-xl shadow-elevated">
                <div className="flex flex-wrap gap-3 mb-6">
                    <div className="h-6 w-16 rounded shimmer bg-surface-elevated" />
                    <div className="h-6 w-12 rounded shimmer bg-surface-elevated" />
                    <div className="h-4 w-24 rounded shimmer bg-surface-elevated" />
                </div>
                <div className="space-y-2">
                    <div className="h-4 w-full rounded shimmer bg-surface-elevated" />
                    <div className="h-4 w-3/4 rounded shimmer bg-surface-elevated" />
                    <div className="h-4 w-1/2 rounded shimmer bg-surface-elevated" />
                </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 backdrop-blur-xl shadow-elevated">
                <div className="h-6 w-16 rounded shimmer bg-surface-elevated mb-2" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <div className="h-4 w-20 rounded shimmer bg-surface-elevated mb-1" />
                        <div className="h-4 w-32 rounded shimmer bg-surface-elevated" />
                    </div>
                    <div>
                        <div className="h-4 w-12 rounded shimmer bg-surface-elevated mb-1" />
                        <div className="h-6 w-20 rounded shimmer bg-surface-elevated" />
                    </div>
                    <div>
                        <div className="h-4 w-16 rounded shimmer bg-surface-elevated mb-1" />
                        <div className="h-6 w-12 rounded shimmer bg-surface-elevated" />
                    </div>
                    <div>
                        <div className="h-4 w-12 rounded shimmer bg-surface-elevated mb-1" />
                        <div className="h-4 w-24 rounded shimmer bg-surface-elevated" />
                    </div>
                </div>
            </div>
        </div>
    );
}
