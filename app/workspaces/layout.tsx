import MainLayout from '@/app/components/MainLayout';

export default function WorkspacesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
