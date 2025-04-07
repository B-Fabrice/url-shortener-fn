'use client'

import { navLinks } from '@/data'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'

export default function Navbar() {
  const navbarRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    const handleScroll = () => {
      if (navbarRef.current) {
        const scrollTop = window.scrollY
        const navbarHeight = navbarRef.current.offsetHeight
        if (scrollTop > navbarHeight) {
          navbarRef.current.classList.add('scrolled', 'bg-white', 'border-b-2', 'border-b-gray-200')
        } else {
          navbarRef.current.classList.remove('scrolled', 'bg-white', 'border-b-2', 'border-b-gray-200')
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  // when open avoid scroll on body
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  return (
    <nav 
      className='group bg-primary sticky top-0 z-50 transition-all duration-300'
      ref={navbarRef}
    >
      <div className='py-4 px-5 md:px-10 max-w-7xl mx-auto flex justify-between items-center'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='h-12 w-auto'
          />
        </Link>
        <div className='hidden md:flex items-center gap-7 lg:gap-10'>
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className='text-white group-[.scrolled]:text-primary transition-all duration-300 font-medium text-lg'
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className='hidden md:flex items-center gap-5 lg:gap-10'>
          <Link
            href='/login'
            className='text-white group-[.scrolled]:text-primary transition-all duration-300 font-medium text-lg'
          >
            Login
          </Link>
          <Link
            href='/login'
            className='bg-white group-[.scrolled]:bg-blue group-[.scrolled]:hover:bg-blue/50 color-white py-[7px] px-4 font-medium rounded-lg hover:bg-white/50 text-primary group-[.scrolled]:text-white transition-all duration-300'
          >
            Signup Free
          </Link>
        </div>
        <button
          className='md:hidden cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`iconify ${isOpen ? 'mdi--close' : 'mdi--menu'} w-8 h-8 text-white group-[.scrolled]:text-primary transition-all duration-300`}></span>
        </button>
        <div
          className={`md:hidden fixed top-20 left-0 w-full bottom-0 bg-white flex p-10 flex-col items-start justify-between gap-5 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}
        >
          <div className='flex flex-col gap-5'>
            {navLinks.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className='text-primary font-medium text-lg'
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className='flex flex-col gap-5 w-full text-center'>
            <Link
              href='/login'
              className='text-primary font-medium text-lg'
              onClick={() => setIsOpen(false)}
            >
            Login
            </Link>
            <Link
              href='/login'
              className='border-2 border-blue w-full text-blue py-[6px] px-4 font-medium rounded-lg transition-all duration-300'
              onClick={() => setIsOpen(false)}
            >
            Signup Free
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}