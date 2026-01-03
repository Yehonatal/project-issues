'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createWorkspace } from '@/app/actions/workspaces';
import { useAuth } from '@/lib/auth-context';
import Button from './ui/Button';
import toast from 'react-hot-toast';

export default function NewWorkspace() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { userId } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        imageUrl: '',
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
            toast.error('You must be logged in to create a workspace');
            return;
        }

        startTransition(async () => {
            const result = await createWorkspace({
                ...formData,
                userId,
            });

            if (result.success) {
                toast.success('Workspace created successfully');
                router.push('/workspaces');
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
                    Workspace Name
                </label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Acme Corp"
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

            <div className="space-y-2">
                <label
                    htmlFor="imageUrl"
                    className="block text-sm font-medium text-text-secondary"
                >
                    Image URL (Optional)
                </label>
                <input
                    id="imageUrl"
                    name="imageUrl"
                    type="text"
                    value={formData.imageUrl}
                    onChange={handleChange}
                    placeholder="https://example.com/logo.png"
                    className="w-full rounded-lg border border-border-subtle bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    disabled={isPending}
                />
            </div>

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isPending}>
                    {isPending ? 'Creating...' : 'Create Workspace'}
                </Button>
            </div>
        </form>
    );
}
