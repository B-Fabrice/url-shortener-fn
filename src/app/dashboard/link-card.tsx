import Link from 'next/link'
import { useState } from 'react'

export default function LinkCard({ link }: { link: ShortenLink }) {
  const [copied, setCopied] = useState<boolean>(false)

  const handleCopy = () => {
    try {
      navigator.clipboard.writeText(link.short_url)
    } finally {
      setCopied(true)
      setTimeout(() => setCopied(false), 1000)
    }
  }

  return (
    <div key={link.id} className='flex items-center justify-between bg-white shadow rounded-lg p-5'>
      <div className='flex flex-col gap-1'>
        <Link
          href={link.original_url}
          target='_blank'
          className='text-primary font-bold text-lg md:text-2xl hover:underline'
        >
          {link.original_url}
        </Link>
        <Link
          href={link.short_url}
          target='_blank'
          className='text-blue font-semibold text-base md:text-lg hover:underline'
        >
          {link.short_url}
        </Link>
      </div>
      <button
        onClick={handleCopy}
        className='cursor-pointer'
      >
        <span className={`iconify mdi--content-copy w-5 h-5 text-primary ${copied ? 'animate-ping' : ''}`}></span>
      </button>
    </div>
  )
}