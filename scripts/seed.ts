import 'dotenv/config';
import { hash } from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import { db } from '../db';
import {
    issues,
    users,
    projects,
    workspaces,
    sprints,
    type User,
} from '../db/schema';

async function main() {
    console.log('Starting database seeding...');

    // Clean up existing data
    await db.delete(issues);
    await db.delete(sprints);
    await db.delete(projects);
    await db.delete(workspaces);
    await db.delete(users);

    // Create demo users
    const demoPassword = await hash('password123', 10);

    const adminUserId = uuidv4();
    const memberUserId = uuidv4();
    const guestUserId = uuidv4();

    const adminUser = await db
        .insert(users)
        .values({
            id: adminUserId,
            email: 'admin@example.com',
            password: demoPassword,
        })
        .returning()
        .then((rows: User[]) => rows[0]);

    const memberUser = await db
        .insert(users)
        .values({
            id: memberUserId,
            email: 'user@example.com',
            password: demoPassword,
        })
        .returning()
        .then((rows: User[]) => rows[0]);

    const guestUser = await db
        .insert(users)
        .values({
            id: guestUserId,
            email: 'guest@example.com',
            password: demoPassword,
        })
        .returning()
        .then((rows: User[]) => rows[0]);

    console.log('Created demo users:');
    console.log(`- Admin: ${adminUser.email} (password: password123)`);
    console.log(`- User: ${memberUser.email} (password: password123)`);
    console.log(`- Guest: ${guestUser.email} (password: password123)`);

    // Create Workspaces
    const workspace1 = await db
        .insert(workspaces)
        .values({
            name: 'Acme Corp',
            userId: adminUserId,
            imageUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=AC',
        })
        .returning()
        .then((rows) => rows[0]);

    const workspace2 = await db
        .insert(workspaces)
        .values({
            name: 'Startup Inc',
            userId: memberUserId,
            imageUrl: 'https://api.dicebear.com/7.x/initials/svg?seed=SI',
        })
        .returning()
        .then((rows) => rows[0]);

    console.log('Created workspaces');

    // Create Projects
    const project1 = await db
        .insert(projects)
        .values({
            name: 'Website Redesign',
            key: 'WEB',
            description: 'Redesigning the corporate website',
            userId: adminUserId,
            workspaceId: workspace1.id,
        })
        .returning()
        .then((rows) => rows[0]);

    const project2 = await db
        .insert(projects)
        .values({
            name: 'Mobile App',
            key: 'MOB',
            description: 'iOS and Android application',
            userId: adminUserId,
            workspaceId: workspace1.id,
        })
        .returning()
        .then((rows) => rows[0]);

    const project3 = await db
        .insert(projects)
        .values({
            name: 'Internal Tools',
            key: 'INT',
            description: 'Internal dashboard and admin tools',
            userId: memberUserId,
            workspaceId: workspace2.id,
        })
        .returning()
        .then((rows) => rows[0]);

    console.log('Created projects');

    // Create Sprints
    const now = new Date();
    const twoWeeksFromNow = new Date(now.getTime() + 14 * 24 * 60 * 60 * 1000);
    const twoWeeksAgo = new Date(now.getTime() - 14 * 24 * 60 * 60 * 1000);

    const sprint1 = await db
        .insert(sprints)
        .values({
            name: 'Sprint 1',
            startDate: twoWeeksAgo,
            endDate: now,
            status: 'completed',
            userId: adminUserId,
        })
        .returning()
        .then((rows) => rows[0]);

    const sprint2 = await db
        .insert(sprints)
        .values({
            name: 'Sprint 2',
            startDate: now,
            endDate: twoWeeksFromNow,
            status: 'active',
            userId: adminUserId,
        })
        .returning()
        .then((rows) => rows[0]);

    console.log('Created sprints');

    // Create demo issues
    const issueTitles = [
        'Implement user authentication',
        'Design landing page',
        'Add dark mode support',
        'Create issue management API',
        'Implement drag and drop for issues',
        'Fix navigation bug on mobile',
        'Optimize database queries',
        'Add unit tests for auth',
        'Update documentation',
        'Refactor component library',
        'Setup CI/CD pipeline',
        'Integrate payment gateway',
        'Create user profile page',
        'Add email notifications',
        'Implement search functionality',
        'Fix layout shift on loading',
        'Add analytics tracking',
        'Create admin dashboard',
        'Implement file upload',
        'Add social login',
        'Optimize image loading',
        'Fix accessibility issues',
        'Add keyboard shortcuts',
        'Implement real-time updates',
        'Create onboarding tour',
    ];

    const statuses = ['backlog', 'todo', 'in_progress', 'done'];
    const priorities = ['low', 'medium', 'high'];
    const usersList = [adminUserId, memberUserId, guestUserId];
    const projectsList = [project1.id, project2.id, project3.id];
    const sprintsList = [sprint1.id, sprint2.id, null];

    for (let i = 0; i < issueTitles.length; i++) {
        const title = issueTitles[i];
        const status = statuses[Math.floor(Math.random() * statuses.length)];
        const priority =
            priorities[Math.floor(Math.random() * priorities.length)];
        const userId = usersList[Math.floor(Math.random() * usersList.length)];
        const projectId =
            projectsList[Math.floor(Math.random() * projectsList.length)];
        const sprintId =
            sprintsList[Math.floor(Math.random() * sprintsList.length)];

        await db.insert(issues).values({
            title,
            description: `Description for ${title}. This is a sample issue created during seeding.`,
            priority: priority as 'low' | 'medium' | 'high',
            status: status as 'backlog' | 'todo' | 'in_progress' | 'done',
            userId,
            projectId,
            sprintId,
        });
    }

    console.log(`Created ${issueTitles.length} demo issues`);
    console.log('Database seeding completed!');
}

main().catch((err) => {
    console.error('Seeding failed:', err);
    process.exit(1);
});
