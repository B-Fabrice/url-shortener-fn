import { useDashboardContext } from '@/context/dashboard-context'
import Image from 'next/image'
import Link from 'next/link'

export default function Sidebar() {
  const { collapse } = useDashboardContext()
  return (
    <aside className={`h-screen border-r-[1px] border-primary/30 sm:w-24 transition-all duration-300 p-8 fixed z-50 ${collapse ? 'lg:w-24' : 'lg:w-xs'}`}>
      <Link href='/' className='block h-fit'>
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
          className='flex items-center gap-2 mb-5 p-2 rounded-md hover:bg-primary/10 transition-all duration-300 border-l-2 border-blue bg-blue/10'
        >
          <span className='iconify mdi--link-variant w-8 h-8 text-primary group-[.scrolled]:text-primary transition-all duration-300'></span>
          <span className={`text-primary group-[.scrolled]:text-primary transition-all duration-300 ${collapse ? 'hidden' : 'block'}`}>Links</span>
        </Link>
        {Array.from({ length: 5 }, (_, index) => (
          <Link
            key={index}
            href='#'
            className='flex items-center gap-2 mb-5 p-2 rounded-md hover:bg-blue/10 transition-all duration-300'
          >
            <span className='iconify mdi--home-minus-outline w-8 h-8 text-primary group-[.scrolled]:text-primary transition-all duration-300'></span>
            <span className={`text-primary group-[.scrolled]:text-primary transition-all duration-300 ${collapse ? 'hidden' : 'block'}`}>Dashboard</span>
          </Link>
        ))}
      </div>
    </aside>
  )
}