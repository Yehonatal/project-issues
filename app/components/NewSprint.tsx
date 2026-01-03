'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createSprint } from '@/app/actions/sprints';
import { useAuth } from '@/lib/auth-context';
import Button from './ui/Button';
import toast from 'react-hot-toast';

export default function NewSprint() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { userId } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        startDate: '',
        endDate: '',
    });

    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));

        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userId) {
            toast.error('You must be logged in to create a sprint');
            return;
        }

        startTransition(async () => {
            const result = await createSprint({
                ...formData,
                userId,
            });

            if (result.success) {
                toast.success('Sprint created successfully');
                router.push('/sprints');
                router.refresh();
            } else {
                if (result.errors) {
                    setErrors(result.errors);
                } else {
                    toast.error(result.message);
                }
            }
        });
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-text-secondary"
                >
                    Sprint Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Sprint 1"
                    className={`w-full rounded-lg border bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 ${
                        errors.name ? 'border-red-500' : 'border-border-subtle'
                    }`}
                    disabled={isPending}
                />
                {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                        {errors.name[0]}
                    </p>
                )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label
                        htmlFor="startDate"
                        className="block text-sm font-medium text-text-secondary"
                    >
                        Start Date
                    </label>
                    <input
                        id="startDate"
                        name="startDate"
                        type="date"
                        value={formData.startDate}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 ${
                            errors.startDate
                                ? 'border-red-500'
                                : 'border-border-subtle'
                        }`}
                        disabled={isPending}
                    />
                    {errors.startDate && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.startDate[0]}
                        </p>
                    )}
                </div>

                <div className="space-y-2">
                    <label
                        htmlFor="endDate"
                        className="block text-sm font-medium text-text-secondary"
                    >
                        End Date
                    </label>
                    <input
                        id="endDate"
                        name="endDate"
                        type="date"
                        value={formData.endDate}
                        onChange={handleChange}
                        className={`w-full rounded-lg border bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 ${
                            errors.endDate
                                ? 'border-red-500'
                                : 'border-border-subtle'
                        }`}
                        disabled={isPending}
                    />
                    {errors.endDate && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.endDate[0]}
                        </p>
                    )}
                </div>
            </div>

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isPending}>
                    {isPending ? 'Creating...' : 'Create Sprint'}
                </Button>
            </div>
        </form>
    );
}
