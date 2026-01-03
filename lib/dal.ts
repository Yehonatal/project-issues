import { db } from '@/db';
import { getSession } from './auth';
import { eq, sql } from 'drizzle-orm';
import { cache } from 'react';
import { issues, users, projects, workspaces, sprints } from '@/db/schema';
import { mockDelay } from './utils';

export const getCurrentUser = cache(async () => {
    await mockDelay(1500);
    const session = await getSession();
    if (!session) {
        return null;
    }
    if (!db) return null;

    try {
        const results = await db
            .select()
            .from(users)
            .where(eq(users.id, session.userId));

        return results[0] || null;
    } catch (e) {
        console.error(e);
        return null;
    }
});

export const getUserByEmail = async (email: string) => {
    try {
        if (!db) return null;

        const user = await db.query.users.findFirst({
            where: eq(users.email, email),
        });

        return user;
    } catch (e) {
        console.error(e);
        return null;
    }
};

export const getAnalytics = async () => {
    try {
        await mockDelay(1000);
        const user = await getCurrentUser();
        if (!user) return null;
        if (!db) return null;

        const totalIssues = await db
            .select({ count: sql<number>`count(*)` })
            .from(issues)
            .where(eq(issues.userId, user.id));

        const issuesByStatus = await db
            .select({
                status: issues.status,
                count: sql<number>`count(*)`,
            })
            .from(issues)
            .where(eq(issues.userId, user.id))
            .groupBy(issues.status);

        const issuesByPriority = await db
            .select({
                priority: issues.priority,
                count: sql<number>`count(*)`,
            })
            .from(issues)
            .where(eq(issues.userId, user.id))
            .groupBy(issues.priority);

        return {
            totalIssues: totalIssues[0].count,
            issuesByStatus,
            issuesByPriority,
        };
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return null;
    }
};

export const getSprints = async () => {
    try {
        await mockDelay(1000);
        const user = await getCurrentUser();
        if (!user) return [];
        if (!db) return [];

        const result = await db.query.sprints.findMany({
            where: eq(sprints.userId, user.id),
            orderBy: (
                sprintsTable: typeof sprints,
                { desc }: { desc: (c: any) => any }
            ) => [desc(sprintsTable.createdAt)],
        });

        return result;
    } catch (error) {
        console.error('Error fetching sprints:', error);
        throw new Error('Failed to fetch sprints');
    }
};

export const getWorkspaces = async () => {
    try {
        await mockDelay(1000);
        const user = await getCurrentUser();
        if (!user) return [];
        if (!db) return [];

        const result = await db.query.workspaces.findMany({
            where: eq(workspaces.userId, user.id),
            orderBy: (
                workspacesTable: typeof workspaces,
                { desc }: { desc: (c: any) => any }
            ) => [desc(workspacesTable.createdAt)],
        });

        return result;
    } catch (error) {
        console.error('Error fetching workspaces:', error);
        throw new Error('Failed to fetch workspaces');
    }
};

export const getProjects = async () => {
    try {
        await mockDelay(1000);
        const user = await getCurrentUser();
        if (!user) return [];
        if (!db) return [];

        const result = await db.query.projects.findMany({
            where: eq(projects.userId, user.id),
            orderBy: (
                projectsTable: typeof projects,
                { desc }: { desc: (c: any) => any }
            ) => [desc(projectsTable.createdAt)],
        });

        return result;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw new Error('Failed to fetch projects');
    }
};

export const getIssues = async () => {
    try {
        await mockDelay(1000);
        const user = await getCurrentUser();
        if (!user) return [];
        if (!db) return [];

        const result = await db.query.issues.findMany({
            where: eq(issues.userId, user.id),
            with: {
                user: true,
            },
            orderBy: (
                issuesTable: typeof issues,
                { desc }: { desc: (c: any) => any }
            ) => [desc(issuesTable.createdAt)],
        });

        return result;
    } catch (error) {
        console.error('Error fetching issues:', error);
        throw new Error('Failed to fetch issues');
    }
};

export const getIssue = async (id: number) => {
    try {
        await mockDelay(1000);
        if (!db) return null;

        const issue = await db.query.issues.findFirst({
            where: eq(issues.id, id),
            with: {
                user: true,
            },
        });

        return issue;
    } catch (e) {
        console.error(e);
        return null;
    }
};
