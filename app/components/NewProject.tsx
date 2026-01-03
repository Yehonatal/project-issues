'use client';

import { useState, useTransition } from 'react';
import { useRouter } from 'next/navigation';
import { createProject } from '@/app/actions/projects';
import { useAuth } from '@/lib/auth-context';
import Button from './ui/Button';
import toast from 'react-hot-toast';

export default function NewProject() {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const { userId } = useAuth();

    const [formData, setFormData] = useState({
        name: '',
        key: '',
        description: '',
    });

    const [errors, setErrors] = useState<Record<string, string[]>>({});

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
    ) => {
        const { name, value } = e.target;

        // Auto-generate key from name if key is empty or was auto-generated
        if (
            name === 'name' &&
            (formData.key === '' || formData.key === generateKey(formData.name))
        ) {
            setFormData((prev) => ({
                ...prev,
                name: value,
                key: generateKey(value),
            }));
        } else if (name === 'key') {
            setFormData((prev) => ({
                ...prev,
                [name]: value.toUpperCase(),
            }));
        } else {
            setFormData((prev) => ({
                ...prev,
                [name]: value,
            }));
        }

        // Clear error when user types
        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const generateKey = (name: string) => {
        return name
            .split(' ')
            .map((word) => word[0])
            .join('')
            .toUpperCase()
            .slice(0, 5);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userId) {
            toast.error('You must be logged in to create a project');
            return;
        }

        startTransition(async () => {
            const result = await createProject({
                ...formData,
                userId,
            });

            if (result.success) {
                toast.success('Project created successfully');
                router.push('/projects');
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
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div className="md:col-span-3 space-y-2">
                    <label
                        htmlFor="name"
                        className="block text-sm font-medium text-text-secondary"
                    >
                        Project Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Website Redesign"
                        className={`w-full rounded-lg border bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 ${
                            errors.name
                                ? 'border-red-500'
                                : 'border-border-subtle'
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
                        htmlFor="key"
                        className="block text-sm font-medium text-text-secondary"
                    >
                        Key
                    </label>
                    <input
                        id="key"
                        name="key"
                        type="text"
                        value={formData.key}
                        onChange={handleChange}
                        placeholder="WEB"
                        maxLength={10}
                        className={`w-full rounded-lg border bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500 ${
                            errors.key
                                ? 'border-red-500'
                                : 'border-border-subtle'
                        }`}
                        disabled={isPending}
                    />
                    {errors.key && (
                        <p className="text-sm text-red-500 mt-1">
                            {errors.key[0]}
                        </p>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label
                    htmlFor="description"
                    className="block text-sm font-medium text-text-secondary"
                >
                    Description
                </label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Describe the project goals..."
                    className="w-full resize-none rounded-lg border border-border-subtle bg-surface-subtle px-4 py-2.5 text-text-primary transition-colors focus:border-green-500 focus:outline-none focus:ring-1 focus:ring-green-500"
                    disabled={isPending}
                />
            </div>

            <div className="flex justify-end pt-4">
                <Button type="submit" disabled={isPending}>
                    {isPending ? 'Creating...' : 'Create Project'}
                </Button>
            </div>
        </form>
    );
}
