import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { PlusIcon } from 'lucide-react';
import IssuesList from '@/app/dashboard/IssuesList';

export default function IssuesPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                    All Issues
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
