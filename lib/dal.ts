import { db } from '@/db';
import { getSession } from './auth';
import { eq } from 'drizzle-orm';
import { cache } from 'react';
import { issues, users } from '@/db/schema';
import { mockDelay } from './utils';
// Note: removed unstable_cacheTag/unstable_cacheLife usage because
// they require the `cacheComponents` feature flag in Next.js canary builds.
// We rely on React's `cache` wrapper instead.

export const getCurrentUser = cache(async () => {
    await mockDelay(1000);
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

export const getIssues = cache(async () => {
    try {
        await mockDelay(1000);
        if (!db) return [];

        const result = await db.query.issues.findMany({
            with: {
                user: true,
            },
            orderBy: (issues, { desc }) => [desc(issues.createdAt)],
        });

        return result;
    } catch (error) {
        console.error('Error fetching issues:', error);
        throw new Error('Failed to fetch issues');
    }
});

export const getIssue = async (id: number) => {
    try {
        await mockDelay(700);
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
