import Link from 'next/link';
import Button from '@/app/components/ui/Button';
import { PlusIcon } from 'lucide-react';
import ProjectsList from './ProjectsList';

export default function ProjectsPage() {
    return (
        <div>
            <div className="flex items-center justify-between mb-8">
                <h1 className="text-2xl font-bold text-text-primary">
                    Projects
                </h1>
                <Link href="/projects/new">
                    <Button>
                        <span className="flex items-center">
                            <PlusIcon size={18} className="mr-2" />
                            New Project
                        </span>
                    </Button>
                </Link>
            </div>

            <ProjectsList />
        </div>
    );
}
