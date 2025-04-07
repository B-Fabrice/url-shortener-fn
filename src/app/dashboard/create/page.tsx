'use client'

import { useShortenMutation } from '@/actions/link'
import { errorExtractor } from '@/utils'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function CreateLink() {
  const [destination, setDestination] = useState<string>('')
  const [shorten, { isLoading, error }] = useShortenMutation()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data } = await shorten(destination)
    if (data) {
      router.push('/dashboard')
    }
  }

  const errors = errorExtractor(error)

  return (
    <section>
      <h2 className='text-xl md:text-3xl font-semibold'>Create a link</h2>
      <form className='w-full mt-10 max-w-sm mx-auto' onSubmit={handleSubmit} method='POST'>
        <fieldset className='flex flex-col gap-5' disabled={isLoading}>
          <div className=''>
            <label>Email</label>
            <input
              type='url'
              className=''
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              placeholder='https://example.com'
              pattern='https://.*'
              required
            />
          </div>
          {errors.length > 0 && <ul className={`my-2 w-full text-sm text-red-500 ${errors.length > 1 ? 'list-disc pl-5' : ''}`}>
            {errors.map((error, index) => <li key={index}>{error}</li>)}
          </ul>}
          <button
            type='submit'
            disabled={isLoading}
            className='bg-blue cursor-pointer text-light py-2 px-5 mt-5 rounded flex gap-5 items-end justify-center text-lg transition-all duration-300 hover:bg-blue/80 disabled:opacity-50'
          >
            <span className=''>Create Link</span>
            {isLoading && <span className='iconify mdi--dots-circle w-5 h-5 animate-spin'></span>}
          </button>
        </fieldset>
      </form>
    </section>
  )
}