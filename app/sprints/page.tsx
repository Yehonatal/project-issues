import Link from 'next/link';
import { Button } from '@/app/components/ui/Button';
import { Plus, Timer } from 'lucide-react';
import SprintsList from './SprintsList';

export default function SprintsPage() {
    return (
        <div className="space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-border-subtle pb-6">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-surface-elevated border border-border-subtle flex items-center justify-center shadow-sm">
                        <Timer className="text-primary-500" size={20} />
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-text-primary tracking-tight">
                            Sprints
                        </h1>
                        <p className="text-sm text-text-secondary">
                            Track iterations and delivery cycles
                        </p>
                    </div>
                </div>
                <Link href="/sprints/new">
                    <Button className="shadow-[0_0_15px_rgba(34,197,94,0.3)]">
                        <Plus size={16} className="mr-2" />
                        New Sprint
                    </Button>
                </Link>
            </div>

            <SprintsList />
        </div>
    );
}
