import { InferSelectModel, relations } from 'drizzle-orm';
import {
    pgTable,
    serial,
    text,
    timestamp,
    pgEnum,
    integer,
} from 'drizzle-orm/pg-core';

// Enums for issue status and priority
export const statusEnum = pgEnum('status', [
    'backlog',
    'todo',
    'in_progress',
    'done',
]);
export const priorityEnum = pgEnum('priority', ['low', 'medium', 'high']);

// Projects table
export const projects = pgTable('projects', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    key: text('key').notNull(),
    description: text('description'),
    userId: text('user_id').notNull(),
    workspaceId: integer('workspace_id'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Workspaces table
export const workspaces = pgTable('workspaces', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    imageUrl: text('image_url'),
    userId: text('user_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Sprints table
export const sprints = pgTable('sprints', {
    id: serial('id').primaryKey(),
    name: text('name').notNull(),
    startDate: timestamp('start_date').notNull(),
    endDate: timestamp('end_date').notNull(),
    status: text('status').default('active').notNull(), // active, completed, future
    userId: text('user_id').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
});

// Issues table
export const issues = pgTable('issues', {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    description: text('description'),
    status: statusEnum('status').default('backlog').notNull(),
    priority: priorityEnum('priority').default('medium').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
    userId: text('user_id').notNull(),
    projectId: integer('project_id'),
    sprintId: integer('sprint_id'),
});

// Users table
export const users = pgTable('users', {
    id: text('id').primaryKey(),
    email: text('email').notNull().unique(),
    password: text('password').notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Relations between tables
export const workspacesRelations = relations(workspaces, ({ one, many }) => ({
    user: one(users, {
        fields: [workspaces.userId],
        references: [users.id],
    }),
    projects: many(projects),
}));

export const sprintsRelations = relations(sprints, ({ one, many }) => ({
    user: one(users, {
        fields: [sprints.userId],
        references: [users.id],
    }),
    issues: many(issues),
}));

export const projectsRelations = relations(projects, ({ one, many }) => ({
    user: one(users, {
        fields: [projects.userId],
        references: [users.id],
    }),
    workspace: one(workspaces, {
        fields: [projects.workspaceId],
        references: [workspaces.id],
    }),
    issues: many(issues),
}));

export const issuesRelations = relations(issues, ({ one }) => ({
    user: one(users, {
        fields: [issues.userId],
        references: [users.id],
    }),
    project: one(projects, {
        fields: [issues.projectId],
        references: [projects.id],
    }),
    sprint: one(sprints, {
        fields: [issues.sprintId],
        references: [sprints.id],
    }),
}));

export const usersRelations = relations(users, ({ many }) => ({
    issues: many(issues),
    projects: many(projects),
    workspaces: many(workspaces),
    sprints: many(sprints),
}));

// Types
export type Issue = InferSelectModel<typeof issues>;
export type User = InferSelectModel<typeof users>;
export type Project = InferSelectModel<typeof projects>;
export type Workspace = InferSelectModel<typeof workspaces>;
export type Sprint = InferSelectModel<typeof sprints>;

// Status and priority labels for display
export const ISSUE_STATUS = {
    backlog: { label: 'Backlog', value: 'backlog' },
    todo: { label: 'Todo', value: 'todo' },
    in_progress: { label: 'In Progress', value: 'in_progress' },
    done: { label: 'Done', value: 'done' },
};

export const ISSUE_PRIORITY = {
    low: { label: 'Low', value: 'low' },
    medium: { label: 'Medium', value: 'medium' },
    high: { label: 'High', value: 'high' },
};
