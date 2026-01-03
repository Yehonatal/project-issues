import MainLayout from '@/app/components/MainLayout';

export default function SprintsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
