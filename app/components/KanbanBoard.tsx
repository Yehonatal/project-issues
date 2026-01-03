'use client';

import React, { useState, useRef } from 'react';
import { Issue } from '@/db/schema';
import IssueCard from './IssueCard';
import { PlusIcon } from 'lucide-react';
import Link from 'next/link';
import { updateIssue } from '@/app/actions/issues';
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation';

interface KanbanBoardProps {
    issues: Issue[];
    projectId?: number;
    sprintId?: number;
}

type Status = 'backlog' | 'todo' | 'in_progress' | 'done';

const COLUMNS: { id: Status; title: string }[] = [
    { id: 'backlog', title: 'Backlog' },
    { id: 'todo', title: 'To Do' },
    { id: 'in_progress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
];

export default function KanbanBoard({
    issues,
    projectId,
    sprintId,
}: KanbanBoardProps) {
    const router = useRouter();
    const [optimisticIssues, setOptimisticIssues] = useState<Issue[]>(issues);
    const [draggedIssueId, setDraggedIssueId] = useState<number | null>(null);
    const [dragOverColumn, setDragOverColumn] = useState<Status | null>(null);

    // Update local state when props change
    React.useEffect(() => {
        setOptimisticIssues(issues);
    }, [issues]);

    const getIssuesByStatus = (status: Status) => {
        return optimisticIssues.filter((issue) => issue.status === status);
    };

    const handleDragStart = (e: React.DragEvent, issueId: number) => {
        setDraggedIssueId(issueId);
        e.dataTransfer.effectAllowed = 'move';
        // Create a ghost image if needed, or let browser handle it
    };

    const handleDragOver = (e: React.DragEvent, status: Status) => {
        e.preventDefault();
        if (dragOverColumn !== status) {
            setDragOverColumn(status);
        }
    };

    const handleDrop = async (e: React.DragEvent, status: Status) => {
        e.preventDefault();
        setDragOverColumn(null);

        if (!draggedIssueId) return;

        const issueToMove = optimisticIssues.find(
            (i) => i.id === draggedIssueId
        );
        if (!issueToMove || issueToMove.status === status) return;

        // Optimistic update
        const updatedIssues = optimisticIssues.map((issue) =>
            issue.id === draggedIssueId ? { ...issue, status } : issue
        );
        setOptimisticIssues(updatedIssues);

        // Server update
        try {
            const result = await updateIssue(draggedIssueId, { status });
            if (!result.success) {
                // Revert on failure
                setOptimisticIssues(issues);
                toast.error(result.message);
            } else {
                router.refresh();
            }
        } catch (error) {
            setOptimisticIssues(issues);
            toast.error('Failed to update issue status');
        }

        setDraggedIssueId(null);
    };

    return (
        <div className="flex h-full gap-6 overflow-x-auto pb-4">
            {COLUMNS.map((column) => (
                <div
                    key={column.id}
                    className="flex h-full min-w-[320px] flex-col"
                    onDragOver={(e) => handleDragOver(e, column.id)}
                    onDrop={(e) => handleDrop(e, column.id)}
                >
                    <div className="mb-4 flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-text-primary">
                                {column.title}
                            </h3>
                            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-surface-subtle px-1.5 text-xs font-medium text-text-secondary border border-border-subtle">
                                {getIssuesByStatus(column.id).length}
                            </span>
                        </div>
                        <div className="flex gap-1">
                            <Link
                                href={`/issues/new?status=${column.id}${
                                    projectId ? `&projectId=${projectId}` : ''
                                }${sprintId ? `&sprintId=${sprintId}` : ''}`}
                                className="rounded p-1 text-text-secondary hover:bg-surface-subtle hover:text-text-primary transition-colors"
                            >
                                <PlusIcon size={16} />
                            </Link>
                        </div>
                    </div>

                    <div
                        className={`flex-1 rounded-xl bg-surface-subtle/30 p-2 border transition-colors duration-200 ${
                            dragOverColumn === column.id
                                ? 'border-primary-500/50 bg-primary-500/5'
                                : 'border-border-subtle/50'
                        }`}
                    >
                        <div className="flex flex-col gap-3 h-full overflow-y-auto pr-1 custom-scrollbar">
                            {getIssuesByStatus(column.id).map((issue) => (
                                <div
                                    key={issue.id}
                                    draggable
                                    onDragStart={(e) =>
                                        handleDragStart(e, issue.id)
                                    }
                                    className={`kanban-card-wrapper transition-opacity duration-200 ${
                                        draggedIssueId === issue.id
                                            ? 'opacity-50'
                                            : 'opacity-100'
                                    }`}
                                >
                                    <IssueCard issue={issue} />
                                </div>
                            ))}
                            {getIssuesByStatus(column.id).length === 0 && (
                                <div className="flex h-32 items-center justify-center rounded-lg border border-dashed border-border-muted text-sm text-text-muted">
                                    Drop issues here
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
