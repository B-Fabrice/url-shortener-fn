'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Login() {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <main className='md:grid grid-cols-[60%_40%] h-[100dvh] template-areas-auto'>
      <header className='p-5 md:p-10 grid-area-header'>
        <Link href='/'>
          <Image
            src='/logo.png'
            alt='Logo'
            width={100}
            height={100}
            className='h-12 w-auto'
          />
        </Link>
      </header>
      <section className=' self-stretch grid-area-main'>
        <form className='max-w-lg w-full mx-auto px-5 md:px-10 py-10'>
          <h2 className='text-xl md:text-3xl font-semibold'>Log in and start sharing</h2>
          <div className='text-base font-normal mt-2 flex items-center gap-2'>
            Don&apos;t have an account?
            <Link
              href='/sign_up'
              className='text-blue underline'
            >
              Sign up
            </Link>
          </div>
          <div className='my-10 relative border-primary/20 border-[.1px]'>
            <p className='px-5 bg-white absolute mx-auto inset-x-0 w-fit -top-3'>OR</p>
          </div>
          <fieldset className='w-full flex flex-col gap-3 md:gap-5'>
            <div className=''>
              <label>Email</label>
              <input
                type='email'
                className=''
              />
            </div>
            <div className=''>
              <div className='flex items-center justify-between'>
                <label>Password</label>
                <button
                  type='button'
                  className='flex text-blue gap-1 items-center text-sm cursor-pointer'
                  onClick={() => setShowPassword(!showPassword)}
                >
                  <span className={`iconify ${showPassword ? 'mdi--eye-outline' : 'mdi--eye-off-outline'} w-4 h-4`}></span>
                  <span className=''>{showPassword ? 'Hide' : 'Show'}</span>
                </button>
              </div>
              <input
                type={showPassword ? 'text' : 'password'}
                className=''
              />
            </div>
            <Link
              href='#'
              className='text-blue underline ml-auto w-fit'
            >
              Forgot your password?
            </Link>
            <button
              type='submit'
              className='bg-blue cursor-pointer text-white py-2 px-5 mt-5 rounded flex text-lg items-center justify-center transition-all duration-300 hover:bg-blue/80'
            >
              <span className=''>Log in</span>
              {<span className='hidden iconify mdi--arrow-right w-5 h-5 ml-2'></span>}
            </button>
          </fieldset>
        </form>
      </section>
      <section className='hidden md:flex bg-blue/10 grid-area-content flex-col items-center justify-center p-10 gap-10'>
        <Image
          src='/account.svg'
          alt='Login'
          width={500}
          height={500}
          className='h-auto w-full'
        />
        <p className='text-lg font-semibold text-center leading-5'>
          Analyze your links and get insights on how they are performing.
        </p>
      </section>
    </main>
  )
}