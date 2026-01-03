'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    disabled?: boolean;
}

export default function NavLink({ href, icon, label, disabled }: NavLinkProps) {
    const pathname = usePathname();
    const isActive =
        pathname === href || (href !== '/' && pathname?.startsWith(href));

    return (
        <Link
            href={href}
            aria-disabled={disabled}
            tabIndex={disabled ? -1 : 0}
            className={cn(
                'group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-all duration-200',
                isActive
                    ? 'bg-surface-subtle text-text-primary border border-border-subtle shadow-sm'
                    : 'text-text-secondary hover:bg-surface-subtle/50 hover:text-text-primary border border-transparent',
                disabled && 'cursor-not-allowed opacity-50'
            )}
        >
            {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 h-4 w-1 rounded-r-full bg-primary-500 shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
            )}

            <span
                className={cn(
                    'transition-colors duration-200 relative z-10',
                    isActive
                        ? 'text-primary-500'
                        : 'text-text-muted group-hover:text-text-primary'
                )}
            >
                {icon}
            </span>
            <span className="nav-label hidden md:inline relative z-10">
                {label}
            </span>
        </Link>
    );
}
