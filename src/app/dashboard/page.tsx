'use client'

import Sidebar from '@/components/dashboard/sidebar'
import TopBar from '@/components/dashboard/top-bar'
import { useDashboardContext } from '@/context/dashboard-context'

export default function Dashboard() {
  const { collapse } = useDashboardContext()
  return (
    <div>
      <Sidebar />
      <div className={`sm:ml-24 transition-all duration-300 ${collapse ? 'lg:ml-24' : 'lg:ml-80'}`}>
        <TopBar />
        <main></main>
      </div>
    </div>
  )
}