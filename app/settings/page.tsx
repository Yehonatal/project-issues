import { getCurrentUser } from '@/lib/dal';
import SignOutButton from '@/app/components/SignOutButton';

export default async function SettingsPage() {
    const user = await getCurrentUser();

    if (!user) {
        return <div>Please log in to view settings.</div>;
    }

    return (
        <div className="max-w-2xl">
            <h1 className="text-2xl font-bold text-text-primary mb-8">
                Settings
            </h1>

            <div className="rounded-xl border border-border-subtle bg-surface-elevated p-6 mb-6">
                <h2 className="text-lg font-semibold text-text-primary mb-4">
                    Account
                </h2>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            Email
                        </label>
                        <div className="text-text-primary">{user.email}</div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-text-secondary mb-1">
                            User ID
                        </label>
                        <div className="text-text-secondary font-mono text-sm">
                            {user.id}
                        </div>
                    </div>
                </div>
            </div>

            <div className="rounded-xl border border-border-subtle bg-surface-elevated p-6">
                <h2 className="text-lg font-semibold text-text-primary mb-4">
                    Session
                </h2>
                <p className="text-text-secondary mb-4">
                    Sign out of your account on this device.
                </p>
                <SignOutButton />
            </div>
        </div>
    );
}
