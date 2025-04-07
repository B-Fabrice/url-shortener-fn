'use client'

import { useMyLinksQuery } from '@/actions/link'
import Link from 'next/link'
import LinkCard from './link-card'
import { useEffect } from 'react'

export default function Dashboard() {
  const { data, isLoading, refetch } = useMyLinksQuery()

  useEffect(() => {
    refetch()
  }, [refetch])

  return (
    <section>
      <div className='flex items-center justify-between'>
        <h2 className='text-xl md:text-3xl font-semibold'>Shorten a long link</h2>
        <Link
          href='/dashboard/create'
          className='bg-blue text-light py-2 px-3 rounded font-semibold transition-all duration-300 hover:bg-blue/80'
        >
          Create your link
        </Link>
      </div>
      {(isLoading || !data) ? <div className='min-h-[80vh] flex items-center justify-center'>
        {isLoading ? <span className='iconify mdi--dots-circle w-10 h-10 animate-spin'></span>
          : <p>No Shorten Url found</p>}
      </div> : <div className='flex flex-col gap-3 mt-5'>
        {data?.map((link) => (
          <LinkCard
            key={link.id}
            link={link}
          />
        ))}
      </div>}
    </section>
  )
}