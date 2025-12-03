'use client';

export default function IssueFormSkeleton() {
    return (
        <div className="space-y-6">
            <div>
                <div className="h-4 w-16 rounded shimmer bg-surface-elevated mb-2" />
                <div className="h-10 w-full rounded shimmer bg-surface-elevated" />
            </div>
            <div>
                <div className="h-4 w-24 rounded shimmer bg-surface-elevated mb-2" />
                <div className="h-24 w-full rounded shimmer bg-surface-elevated" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <div className="h-4 w-12 rounded shimmer bg-surface-elevated mb-2" />
                    <div className="h-10 w-full rounded shimmer bg-surface-elevated" />
                </div>
                <div>
                    <div className="h-4 w-16 rounded shimmer bg-surface-elevated mb-2" />
                    <div className="h-10 w-full rounded shimmer bg-surface-elevated" />
                </div>
            </div>
            <div className="h-10 w-32 rounded shimmer bg-surface-elevated" />
        </div>
    );
}
