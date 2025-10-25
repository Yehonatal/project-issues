import { cn } from '@/lib/utils';
import Link from 'next/link';

interface NavLinkProps {
    href: string;
    icon: React.ReactNode;
    label: string;
    isActive?: boolean;
}

export default function NavLink({ href, icon, label, isActive }: NavLinkProps) {
    return (
        <Link
            href={href}
            className={cn(
                'group relative flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors duration-150',
                isActive
                    ? 'bg-green-50 text-green-700 ring-1 ring-inset ring-green-200'
                    : 'text-text-secondary hover:bg-surface-subtle hover:text-text-primary'
            )}
        >
            <span
                className={cn(
                    'text-text-muted transition-colors duration-150 group-hover:text-green-600',
                    isActive && 'text-green-600'
                )}
            >
                {icon}
            </span>
            <span className="hidden md:inline">{label}</span>
        </Link>
    );
}
