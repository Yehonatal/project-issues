import { getSprints } from '@/lib/dal';
import Link from 'next/link';
import { formatRelativeTime } from '@/lib/utils';
import { Calendar, ArrowRight } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
    CardFooter,
} from '@/app/components/ui/Card';
import { Button } from '@/app/components/ui/Button';
import Badge from '@/app/components/ui/Badge';

export default async function SprintsList() {
    const sprints = await getSprints();

    if (!sprints || sprints.length === 0) {
        return (
            <div className="rounded-lg border border-border-subtle bg-surface-elevated/50 p-12 backdrop-blur-xl shadow-glass text-center">
                <h3 className="text-xl font-semibold mb-2 text-text-primary">
                    No sprints found
                </h3>
                <p className="text-text-secondary mb-8 max-w-md mx-auto">
                    Sprints help you track progress over time. Get started by
                    creating your first sprint.
                </p>
                <Link href="/sprints/new">
                    <Button variant="primary">Create Sprint</Button>
                </Link>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sprints.map((sprint: any) => {
                const isActive =
                    new Date(sprint.startDate) <= new Date() &&
                    new Date(sprint.endDate) >= new Date();
                const isPast = new Date(sprint.endDate) < new Date();

                return (
                    <Link
                        key={sprint.id}
                        href={`/sprints/${sprint.id}`}
                        className="block h-full"
                    >
                        <Card hoverable className="h-full flex flex-col group">
                            <CardHeader className="pb-2">
                                <div className="flex items-center justify-between mb-4">
                                    <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-surface-subtle border border-border-subtle text-green-500 shadow-[0_0_10px_rgba(0,229,153,0.1)]">
                                        <Calendar size={20} />
                                    </div>
                                    {isActive && (
                                        <Badge variant="success">Active</Badge>
                                    )}
                                    {isPast && (
                                        <Badge variant="secondary">
                                            Completed
                                        </Badge>
                                    )}
                                    {!isActive && !isPast && (
                                        <Badge variant="warning">
                                            Upcoming
                                        </Badge>
                                    )}
                                </div>
                                <CardTitle className="group-hover:text-green-400 transition-colors">
                                    {sprint.name}
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <p className="text-sm text-text-secondary">
                                    {new Date(
                                        sprint.startDate
                                    ).toLocaleDateString()}{' '}
                                    -{' '}
                                    {new Date(
                                        sprint.endDate
                                    ).toLocaleDateString()}
                                </p>
                            </CardContent>
                            <CardFooter className="border-t border-border-subtle pt-4 mt-auto flex justify-between items-center text-xs text-text-muted">
                                <span>View Board</span>
                                <ArrowRight
                                    size={14}
                                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-green-500"
                                />
                            </CardFooter>
                        </Card>
                    </Link>
                );
            })}
        </div>
    );
}
