export default function DashboardSkeleton() {
    return (
        <div className="animate-pulse">
            <div className="flex items-center justify-between mb-8">
                <div className="h-8 w-32 bg-surface-subtle rounded" />
                <div className="h-10 w-36 bg-surface-subtle rounded" />
            </div>
            <div className="overflow-hidden rounded-lg border border-border-subtle bg-surface-canvas shadow-sm">
                <div className="grid grid-cols-12 gap-4 px-6 py-3 bg-surface-subtle border-b border-border-subtle">
                    <div className="col-span-5 h-4 bg-surface-elevated rounded" />
                    <div className="col-span-2 h-4 bg-surface-elevated rounded" />
                    <div className="col-span-2 h-4 bg-surface-elevated rounded" />
                    <div className="col-span-3 h-4 bg-surface-elevated rounded" />
                </div>
                <div className="divide-y divide-border-subtle">
                    {Array.from({ length: 5 }).map((_, index) => (
                        <div
                            key={index}
                            className="grid grid-cols-12 gap-4 px-6 py-4 items-center"
                        >
                            <div className="col-span-5 h-4 bg-surface-elevated rounded" />
                            <div className="col-span-2 h-4 bg-surface-elevated rounded" />
                            <div className="col-span-2 h-4 bg-surface-elevated rounded" />
                            <div className="col-span-3 h-4 bg-surface-elevated rounded" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
