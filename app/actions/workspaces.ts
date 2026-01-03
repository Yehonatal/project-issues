'use server';

import { db } from '@/db';
import { workspaces } from '@/db/schema';
import { getCurrentUser } from '@/lib/dal';
import { z } from 'zod';
import { revalidatePath, revalidateTag } from 'next/cache';

// Define Zod schema for workspace validation
const WorkspaceSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be less than 50 characters'),

    imageUrl: z.string().optional().nullable(),

    userId: z.string().min(1, 'User ID is required'),
});

export type WorkspaceData = z.infer<typeof WorkspaceSchema>;

export const createWorkspace = async (data: WorkspaceData) => {
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
        const validationResult = WorkspaceSchema.safeParse(data);
        if (!validationResult.success) {
            return {
                success: false,
                message: 'Validation failed',
                errors: validationResult.error.flatten().fieldErrors,
            };
        }

        // Create workspace with validated data
        const validatedData = validationResult.data;
        await db.insert(workspaces).values({
            name: validatedData.name,
            imageUrl: validatedData.imageUrl || null,
            userId: validatedData.userId,
        });

        revalidatePath('/workspaces');
        return { success: true, message: 'Workspace created successfully' };
    } catch (error) {
        console.error('Error creating workspace:', error);
        return {
            success: false,
            message: 'An error occurred while creating the workspace',
            errors: { general: ['Failed to create workspace'] },
        };
    }
};
