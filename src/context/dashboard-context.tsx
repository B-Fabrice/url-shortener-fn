'use client'

import Sidebar from '@/components/dashboard/sidebar'
import TopBar from '@/components/dashboard/top-bar'
import React, { createContext, useContext, useState, ReactNode } from 'react'
import { RootState } from '@/store'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'

interface DashboardContextProps {
    isOpen: boolean
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
    isDropdownOpen: boolean
    setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>
    collapse: boolean
    setCollapse: React.Dispatch<React.SetStateAction<boolean>>
}

const DashboardContext = createContext<DashboardContextProps | undefined>(undefined)

export const DashboardProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const [collapse, setCollapse] = useState<boolean>(false)

  const { user } = useSelector((state: RootState) => state)
  const router = useRouter() 

  useEffect(() => {
    if (!user.tokens && !user.user) {
      router.push('/login')
    }
  }, [user, router])

  return (
    <DashboardContext.Provider
      value={{ isOpen, setIsOpen, isDropdownOpen, setIsDropdownOpen, collapse, setCollapse }}
    >
      <div>
        <Sidebar />
        <div  className={`sm:ml-24 transition-all duration-300 ${collapse ? 'lg:ml-24' : 'lg:ml-80'}`}>
          <TopBar />
          <main className='px-5 py-5 md:px-10 bg-light'>{children}</main>
        </div>
      </div>
    </DashboardContext.Provider>
  )
}

export const useDashboardContext = () => {
  const context = useContext(DashboardContext)
  if (context === undefined) {
    throw new Error('useDashboardContext must be used within a DashboardProvider')
  }
  return context
}