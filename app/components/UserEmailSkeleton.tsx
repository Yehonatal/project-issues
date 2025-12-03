'use client';

export default function UserEmailSkeleton() {
    return (
        <div className="space-y-1">
            <div className="flex items-center justify-start px-2 py-2  ">
                <div className="h-5 w-5 rounded shimmer bg-surface-elevated mr-2 border border-border-subtle " />
                <div className="nav-label hidden md:inline h-4 w-24 rounded shimmer bg-surface-elevated border border-border-subtle" />
            </div>
            <div className="h-8 w-full rounded shimmer bg-surface-elevated border border-border-subtle " />
        </div>
    );
}
