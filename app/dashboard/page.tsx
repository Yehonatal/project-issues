import Link from 'next/link';
import Button from '../components/ui/Button';
import { PlusIcon } from 'lucide-react';
import IssuesList from './IssuesList';

export default function DashboardPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                    Dashboard
                </h1>
                <Link href="/issues/new">
                    <Button>
                        <span className="flex items-center">
                            <PlusIcon size={18} className="mr-2" />
                            New Issue
                        </span>
                    </Button>
                </Link>
            </div>

            <IssuesList />
        </div>
    );
}
