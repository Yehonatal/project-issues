'use server';

import { db } from '@/db';
import { sprints } from '@/db/schema';
import { getCurrentUser } from '@/lib/dal';
import { z } from 'zod';
import { revalidatePath, revalidateTag } from 'next/cache';

// Define Zod schema for sprint validation
const SprintSchema = z.object({
    name: z
        .string()
        .min(3, 'Name must be at least 3 characters')
        .max(50, 'Name must be less than 50 characters'),

    startDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'Invalid start date',
    }),

    endDate: z.string().refine((date) => !isNaN(Date.parse(date)), {
        message: 'Invalid end date',
    }),

    userId: z.string().min(1, 'User ID is required'),
});

export type SprintData = z.infer<typeof SprintSchema>;

export const createSprint = async (data: SprintData) => {
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
        const validationResult = SprintSchema.safeParse(data);
        if (!validationResult.success) {
            return {
                success: false,
                message: 'Validation failed',
                errors: validationResult.error.flatten().fieldErrors,
            };
        }

        // Create sprint with validated data
        const validatedData = validationResult.data;
        await db.insert(sprints).values({
            name: validatedData.name,
            startDate: new Date(validatedData.startDate),
            endDate: new Date(validatedData.endDate),
            userId: validatedData.userId,
        });

        revalidatePath('/sprints');
        return { success: true, message: 'Sprint created successfully' };
    } catch (error) {
        console.error('Error creating sprint:', error);
        return {
            success: false,
            message: 'An error occurred while creating the sprint',
            errors: { general: ['Failed to create sprint'] },
        };
    }
};
