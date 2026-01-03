import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { PlusIcon } from 'lucide-react';
import SprintsList from './SprintsList';

export default function SprintsPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                    Sprints
                </h1>
                <Link href="/sprints/new">
                    <Button>
                        <span className="flex items-center">
                            <PlusIcon size={18} className="mr-2" />
                            New Sprint
                        </span>
                    </Button>
                </Link>
            </div>

            <SprintsList />
        </div>
    );
}
