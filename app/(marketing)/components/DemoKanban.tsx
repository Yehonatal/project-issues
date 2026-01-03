'use client';

import React from 'react';
import { Issue } from '@/db/schema';
import IssueCard from '@/app/components/IssueCard';
import { Plus } from 'lucide-react';

type Status = 'backlog' | 'todo' | 'in_progress' | 'done';

const COLUMNS: { id: Status; title: string }[] = [
    { id: 'backlog', title: 'Backlog' },
    { id: 'todo', title: 'To Do' },
    { id: 'in_progress', title: 'In Progress' },
    { id: 'done', title: 'Done' },
];

// Mock data for the landing page
const MOCK_ISSUES: Partial<Issue>[] = [
    {
        id: 101,
        title: 'Implement authentication',
        description: 'Add support for GitHub and Google OAuth providers',
        status: 'done',
        priority: 'high',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user_1',
    },
    {
        id: 102,
        title: 'Design system overhaul',
        description: 'Update color palette to match new brand guidelines',
        status: 'in_progress',
        priority: 'medium',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user_1',
    },
    {
        id: 103,
        title: 'API Rate limiting',
        description:
            'Implement sliding window rate limiter for public API endpoints',
        status: 'todo',
        priority: 'high',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user_1',
    },
    {
        id: 104,
        title: 'Mobile responsive layout',
        description: 'Fix navigation menu on smaller screens',
        status: 'backlog',
        priority: 'low',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user_1',
    },
    {
        id: 105,
        title: 'Database migration',
        description: 'Migrate from SQLite to PostgreSQL',
        status: 'done',
        priority: 'high',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user_1',
    },
    {
        id: 106,
        title: 'User dashboard analytics',
        description: 'Add charts for issue velocity and completion rates',
        status: 'in_progress',
        priority: 'medium',
        createdAt: new Date(),
        updatedAt: new Date(),
        userId: 'user_1',
    },
];

export default function DemoKanban() {
    const getIssuesByStatus = (status: Status) => {
        return MOCK_ISSUES.filter((issue) => issue.status === status);
    };

    return (
        <div className="flex h-full gap-4 overflow-x-auto pb-4 px-4">
            {COLUMNS.map((column) => (
                <div
                    key={column.id}
                    className="flex h-full min-w-[280px] flex-col rounded-xl bg-surface-subtle/30 border border-border-subtle p-3"
                >
                    <div className="mb-3 flex items-center justify-between px-1">
                        <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-text-secondary">
                                {column.title}
                            </span>
                            <span className="flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-surface-elevated px-1.5 text-xs text-text-muted border border-border-subtle">
                                {getIssuesByStatus(column.id).length}
                            </span>
                        </div>
                        <button className="text-text-muted hover:text-text-primary transition-colors">
                            <Plus size={16} />
                        </button>
                    </div>

                    <div className="flex flex-1 flex-col gap-3 overflow-y-auto custom-scrollbar pr-1">
                        {getIssuesByStatus(column.id).map((issue) => (
                            <div
                                key={issue.id}
                                className="transform transition-all hover:-translate-y-1 hover:shadow-lg duration-300"
                            >
                                <IssueCard issue={issue as Issue} />
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
}
