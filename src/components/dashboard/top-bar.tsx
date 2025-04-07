import Link from 'next/link'
import Image from 'next/image'
import { useEffect } from 'react'
import { useDashboardContext } from '@/context/dashboard-context'
import { useLogoutMutation } from '@/actions/auth'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '@/store'
import { clearUser } from '@/slices/user'

export default function TopBar() {
  const {isOpen, setIsOpen, isDropdownOpen, setIsDropdownOpen } = useDashboardContext()
  const { collapse, setCollapse } = useDashboardContext()
  const [logout, { isLoading }] = useLogoutMutation()
  const dispatch: AppDispatch = useDispatch()
  const { tokens } = useSelector((state: RootState) => state.user)

  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isDropdownOpen && !(event.target as HTMLElement).closest('.dropdown')) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [isDropdownOpen, setIsDropdownOpen])

  const handleLogout = async () => {
    await logout(tokens?.refresh || '')
    setIsDropdownOpen(false)
    dispatch(clearUser())
  }


  return (
    <nav className='py-4 px-5 md:px-10 border-b-[1px] border-primary/30 flex items-center justify-between sm:justify-end relative'>
      <button
        onClick={() => setCollapse(!collapse)}
        className='hidden lg:grid cursor-pointer absolute -bottom-3 -left-3 bg-white rounded-full border-2 border-primary/20 justify-center items-center z-50  w-7 h-7'
      >
        <span className={`iconify mdi--chevron-right ${collapse ? 'rotate-180' : 'rotate-0'} transition-all duration-300`}></span>
      </button>
      <div className='sm:hidden flex items-center gap-5'>
        <button
          className='md:hidden cursor-pointer'
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`iconify ${isOpen ? 'mdi--close' : 'mdi--menu'} w-8 h-8 text-primary group-[.scrolled]:text-primary transition-all duration-300`}></span>
        </button>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='h-8 w-auto'
          />
        </Link>
      </div>
      <div className='relative'>
        <button
          className='flex items-center gap-2 cursor-pointer'
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <span className='rounded-full bg-primary text-white leading-[1px] w-8 h-8 text-center p-3 font-semibold grid items-center'>
            <span>U</span>
          </span>
          <span className='93847938475'>kwjdkwjb299b</span>
          <span className={`iconify mdi--menu-down w-4 h-4 text-primary group-[.scrolled]:text-primary transition-all duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`}></span>
        </button>
        <div className={`absolute right-0 top-10 border-[1px] border-primary/20 bg-white shadow-lg rounded-lg p-5 transition-all duration-300 ease-in-out ${isDropdownOpen ? 'block' : 'hidden'}`}>
          <div className='flex gap-5'>
            <span className='rounded-full bg-primary text-white leading-[1px] w-10 h-10 text-center p-3 font-semibold grid items-center'>
              <span>U</span>
            </span>
            <div className=''>
              <p>skowinoinoiwnoin</p>
              <p className='text-sm'>bizimanafabrice707@gmail.com</p>
            </div>
          </div>
          <div className='py-2 my-5 border-y-[.1px] border-primary/20 flex flex-col gap-2'>
            {Array.from({ length: 5 }, (_, index) => (
              <Link
                key={index}
                href='/'
                onClick={() => setIsDropdownOpen(false)}
                className='text-primary hover:text-primary/50 py-1'
              >
                Support
              </Link>
            ))}
          </div>
          <button
            onClick={handleLogout}
            disabled={isLoading}
            className='text-primary hover:text-primary/50 py-1 flex items-center gap-2 disabled:opacity-50 cursor-pointer'
          >
            Sign out
            {isLoading && <span className='iconify mdi--dots-circle w-5 h-5 animate-spin'></span>}
          </button>
        </div>
      </div>
    </nav>
  )
}