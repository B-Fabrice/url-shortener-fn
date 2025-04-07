import { DashboardProvider } from '@/context/dashboard-context'
import type { Metadata } from 'next'


export const metadata: Metadata = {
  title: 'Url Shortener - Dashboard',
  description: 'A simple url shortener app'
}

export default function LoginLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <DashboardProvider>
      {children}
    </DashboardProvider>
  )
}
