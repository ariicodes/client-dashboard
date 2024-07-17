export default function DashboardLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<main className='flex h-dvh flex-col items-center p-12'>{children}</main>
	);
}
