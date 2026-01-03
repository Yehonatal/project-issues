'use server';

import { db } from '@/db';
import { projects } from '@/db/schema';
import { getCurrentUser } from '@/lib/dal';
import { z } from 'zod';
import { revalidatePath } from 'next/cache';

// Define Zod schema for project validation
const ProjectSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be less than 50 characters'),

    key: z
        .string()
        .min(2, 'Key must be at least 2 characters')
        .max(10, 'Key must be less than 10 characters')
        .regex(/^[A-Z]+$/, 'Key must be uppercase letters only'),

    description: z.string().optional().nullable(),

    userId: z.string().min(1, 'User ID is required'),
});

export type ProjectData = z.infer<typeof ProjectSchema>;

export const createProject = async (data: ProjectData) => {
    try {
        // Security check - ensure user is authenticated
        const user = await getCurrentUser();
        if (!user) {
            return {
                success: false,
                message: 'Unauthorized access',
                errors: { general: ['Unauthorized'] },
            };
        }

        // Validate with Zod
        const validationResult = ProjectSchema.safeParse(data);
        if (!validationResult.success) {
            return {
                success: false,
                message: 'Validation failed',
                errors: validationResult.error.flatten().fieldErrors,
            };
        }

        // Create project with validated data
        const validatedData = validationResult.data;
        await db.insert(projects).values({
            name: validatedData.name,
            key: validatedData.key,
            description: validatedData.description || null,
            userId: validatedData.userId,
        });

        revalidatePath('/projects');
        return { success: true, message: 'Project created successfully' };
    } catch (error) {
        console.error('Error creating project:', error);
        return {
            success: false,
            message: 'An error occurred while creating the project',
            errors: { general: ['Failed to create project'] },
        };
    }
};
