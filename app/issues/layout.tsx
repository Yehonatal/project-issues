import MainLayout from '@/app/components/MainLayout';

export default function IssuesLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <MainLayout>{children}</MainLayout>;
}
