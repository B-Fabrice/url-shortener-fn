import { useDashboardContext } from '@/context/dashboard-context'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  const { collapse, setIsOpen, isOpen } = useDashboardContext()
  return (
    <aside className={`h-screen border-r-[1px] border-primary/30 sm:w-24 transition-all duration-300 fixed z-50  max-md:inset-0 max-md:top-16 ${collapse ? 'p-5 lg:w-24' : 'p-5 lg:p-8 lg:w-xs'} ${isOpen ? 'max-md:translate-x-0' : 'max-sm:-translate-x-full'}`}>
      <Link href='/' className='hidden sm:block'>
        <Image
          src='/logo.png'
          alt='Logo'
          width={100}
          height={100}
          className='w-8 h-auto'
        />
      </Link>
      <div className='mt-5'>
        <Link
          href='#'
          onClick={() => setIsOpen(false)}
          className='flex items-center gap-2 mb-5 p-2 rounded-md hover:bg-primary/10 transition-all duration-300 border-l-2 border-blue bg-blue/10'
        >
          <span className='iconify mdi--link-variant w-8 h-8 text-primary group-[.scrolled]:text-primary transition-all duration-300'></span>
          <span className={`text-primary group-[.scrolled]:text-primary transition-all duration-300 ${collapse ? 'sm:hidden' : 'sm:hidden lg:block'}`}>Links</span>
        </Link>
        {Array.from({ length: 5 }, (_, index) => (
          <Link
            key={index}
            href='#'
            onClick={() => setIsOpen(false)}
            className='flex items-center gap-2 mb-5 p-2 rounded-md hover:bg-blue/10 transition-all duration-300'
          >
            <span className='iconify mdi--home-minus-outline w-8 h-8 text-primary group-[.scrolled]:text-primary transition-all duration-300'></span>
            <span className={`text-primary group-[.scrolled]:text-primary transition-all duration-300 ${collapse ? 'sm:hidden' : 'sm:hidden lg:block'}`}>Dashboard</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}