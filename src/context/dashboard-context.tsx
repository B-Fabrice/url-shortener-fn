'use client'

import React, { createContext, useContext, useState, ReactNode } from 'react'

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

  return (
    <DashboardContext.Provider
      value={{ isOpen, setIsOpen, isDropdownOpen, setIsDropdownOpen, collapse, setCollapse }}
    >
      {children}
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