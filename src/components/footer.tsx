import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='px-5 py-10 md:px-10 md:py-20 bg-primary border-t-2 border-secondary text-light'>
      <div className='max-w-6xl mx-auto'>
        <div className='pb-10 columns-1 md:columns-3 lg:columns-6 gap-10 md:gap-20'>
          {Array.from({ length: 6 }, (_, index) => (
            <div className='pb-10' key={index}>
              <h2 className='md:text-lg text-secondary font-semibold'>Solutions</h2>
              <div className='mt-5'>
                {Array.from({ length: 5 }, (_, index) => (
                  <Link
                    key={index}
                    href='#'
                    className='text-light/80 hover:text-light transition-all duration-300 text-sm font-normal block'
                  >
                    Solution {index + 1}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className='flex flex-col md:flex-row justify-between items-center pt-10 border-t border-light/20'>
          <Link
            href='/'
            className='text-light font-bold text-2xl'
          >
            <Image
              src='/logo.png'
              alt='Logo'
              width={100}
              height={100}
              className='h-12 w-auto'
            />
          </Link>
          <p>
            @{(new Date()).getFullYear()} Url Shortener. All rights reserved.
          </p>
          <div className='flex gap-5'>
            <Link
              href='#'
            >
              <span className='iconify mdi--instagram w-8 h-8'></span>
            </Link>
            <Link
              href='#'>
              <span className='iconify mdi--twitter w-8 h-8'></span>
            </Link>
            <Link
              href='#'>
              <span className='iconify mdi--facebook w-8 h-8'></span>
            </Link>
            <Link
              href='#'>
              <span className='iconify mdi--linkedin w-8 h-8'></span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}