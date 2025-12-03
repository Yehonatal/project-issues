import IssueFormSkeleton from '@/app/components/IssueFormSkeleton';

export default function Loading() {
    return (
        <div className="max-w-3xl mx-auto p-4 md:p-8">
            <div className="h-4 w-24 rounded shimmer bg-surface-elevated mb-6" />
            <div className="h-6 w-32 rounded shimmer bg-surface-elevated mb-6" />
            <div className="rounded-xl border border-border-subtle bg-gradient-to-br from-surface-elevated/90 to-surface-subtle/50 p-6 backdrop-blur-xl shadow-elevated">
                <IssueFormSkeleton />
            </div>
        </div>
    );
}
